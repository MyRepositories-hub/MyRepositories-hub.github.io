# Zhengpeng Xie — Academic Homepage

A deliberately minimal, zero-build academic homepage focused on two representative works and their impact on robotics.

## Page structure

1. Vision: “Reliable learning with theoretical guarantees.”
2. Education & Experience: HKUST(GZ) PhD from 2026, prior research roles, and undergraduate education
3. Trust Region Policy Distillation (TOP-D), with the rendered first page of the paper
4. The Next Impact of TOP-D: an open invitation for collaboration across distillation, trustworthy post-training, and embodied intelligence
5. Simple Policy Optimization (SPO), with the rendered first page of the official ICML/OpenReview camera-ready paper
6. The Impact of SPO: π*0.6 paper information and a wide official demo, followed by three portrait FPO++ Sim-to-Real demos
7. Compact contact section with the ambition “Building the foundations for a future of reliable, self-improving intelligence,” plus a clickable global visitor map.

The site uses the selected classic cobalt palette as its fixed visual identity. Desktop mouse/trackpad scrolling uses a restrained inertial interpolation inspired by media-led research pages; touch devices and reduced-motion users retain native scrolling.

## Local preview

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

## Key files

- `index.html` — page content
- `assets/css/style.css` — responsive visual system using a personal cobalt/indigo accent
- `assets/js/main.js` — desktop inertial wheel scrolling, eased anchors, scroll progress, paper parallax, mobile navigation, reveals, and viewport-aware video playback
- `assets/papers/` — source PDFs and rendered first-page images for SPO and TOP-D
- `assets/media/` — locally hosted official robotics demos

## Verified sources

- SPO: `https://arxiv.org/abs/2401.16025`
- TOP-D: `https://arxiv.org/abs/2607.04751`
- π*0.6: `https://www.pi.website/blog/pistar06`
- FPO++: `https://hongsukchoi.github.io/fpo-control/`

The π*0.6 technical report states that its DPPO/FPO variant uses an alternative PPO constraint following SPO. The FPO++ project page states that it adopts the SPO objective for negative-advantage actions.

## Visitor map

The contact section embeds the free Flag Counter world map with project code `NbrY`. It displays aggregate visitor countries and pageviews, and clicking it opens the public detail/flag-map page. According to Flag Counter's privacy policy, the free counter uses no cookies and does not log visitor IP addresses; it adds only country/region and date tallies.

## Deployment

The site is deployed from the `main` branch of `MyRepositories-hub/MyRepositories-hub.github.io` with GitHub Pages.

- Live site: `https://myrepositories-hub.github.io/`
- Repository: `https://github.com/MyRepositories-hub/MyRepositories-hub.github.io`
- Pages source: `main` branch, repository root
- HTTPS: enforced

Future updates only require committing and pushing changed website files to `main`; GitHub Pages rebuilds automatically.
