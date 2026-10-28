const researchList = [
  {
    id: "record-linkage",
    imgSrc: "./pics/publication/ml_linkage.png",
    title:
      "A Machine Learning Approach for Nominative Record Linkage in Chinese Historical Databases",
    authors: "Yue Yu, Yueran Hou, Yibei Wu, Cameron Campbell",
    venue:
      "Historical Methods: A Journal of Quantitative and Interdisciplinary History",
    tags: ["Data Exploration & Analysis", "Computational Social Science"],
    links: [
      { label: "paper", url: "https://www.tandfonline.com/doi/full/10.1080/01615440.2026.2641454" },
      {
        label: "code",
        url: "https://github.com/bruceyyu/ML-Chinese-record-linkage",
      }
    ],
    featured: true,
  },
  {
    id: "title-parsing",
    imgSrc: "./pics/publication/jsl_parser.png",
    title:
      "Office, Rank, and Mobility: Decomposing Historical Chinese Bureaucratic Titles with Language Models",
    authors: "Yue Yu, Jun Chen, Michael Yan Hon Chung, Cameron Campbell",
    venue:
      "Working Paper",
    tags: ["Data Exploration & Analysis", "Computational Social Science"],
    links: [
      { label: "preprint", url: "https://osf.io/preprints/socarxiv/eg87f_v1" },
      {
        label: "code & model",
        url: "https://github.com/bruceyyu/decompose-chinese-official-titles",
      }
    ],
    featured: true,
  },
  {
    id: "social-interaction",
    imgSrc: "./pics/publication/vlm_interaction.png",
    title:
      "Measuring Micro-Level Social Interactions: An Image-Driven Computational Approach",
    authors: "Yue Yu*, Wenhao Jiang*, Siwei Cheng",
    venue:
      "Work in Progress. Presented at American Sociological Association (ASA) Annual Meeting 2026",
    tags: ["Data Exploration & Analysis", "Computational Social Science"],
    featured: true,
  },
  {
    id: "lingbot-world",
    imgSrc: "./pics/publication/lingbot-world.gif",
    title:
      "LingBot-World: Advancing Open-source World Models",
    authors:
      "Robbyant Team",
    venue: "Technical Report",
    tags: ["GenAI", "Language Learning"],
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2601.20540" },
      {
        label: "project page",
        url: "https://technology.robbyant.com/lingbot-world",
      },
      { label: "github", url: "robbyant/lingbot-world" },
    ],
  },
  {
    id: "magicquill-v2",
    imgSrc: "./pics/publication/magicquillv2.gif",
    title:
      "MagicQuillV2: Precise and Interactive Image Editing with Layered Visual Cues",
    authors:
      "Zichen Liu*, Yue Yu*, Hao Ouyang, Qiuyu Wang, Shuailei Ma, Ka Leong Cheng, Wen Wang, Qingyan Bai, Yuxuan Zhang, Yanhong Zeng, Yixuan Li, Xing Zhu, Yujun Shen, Qifeng Chen",
    venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2026)",
    tags: ["GenAI", "Video Editing"],
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2512.03046" },
      {
        label: "project page",
        url: "https://magicquill.art/v2/",
      },
      { label: "github", url: "zliucz/MagicQuillV2" },
    ],
    featured: false,
  },
  {
    id: "holocine",
    imgSrc: "./pics/publication/holocine.gif",
    title:
      "HoloCine: Holistic Generation of Cinematic Multi-Shot Long Video Narratives",
    authors:
      "Yihao Meng, Hao Ouyang, Yue Yu, Qiuyu Wang, Wen Wang, Ka Leong Cheng, Hanlin Wang, Yixuan Li, Cheng Chen, Yanhong Zeng, Yujun Shen, Huamin Qu",
    venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2026)",
    tags: ["GenAI", "Video Editing"],
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2510.20822" },
      {
        label: "project page",
        url: "https://holo-cine.github.io/",
      },
      { label: "github", url: "yihao-meng/HoloCine" },
    ],
    award: "Highlight Paper",
    featured: false,
  },
  {
    id: "ditto",
    imgSrc: "./pics/publication/ditto.gif",
    title:
      "Ditto: Scaling Instruction-Based Video Editing with a High-Quality Synthetic Dataset",
    authors:
      "Qingyan Bai, Qiuyu Wang, Hao Ouyang, Yue Yu, Hanlin Wang, Wen Wang, Ka Leong Cheng, Shuailei Ma, Yanhong Zeng, Zichen Liu, Yinghao Xu, Yujun Shen, Qifeng Chen",
    venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2026)",
    tags: ["GenAI", "Video Editing"],
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2510.15742" },
      {
        label: "project page",
        url: "https://ezioby.github.io/Ditto_page/",
      },
      { label: "github", url: "EzioBy/Ditto" },
    ],
    award: "Highlight Paper",
    featured: false,
  },
  {
    id: "dynamic-typography",
    imgSrc: "./pics/publication/dynamic_typography.gif",
    title:
      "Dynamic Typography: Bringing Text to Life via Video Diffusion Prior",
    authors:
      "Zichen Liu, Yihao Meng, Hao Ouyang, Yue Yu, Bolin Zhao, Daniel Cohen-Or, Huamin Qu",
    venue: "IEEE/CVF International Conference on Computer Vision (ICCV 2025)",
    tags: ["GenAI", "Text Animation"],
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2404.11614" },
      {
        label: "project page",
        url: "https://animate-your-word.github.io/demo/",
      },
      { label: "github", url: "zliucz/animate-your-word" },
    ],
    award: "Best Paper Award Finalist",
    featured: true,
  },
  {
    id: "inclusiviz",
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
    id: "magicquill",
    imgSrc: "./pics/publication/magicquill.gif",
    title: "MagicQuill: An Intelligent Interactive Image Editing System",
    authors:
      "Zichen Liu*, Yue Yu* (co-first), Hao Ouyang, Qiuyu Wang, Ka Leong Cheng, Wen Wang, Zhiheng Liu, Qifeng Chen, Yujun Shen",
    venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2025)",
    tags: ["GenAI", "Image Editing"],
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
    id: "insitutale",
    imgSrc: "./pics/publication/insitutale.gif",
    title:
      "InSituTale: Enhancing Augmented Data Storytelling with Physical Objects",
    authors:
      "Kentaro Takahira, Yue Yu, Takanori Fujiwara, Suzuki Ryo, Huamin Qu",
    venue: "ACM Symposium on User Interface Software and Technology (UIST 2025)",
    tags: [
      "GenAI",
      "Augmented Reality",
    ],
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2507.21411" }],
    featured: true,
  },
  {
    id: "pygwalker",
    imgSrc: "./pics/publication/pygwalker.png",
    title: "PyGWalker: On-the-fly Assistant for Exploratory Visual Data Analysis",
    authors: "Yue Yu, Leixian Shen, Fei Long, Huamin Qu, Hao Chen",
    venue: "IEEE Visualization and Visual Analytics (VIS 2024)",
    tags: ["Data Exploration & Analysis"],
    links: [
      { label: "paper", url: "https://arxiv.org/abs/2406.11637" },
      { label: "demo", url: "./show/pygwalker_demo.html" },
    ],
    award: "Best Short Paper",
    featured: true,
  },
  {
    id: "neighviz",
    imgSrc: "./pics/publication/neighviz.png",
    title: "NeighViz: Towards Better Understanding of Neighborhood Effects on Social Groups with Spatial Data",
    authors: "Yue Yu, Yifang Wang, Qisen Yang, Di Weng, Yongjun Zhang, Xiaogang Wu, Yingcai Wu, Huamin Qu",
    venue: "IEEE Visualization in Data Science (VDS 2023)",
    tags: ["Data Exploration & Analysis", "Computational Social Science"],
    links: [
      { label: "paper", url: "https://ieeexplore.ieee.org/abstract/document/10357756" },
    ],
    featured: false,
  },
];
