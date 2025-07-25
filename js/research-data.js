const researchList = [
  {
    imgSrc: "./pics/publication/insitutale.gif",
    title:
      "InSituTale: Enhancing Augmented Data Storytelling with Physical Objects",
    authors:
      "Kentaro Takahira, Yue Yu, Takanori Fujiwara, Suzuki Ryo, Huamin Qu",
    venue: "ACM Symposium on User Interface Software and Technology (UIST 2025)",
    tags: [
      "Creative Tools",
      "Augmented Reality",
    ],
    featured: true,
  },
  {
    imgSrc: "./pics/publication/dietglance.jpg",
    title:
      "DietGlance: Dietary Monitoring and Personalized Analysis at a Glance with Knowledge-Empowered AI Assistant",
    authors:
      "Zhihan Jiang, Running Zhao, Lin Lin, Yue Yu, Handi Chen, Xinchen Zhang, Xuhai Xu, Yifang Wang, Xiaojuan Ma, Edith C.H. Ngai",
    venue: "arXiv",
    tags: [
      "Real-World Impact",
      "Ubiquitous Computing",
    ],
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2502.01317" }],
    featured: false,
  },
  {
    imgSrc: "./pics/publication/inclusiviz.png",
    title:
      "InclusiViz: Visual Analytics of Human Mobility Data for Understanding and Mitigating Urban Segregation",
    authors: "Yue Yu, Yifang Wang, Yongjun Zhang, Huamin Qu, Dongyu Liu",
    venue:
      "IEEE Transactions on Visualization and Computer Graphics (TVCG 2025)",
    tags: ["Data Exploration & Analysis", "Computational Social Science"],
    links: [
      { label: "paper", url: "https://ieeexplore.ieee.org/document/10989526/" },
      { label: "arXiv", url: "https://arxiv.org/abs/2501.03594" }
    ],
    featured: true,
  },
  {
    imgSrc: "./pics/publication/magicquill.gif",
    title: "MagicQuill: An Intelligent Interactive Image Editing System",
    authors:
      "Zichen Liu*, Yue Yu* (co-first), Hao Ouyang, Qiuyu Wang, Ka Leong Cheng, Wen Wang, Zhiheng Liu, Qifeng Chen, Yujun Shen",
    venue: "IEEE/CVF Computer Vision and Pattern Recognition (CVPR 2025)",
    tags: ["Creative Tools", "Image Editing"],
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2411.09703" },
      { label: "project page", url: "https://magicquill.art/demo/" },
      {
        label: "online talk (Chinese)",
        url: "https://www.bilibili.com/video/BV1Cxi9YHEu8/",
      },
      { label: "github", url: "magic-quill/MagicQuill" },
    ],
    featured: true,
  },
  {
    imgSrc: "./pics/publication/pygwalker.png",
    title:
      "PyGWalker: On-the-fly Assistant for Exploratory Visual Data Analysis",
    authors: "Yue Yu, Leixian Shen, Fei Long, Huamin Qu, Hao Chen",
    venue: "IEEE VIS 2024",
    award: "Best Short Paper",
    tags: ["Data Exploration & Analysis", "Viz Tool", "Open-source"],
    links: [
      { label: "paper", url: "https://ieeexplore.ieee.org/document/10771146/" },
      { label: "arXiv", url: "https://arxiv.org/abs/2406.11637" },
    ],
    featured: true,
  },
  {
    imgSrc: "./pics/publication/dynamic_typography.gif",
    title:
      "Dynamic Typography: Bringing Text to Life via Video Diffusion Prior",
    authors:
      "Zichen Liu, Yihao Meng, Hao Ouyang, Yue Yu, Bolin Zhao, Daniel Cohen-Or, Huamin Qu",
    venue: "IEEE/CVF International Conference on Computer Vision (ICCV 2025)",
    tags: ["Creative Tools", "Text Animation"],
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2404.11614" },
      {
        label: "project page",
        url: "https://animate-your-word.github.io/demo/",
      },
      { label: "github", url: "zliucz/animate-your-word" },
    ],
    award: "Oral Presentation",
    featured: true,
  },
  {
    imgSrc: "./pics/publication/neighviz.png",
    title:
      "NeighViz: Towards Better Understanding of Neighborhood Effects on Social Groups with Spatial Data",
    authors:
      "Yue Yu, Yifang Wang, Qisen Yang, Di Weng, Yongjun Zhang, Xiaogang Wu, Yingcai Wu, Huamin Qu",
    venue: "9th Symposium on Visualization in Data Science (VDS@VIS 2023)",
    tags: ["Data Exploration & Analysis", "Methodological", "Urban Science"],
    links: [
      {
        label: "paper",
        url: "https://ieeexplore.ieee.org/abstract/document/10357756",
      },
      { label: "arXiv", url: "https://arxiv.org/abs/2309.11454" },
      { label: "slides", url: "./materials/VDS_NeighViz_long_ver.pdf" },
    ],
  },
  {
    imgSrc: "./pics/publication/foodwise.png",
    title:
      "FoodWise: Food Waste Reduction and Behavior Change on Campus with Data Visualization and Gamification",
    authors:
      "Yue Yu, Sophia Yi, Xi Nan, Leo Yu-Ho Lo, Kento Shigyo, Liwenhan Xie, Jeffry Wicaksana, Kwang-Ting Cheng, Huamin Qu",
    venue:
      "6th ACM SIGCAS/SIGCHI Conference on Computing and Sustainable Societies (COMPASS ’23)",
    tags: ["Real-World Impact", "Sustainability"],
    links: [
      { label: "paper", url: "https://dl.acm.org/doi/10.1145/3588001.3609364" },
      { label: "arXiv", url: "https://arxiv.org/abs/2307.12882" },
      {
        label: "presentation",
        url: "https://www.youtube.com/watch?v=EftanoT-3lM&list=PLzhsLf-y54j32cx90ujLadarjCkCM6Ph_&index=5",
      },
      {
        label: "blog article",
        url: "https://library.hkust.edu.hk/sc/foodwise/",
      },
    ],
    featured: true,
  },
  {
    imgSrc: "./pics/publication/wallstbets.png",
    title:
      "Short, Colorful, and Irreverent! A Comparative Analysis of New Users on WallstreetBets During the Gamestop Short-squeeze",
    authors:
      "Ehsan Ul Haq, Tristan Braud, Lik Hang Lee, Anish Krishna Vallapuram, Yue Yu, Gareth Tyson, Pan Hui",
    venue: "Companion Proceedings of the Web Conference 2022 (WWW ’22)",
    tags: ["Data Exploration & Analysis", "Substantive"],
    links: [
      { label: "paper", url: "https://dl.acm.org/doi/10.1145/3487553.3524202" },
    ],
  },
];
