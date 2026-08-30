(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const desktopMotion = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 901px)");

  const toggle = $("#navToggle");
  const links = $("#navLinks");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("menu-open", open);
  });
  links.addEventListener("click", () => {
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("menu-open");
  });

  const progress = $("#scrollProgress");
  const hero = $(".hero");
  const paperSheets = $$(".paper__sheet");
  let effectsQueued = false;

  function updateScrollEffects() {
    const scrollY = window.scrollY;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    progress.style.transform = `scaleX(${Math.min(1, scrollY / maxScroll)})`;
    hero.style.setProperty("--scroll-y", `${scrollY}px`);
    paperSheets.forEach((sheet) => {
      const bounds = sheet.parentElement.getBoundingClientRect();
      const centerOffset = bounds.top + bounds.height / 2 - window.innerHeight / 2;
      const shift = Math.round(Math.max(-22, Math.min(22, centerOffset * -0.028)));
      sheet.style.setProperty("--paper-shift", `${shift}px`);
    });
    effectsQueued = false;
  }

  function queueScrollEffects() {
    if (effectsQueued) return;
    effectsQueued = true;
    requestAnimationFrame(updateScrollEffects);
  }

  window.addEventListener("scroll", queueScrollEffects, { passive: true });
  updateScrollEffects();

  let currentY = window.scrollY;
  let targetY = window.scrollY;
  let inertiaFrame = 0;

  function maxScrollY() {
    return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  }

  function stopInertia(sync = true) {
    if (inertiaFrame) cancelAnimationFrame(inertiaFrame);
    inertiaFrame = 0;
    if (sync) currentY = targetY = window.scrollY;
  }

  function runInertia() {
    const distance = targetY - currentY;
    currentY += distance * 0.095;
    if (Math.abs(distance) < 0.35) currentY = targetY;
    window.scrollTo(0, currentY);
    queueScrollEffects();
    if (currentY !== targetY) inertiaFrame = requestAnimationFrame(runInertia);
    else inertiaFrame = 0;
  }

  function glideTo(destination) {
    targetY = Math.max(0, Math.min(maxScrollY(), destination));
    currentY = window.scrollY;
    if (!inertiaFrame) inertiaFrame = requestAnimationFrame(runInertia);
  }

  if (!reducedMotion.matches && desktopMotion.matches) {
    window.addEventListener("wheel", (event) => {
      if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      event.preventDefault();
      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1;
      const delta = Math.max(-240, Math.min(240, event.deltaY * unit));
      if (!inertiaFrame) currentY = targetY = window.scrollY;
      targetY = Math.max(0, Math.min(maxScrollY(), targetY + delta * 1.05));
      if (!inertiaFrame) inertiaFrame = requestAnimationFrame(runInertia);
    }, { passive: false });

    window.addEventListener("pointerdown", () => stopInertia(), { passive: true });
    window.addEventListener("resize", () => stopInertia(), { passive: true });
    window.addEventListener("keydown", (event) => {
      if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) stopInertia();
    });
  }

  $$('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const target = $(anchor.getAttribute("href"));
      if (!target || reducedMotion.matches) return;
      event.preventDefault();
      const destination = target.getBoundingClientRect().top + window.scrollY - 70;
      if (desktopMotion.matches) glideTo(destination);
      else window.scrollTo({ top: destination, behavior: "smooth" });
      history.replaceState(null, "", anchor.getAttribute("href"));
    });
  });

  const videos = $$("video");
  if (reducedMotion.matches) {
    videos.forEach((video) => video.pause());
  } else {
    const videoState = new WeakMap(videos.map((video) => [video, { visible: false, ready: false, promise: null }]));
    let fetchQueue = Promise.resolve();

    const loadVideo = (video) => {
      const state = videoState.get(video);
      if (state.promise) return state.promise;

      const task = fetchQueue.then(async () => {
        const response = await fetch(video.dataset.src, { cache: "force-cache" });
        if (!response.ok) throw new Error(`Video request failed: ${response.status}`);
        const objectUrl = URL.createObjectURL(await response.blob());

        await new Promise((resolve, reject) => {
          const done = () => { cleanup(); resolve(); };
          const fail = () => { cleanup(); reject(new Error("Video decode failed")); };
          const cleanup = () => {
            video.removeEventListener("loadeddata", done);
            video.removeEventListener("error", fail);
          };
          video.addEventListener("loadeddata", done, { once: true });
          video.addEventListener("error", fail, { once: true });
          video.src = objectUrl;
          video.load();
        });

        state.ready = true;
        if (state.visible) video.play().catch(() => {});
      });

      state.promise = task;
      fetchQueue = task.catch(() => {});
      return task;
    };

    const preloadObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        loadVideo(entry.target).catch(() => {});
        preloadObserver.unobserve(entry.target);
      });
    }, { rootMargin: "900px 0px", threshold: 0 });

    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        const state = videoState.get(video);
        state.visible = entry.isIntersecting;
        if (entry.isIntersecting) loadVideo(video).catch(() => {});
        else video.pause();
        if (entry.isIntersecting && state.ready) video.play().catch(() => {});
      });
    }, { rootMargin: "20px 0px", threshold: 0.2 });

    videos.forEach((video) => {
      preloadObserver.observe(video);
      videoObserver.observe(video);
    });

    const revealTargets = $$(".experience__head > *, .experience__item, .paper__page, .paper__copy, .topd-impact h2, .topd-impact__invite > *, .section-head, .adoption-paper, .demo, .fpo-label, .contact__inner > *");
    revealTargets.forEach((element, index) => {
      element.classList.add("reveal");
      element.style.transitionDelay = `${Math.min(index % 3, 2) * 70}ms`;
    });
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-in", entry.isIntersecting);
      });
    }, { threshold: 0.06, rootMargin: "0px 0px -4%" });
    revealTargets.forEach((element) => revealObserver.observe(element));
  }
})();
