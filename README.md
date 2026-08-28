# Zhengpeng Xie — Academic Homepage

A deliberately minimal, zero-build academic homepage focused on two representative works and their impact on robotics.

## Page structure

1. Vision: “Reliable learning with theoretical guarantees.”
2. Education & Experience: HKUST(GZ) PhD from 2026, prior research roles, and undergraduate education
3. Trust Region Policy Distillation (TOP-D), with the rendered first page of the paper
4. Simple Policy Optimization (SPO), with the rendered first page of the official ICML/OpenReview camera-ready paper
5. The Impact of SPO: π*0.6 paper information and a wide official demo, followed by three portrait FPO++ Sim-to-Real demos
6. Compact contact section with the ambition “Building the foundations for a future of reliable, self-improving intelligence.”

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
- `assets/cv.pdf` — current CV

## Verified sources

- SPO: `https://arxiv.org/abs/2401.16025`
- TOP-D: `https://arxiv.org/abs/2607.04751`
- π*0.6: `https://www.pi.website/blog/pistar06`
- FPO++: `https://hongsukchoi.github.io/fpo-control/`

The π*0.6 technical report states that its DPPO/FPO variant uses an alternative PPO constraint following SPO. The FPO++ project page states that it adopts the SPO objective for negative-advantage actions.

## Permanent deployment with GitHub Pages

1. Sign in to the `MyRepositories-hub` GitHub account.
2. Create a public repository named exactly `MyRepositories-hub.github.io`.
3. Upload `index.html`, `README.md`, and the complete `assets/` directory to the repository root. Upload the extracted files, not the ZIP itself.
4. In the repository, open **Settings → Pages** and choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
5. The permanent site URL will be `https://myrepositories-hub.github.io/`.
6. For a more personal address, connect a custom domain in **Settings → Pages → Custom domain** after purchasing the domain.

The repository and Pages site were not publicly available when last checked on August 28, 2026, so the repository still needs to be created or made public before deployment.
