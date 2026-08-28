const SCHOLAR = "https://scholar.google.com/citations?user=QuK9uDcAAAAJ&hl=en";

const PUBLICATIONS = [
  {
    title: "Trust Region Policy Distillation",
    short: "TOP-D",
    authors: [
      { n: "Zhengpeng Xie", me: true }, { n: "Li Lyna Zhang" },
      { n: "Zeke Xie" }, { n: "Mao Yang" }
    ],
    venue: "arXiv preprint arXiv:2607.04751",
    year: 2026,
    type: "preprint",
    first: true,
    highlight: true,
    tags: ["Featured", "TOP-D"],
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2607.04751" }],
    bibtex: `@article{xie2026trust,
  title   = {Trust Region Policy Distillation},
  author  = {Xie, Zhengpeng and Zhang, Li Lyna and Xie, Zeke and Yang, Mao},
  journal = {arXiv preprint arXiv:2607.04751},
  year    = {2026}
}`
  },
  {
    title: "MaineCoon: Pursuing A Real-Time Audio-Visual Social World Model",
    short: "MaineCoon",
    authors: [
      { n: "Lichen Bai" }, { n: "Tianyi Zhang" }, { n: "Shitong Shao" },
      { n: "D. Tan" }, { n: "Q. Zhong" }, { n: "Zhengpeng Xie", me: true },
      { n: "H. Li" }, { n: "Q. Huang" }, { n: "D. Shen" }, { n: "et al." }
    ],
    venue: "arXiv preprint arXiv:2606.17800",
    year: 2026,
    type: "preprint",
    first: false,
    highlight: false,
    tags: [],
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2606.17800" }],
    bibtex: `@article{bai2026mainecoon,
  title   = {MaineCoon: Pursuing A Real-Time Audio-Visual Social World Model},
  author  = {Bai, Lichen and Zhang, Tianyi and Shao, Shitong and Tan, D. and Zhong, Q. and Xie, Zhengpeng and Li, H. and Huang, Q. and Shen, D. and others},
  journal = {arXiv preprint arXiv:2606.17800},
  year    = {2026}
}`
  },
  {
    title: "CRAFT: Aligning Diffusion Models with Fine-Tuning Is Easier Than You Think",
    short: "CRAFT",
    authors: [
      { n: "Zening Sun*" }, { n: "Zhengpeng Xie*", me: true }, { n: "Lichen Bai" },
      { n: "Shitong Shao" }, { n: "Shuo Yang" }, { n: "Zeke Xie" }
    ],
    venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    year: 2026,
    type: "conference",
    first: false,
    highlight: false,
    tags: ["CVPR 2026", "Equal contribution"],
    links: [],
    bibtex: `@inproceedings{sun2026craft,
  title     = {CRAFT: Aligning Diffusion Models with Fine-Tuning Is Easier Than You Think},
  author    = {Sun, Zening and Xie, Zhengpeng and Bai, Lichen and Shao, Shitong and Yang, Shuo and Xie, Zeke},
  booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  year      = {2026}
}`
  },
  {
    title: "Simple Policy Optimization",
    short: "SPO",
    authors: [
      { n: "Zhengpeng Xie*", me: true }, { n: "Qiang Zhang*" }, { n: "Fan Yang*" },
      { n: "Marco Hutter" }, { n: "Renjing Xu" }
    ],
    venue: "Forty-second International Conference on Machine Learning (ICML)",
    year: 2025,
    type: "conference",
    first: true,
    highlight: true,
    tags: ["Featured", "ICML 2025"],
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2401.16025" },
      { label: "OpenReview", url: "https://openreview.net/forum?id=SG8Yx1FyeU" },
      { label: "Code", url: "https://github.com/MyRepositories-hub/Simple-Policy-Optimization" }
    ],
    bibtex: `@inproceedings{xie2025simple,
  title     = {Simple Policy Optimization},
  author    = {Xie, Zhengpeng and Zhang, Qiang and Yang, Fan and Hutter, Marco and Xu, Renjing},
  booktitle = {Forty-second International Conference on Machine Learning},
  year      = {2025},
  url       = {https://openreview.net/forum?id=SG8Yx1FyeU}
}`
  },
  {
    title: "Zeroth-Order Optimization Is Secretly Single-Step Policy Optimization",
    short: "ZO-SPO",
    authors: [
      { n: "Junbin Qiu" }, { n: "Zhengpeng Xie", me: true }, { n: "Xiangda Yan" },
      { n: "Yongjie Yang" }, { n: "Yao Shu" }
    ],
    venue: "ICML 2025 Workshop · arXiv:2506.14460",
    year: 2025,
    type: "conference",
    first: false,
    highlight: false,
    tags: ["Workshop"],
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2506.14460" }],
    bibtex: `@article{qiu2025zeroth,
  title   = {Zeroth-Order Optimization Is Secretly Single-Step Policy Optimization},
  author  = {Qiu, Junbin and Xie, Zhengpeng and Yan, Xiangda and Yang, Yongjie and Shu, Yao},
  journal = {arXiv preprint arXiv:2506.14460},
  year    = {2025}
}`
  },
  {
    title: "A Dual-Agent Adversarial Framework for Robust Generalization in Deep Reinforcement Learning",
    short: "DAAF",
    authors: [{ n: "Zhengpeng Xie*", me: true }, { n: "Yulong Zhang*" }],
    venue: "arXiv preprint arXiv:2501.17384",
    year: 2025,
    type: "preprint",
    first: true,
    highlight: false,
    tags: ["Equal contribution"],
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2501.17384" }],
    bibtex: `@article{xie2025dual,
  title   = {A Dual-Agent Adversarial Framework for Robust Generalization in Deep Reinforcement Learning},
  author  = {Xie, Zhengpeng and Zhang, Yulong},
  journal = {arXiv preprint arXiv:2501.17384},
  year    = {2025}
}`
  },
  {
    title: "Representation Convergence: Mutual Distillation Is Secretly a Form of Regularization",
    short: "DML-RL",
    authors: [
      { n: "Zhengpeng Xie*", me: true }, { n: "Jiahang Cao*" }, { n: "Qiang Zhang" },
      { n: "Jianxiong Zhang" }, { n: "Changwei Wang" }, { n: "Renjing Xu" }
    ],
    venue: "arXiv preprint arXiv:2501.02481",
    year: 2025,
    type: "preprint",
    first: true,
    highlight: false,
    tags: ["Equal contribution"],
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2501.02481" },
      { label: "Project", url: "https://dml-rl.github.io/" }
    ],
    bibtex: `@article{xie2025representation,
  title   = {Representation Convergence: Mutual Distillation Is Secretly a Form of Regularization},
  author  = {Xie, Zhengpeng and Cao, Jiahang and Zhang, Qiang and Zhang, Jianxiong and Wang, Changwei and Xu, Renjing},
  journal = {arXiv preprint arXiv:2501.02481},
  year    = {2025}
}`
  },
  {
    title: "Deep Learning for Particle Image Velocimetry with Attentional Transformer and Cross-Correlation Embedded",
    short: "PIV",
    authors: [
      { n: "Changdong Yu" }, { n: "Y. Chang" }, { n: "X. Liang" },
      { n: "C. Liang" }, { n: "Zhengpeng Xie", me: true }
    ],
    venue: "Ocean Engineering, 292, 116522",
    year: 2024,
    type: "journal",
    first: false,
    highlight: false,
    tags: ["Journal"],
    links: [],
    bibtex: `@article{yu2024deep,
  title   = {Deep Learning for Particle Image Velocimetry with Attentional Transformer and Cross-Correlation Embedded},
  author  = {Yu, Changdong and Chang, Y. and Liang, X. and Liang, C. and Xie, Zhengpeng},
  journal = {Ocean Engineering},
  volume  = {292},
  pages   = {116522},
  year    = {2024}
}`
  },
  {
    title: "Dropout Strategy in Reinforcement Learning: Limiting the Surrogate Objective Variance in Policy Optimization Methods",
    short: "D-PPO",
    authors: [{ n: "Zhengpeng Xie", me: true }, { n: "Changdong Yu" }, { n: "Weizheng Qiao" }],
    venue: "arXiv preprint arXiv:2310.20380",
    year: 2023,
    type: "preprint",
    first: true,
    highlight: false,
    tags: [],
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2310.20380" }],
    bibtex: `@article{xie2023dropout,
  title   = {Dropout Strategy in Reinforcement Learning: Limiting the Surrogate Objective Variance in Policy Optimization Methods},
  author  = {Xie, Zhengpeng and Yu, Changdong and Qiao, Weizheng},
  journal = {arXiv preprint arXiv:2310.20380},
  year    = {2023}
}`
  }
];
