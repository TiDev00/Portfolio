import type {
  Seo,
  SocialLink,
  SkillData,
  CompetitiveSite,
  Degree,
  Certification,
  ExperienceSection,
  WorkExperience,
  Project,
  ResearchPaper,
  ContactSection,
  AddressSection,
} from "./types";

// ─── SEO ────────────────────────────────────────────────────────────────────

export const seo: Seo = {
  title: "Thierno's Portfolio",
  description:
    "With over 5 years of software development experience, I specialize in Machine Learning, NLP, and Full Stack Development. I build scalable AI-powered applications and beautiful user interfaces.",
  og: {
    title: "TIC Portfolio",
    type: "website",
    url: "https://tidev00.github.io/",
  },
};

// ─── Greeting ───────────────────────────────────────────────────────────────

export const greeting = {
  title: "Who I am?",
  logoName: "ThiernoIbrahimaCisse",
  subTitle:
    "With over 5 years of software development experience, I am a passionate software engineer specializing in Machine Learning, NLP, and Full Stack Development — building intelligent, scalable applications from data pipelines to polished UIs.",
  resumeLink: "https://1drv.ms/b/c/4bb26cefdabb9147/EUxYIv9CI6VHnhotVHifDXcBhnpBfv6m12D5sLHgyhk4Yg",
};

// ─── Social Media ────────────────────────────────────────────────────────────

export const socialMediaLinks: SocialLink[] = [
  {
    name: "Google Scholar",
    link: "https://scholar.google.com/citations?user=G3xzRcQAAAAJ",
    iconClass: "FileText",
    backgroundColor: "#4285F4",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/thierno-ciss%C3%A9-448965160/",
    iconClass: "Linkedin",
    backgroundColor: "#0077B5",
  },
  // {
  //   name: "Email",
  //   link: "mailto:cisse.thierno@outlook.com",
  //   iconClass: "Mail",
  //   backgroundColor: "#0078D4",
  // },
  {
    name: "Twitter",
    link: "https://twitter.com/TiDev00",
    iconClass: "Twitter",
    backgroundColor: "#00acee",
  },
];

// ─── Skills ──────────────────────────────────────────────────────────────────

export const skills: { data: SkillData[] } = {
  data: [
    {
      title: "ML, Deep Learning & NLP",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building and fine-tuning deep learning models for NLP and computer vision tasks",
        "⚡ Experience with Neural Machine Translation, Keyword Extraction, Sentiment Analysis",
        "⚡ End-to-end ML pipelines from data preprocessing to model deployment",
      ],
      softwareSkills: [
        { skillName: "PyTorch", iconifyTag: "logos:pytorch-icon" },
        { skillName: "TensorFlow", iconifyTag: "logos:tensorflow" },
        { skillName: "spaCy", iconifyTag: "simple-icons:spacy" },
        { skillName: "Scikit-Learn", iconifyTag: "simple-icons:scikitlearn" },
        { skillName: "Keras", iconifyTag: "simple-icons:keras" },
        { skillName: "OpenCV", iconifyTag: "logos:opencv" },
        { skillName: "Python", iconifyTag: "logos:python" },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive single-page applications with React and Angular",
        "⚡ Developing REST APIs and microservices with Node.js, Spring Boot, and Django",
        "⚡ Mobile-first, cross-platform apps using Ionic and modern CSS frameworks",
      ],
      softwareSkills: [
        { skillName: "HTML5", iconifyTag: "vscode-icons:file-type-html" },
        { skillName: "CSS3", iconifyTag: "vscode-icons:file-type-css" },
        { skillName: "JavaScript", iconifyTag: "logos:javascript" },
        { skillName: "TypeScript", iconifyTag: "logos:typescript-icon" },
        { skillName: "React", iconifyTag: "logos:react" },
        { skillName: "Next.js", iconifyTag: "logos:nextjs-icon" },
        { skillName: "Node.js", iconifyTag: "logos:nodejs-icon" },
        { skillName: "Angular", iconifyTag: "logos:angular-icon" },
        { skillName: "Ionic", iconifyTag: "logos:ionic-icon" },
        { skillName: ".NET", iconifyTag: "logos:dotnet" },
        { skillName: "Spring", iconifyTag: "logos:spring-icon" },
        { skillName: "Django", iconifyTag: "logos:django-icon" },
        { skillName: "Bootstrap", iconifyTag: "logos:bootstrap" },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Cloud application deployment on GCP, Heroku, Firebase",
        "⚡ Containerised workloads with Docker and CI/CD pipelines",
        "⚡ Data modelling and management across SQL and NoSQL databases",
      ],
      softwareSkills: [
        { skillName: "Firebase", iconifyTag: "logos:firebase" },
        { skillName: "MS SQL Server", iconifyTag: "logos:microsoft-sql-server" },
        { skillName: "MongoDB", iconifyTag: "logos:mongodb-icon" },
        { skillName: "MySQL", iconifyTag: "logos:mysql-icon" },
        { skillName: "Docker", iconifyTag: "logos:docker-icon" },
        { skillName: "PostgreSQL", iconifyTag: "logos:postgresql" },
        { skillName: "SQLite", iconifyTag: "logos:sqlite" },
        { skillName: "Heroku", iconifyTag: "logos:heroku-icon" },
        { skillName: "GCP", iconifyTag: "logos:google-cloud" },
      ],
    },
  ],
};

// ─── Competitive Sites ───────────────────────────────────────────────────────

export const competitiveSites: CompetitiveSite[] = [
  {
    siteName: "Coursera",
    iconifyTag: "simple-icons:coursera",
    style: { color: "#0056D2" },
    profileLink: "https://www.coursera.org/",
  },
  {
    siteName: "freeCodeCamp",
    iconifyTag: "simple-icons:freecodecamp",
    style: { color: "#0A0A23" },
    profileLink: "https://www.freecodecamp.org/",
  },
  {
    siteName: "HackerRank",
    iconifyTag: "simple-icons:hackerrank",
    style: { color: "#2EC866" },
    profileLink: "https://www.hackerrank.com/",
  },
  {
    siteName: "LeetCode",
    iconifyTag: "simple-icons:leetcode",
    style: { color: "#F89F1B" },
    profileLink: "https://leetcode.com/",
  },
];

// ─── Education ───────────────────────────────────────────────────────────────

export const degrees: { degrees: Degree[] } = {
  degrees: [
    {
      title: "Université du Québec à Montréal (UQAM)",
      subtitle: "Master of Science — Artificial Intelligence",
      logo_path: "/images/uqam.png",
      alt_name: "UQAM",
      duration: "2021 – 2023",
      descriptions: [
        "⚡ Specialised in NLP, Computer Vision, and Deep Learning algorithms",
        "⚡ Research focus on low-resource language technologies (Wolof NLP)",
        "⚡ Teaching assistant for graduate-level computer science courses",
      ],
      website_link: "https://uqam.ca/",
    },
    {
      title: "École Supérieure Polytechnique de Dakar (ESP)",
      subtitle: "Master of Engineering — Software Engineering",
      logo_path: "/images/ucad.png",
      alt_name: "ESP / UCAD",
      duration: "2018 – 2020",
      descriptions: [
        "⚡ Advanced software architecture, distributed systems, and cloud computing",
        "⚡ Capstone: distributed ticketing platform serving 5,000+ concurrent users",
        "⚡ Published research on automated spell checking for Wolof language",
      ],
      website_link: "https://esp.sn/",
    },
    {
      title: "École Supérieure Polytechnique de Dakar (ESP)",
      subtitle: "Bachelor of Engineering — Software Engineering",
      logo_path: "/images/ucad.png",
      alt_name: "ESP / UCAD",
      duration: "2017 – 2018",
      descriptions: [
        "⚡ Core CS fundamentals: data structures, algorithms, OOP, databases",
        "⚡ Built web and mobile applications using Java, PHP, and JavaScript",
      ],
      website_link: "https://esp.sn/",
    },
    {
      title: "Institut Mathématiques et Etudes Supérieures (IMES)",
      subtitle: "Associate's Degree — CPGE (Preparatory Classes)",
      logo_path: "/images/imes.png",
      alt_name: "IMES",
      duration: "2015 – 2017",
      descriptions: [
        "⚡ Intensive preparation in mathematics, physics, and computer science",
        "⚡ Foundation in scientific reasoning and problem-solving methodology",
      ],
      website_link: "#",
    },
  ],
};

// ─── Certifications ──────────────────────────────────────────────────────────

export const certifications: { certifications: Certification[] } = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "Stanford Online",
      logo_path: "/images/stanford_online_logo.png",
      certificate_link: "https://www.coursera.org/account/accomplishments/certificate/978V2MU8QE75",
      alt_name: "Stanford Online",
      color_code: "#B50035",
    },
    {
      title: "NLP Specialization",
      subtitle: "deeplearning.ai",
      logo_path: "/images/deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/XUMDCNZJD8VJ",
      alt_name: "deeplearning.ai",
      color_code: "#ffffff",
    },
    {
      title: "Angular Full Stack",
      subtitle: "Hong Kong University of Science and Technology",
      logo_path: "/images/HongKong_logo.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/ZKKKHBGXD8F4",
      alt_name: "HKUST",
      color_code: "#ffffff",
    },
    {
      title: "React Full Stack",
      subtitle: "Hong Kong University of Science and Technology",
      logo_path: "/images/HongKong_logo.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/J45UNW886XBU",
      alt_name: "HKUST",
      color_code: "#ffffff",
    },
  ],
};

// ─── Experience ──────────────────────────────────────────────────────────────

export const experience: { sections: ExperienceSection[] } = {
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Pomerleau",
          company_url: "https://www.pomerleau.ca/",
          logo_path: "/images/pomerleau_logo.jpg",
          duration: "April 2024 – Present",
          location: "Montreal, QC, Canada",
          description:
            "Developing and maintaining enterprise web applications for one of Canada's largest construction companies. Building scalable APIs and modern React frontends integrated with complex ERP systems.",
          color: "#006B3E",
        },
        {
          title: "Lecturer — Computer Science",
          company: "Teccart Institute",
          company_url: "https://teccart.qc.ca/",
          logo_path: "/images/teccart_logo.png",
          duration: "March 2023 – Present",
          location: "Montreal, QC, Canada",
          description:
            "Teaching programming fundamentals, web development, and data structures to diploma students. Designing curriculum and assessments aligned with industry needs.",
          color: "#D91E27",
        },
        {
          title: "Co-Founder & CEO",
          company: "M&T Solutions",
          company_url: "#",
          logo_path: "/images/m&t_logo.png",
          duration: "December 2022 – Present",
          location: "Montreal, QC, Canada",
          description:
            "Co-founded a technology consulting firm specialising in AI/ML and web development solutions for SMEs. Leading technical strategy, client relations, and product delivery.",
          color: "#1DA1F2",
        },
        {
          title: "Graduate Student Instructor (GSI)",
          company: "UQAM",
          company_url: "https://uqam.ca/",
          logo_path: "/images/uqam.png",
          duration: "September 2022 – December 2023",
          location: "Montreal, QC, Canada",
          description:
            "Instructed and graded assignments for INF2120 (Object-Oriented Programming) and INF3135 (Construction de logiciels). Held weekly office hours and provided one-on-one mentorship.",
          color: "#005BBB",
        },
        {
          title: "Freelance Developer",
          company: "Self-employed",
          company_url: "#",
          logo_path: "/images/freelancer_logo.jpg",
          duration: "September 2021 – December 2022",
          location: "Remote",
          description:
            "Delivered web and mobile application projects for international clients. Stack included React, Node.js, Angular, and Firebase. Maintained 100% client satisfaction rating.",
          color: "#29B2FE",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "NLP Research Intern",
          company: "Ciena",
          company_url: "https://www.ciena.com/",
          logo_path: "/images/ciena_logo.png",
          duration: "June 2022 – November 2022",
          location: "Montreal, QC, Canada",
          description:
            "Researched and implemented NLP models for automated ticket classification and resolution suggestion. Reduced manual triage effort by 30% using BERT-based transformers.",
          color: "#00274C",
        },
        {
          title: "Full Stack Developer Intern",
          company: "Atos",
          company_url: "https://atos.net/",
          logo_path: "/images/atos_logo.png",
          duration: "December 2020 – August 2021",
          location: "Dakar, Senegal",
          description:
            "Developed enterprise web modules using .NET Core and Angular. Implemented CI/CD pipelines and automated testing, reducing deployment time by 40%.",
          color: "#009FE3",
        },
        {
          title: "Production Support Intern",
          company: "BNDE",
          company_url: "#",
          logo_path: "/images/bnde_logo.jpeg",
          duration: "October 2020 – November 2020",
          location: "Dakar, Senegal",
          description:
            "Provided L2 production support for banking core systems. Diagnosed and resolved incidents, and documented root-cause analyses.",
          color: "#336699",
        },
        {
          title: "Full Stack Developer Intern",
          company: "Sonatel",
          company_url: "https://www.sonatel.com/",
          logo_path: "/images/sonatel_logo.png",
          duration: "March 2020 – August 2020",
          location: "Dakar, Senegal",
          description:
            "Built and maintained internal web tools for Senegal's largest telecom. Used Spring Boot, Angular, and Oracle DB. Deployed to on-premise servers.",
          color: "#FF6B00",
        },
        {
          title: "Network Administrator Intern",
          company: "CBAO Attijariwafa Bank",
          company_url: "#",
          logo_path: "/images/cbao_logo.png",
          duration: "June 2018 – July 2018",
          location: "Dakar, Senegal",
          description:
            "Assisted in configuring and monitoring LAN/WAN infrastructure. Performed hardware maintenance and user technical support.",
          color: "#E30613",
        },
        {
          title: "Python Developer Intern",
          company: "TCS (Tata Consultancy Services)",
          company_url: "https://www.tcs.com/",
          logo_path: "/images/tcs_logo.png",
          duration: "August 2016 – September 2016",
          location: "Dakar, Senegal",
          description:
            "Developed automation scripts in Python for data extraction and report generation. First professional exposure to software engineering practices.",
          color: "#E03C31",
        },
      ],
    },
  ],
};

export const volunteerships: WorkExperience[] = [
  {
    title: "Open Source Contributor & Community Member",
    company: "Galsen Dev",
    company_url: "#",
    logo_path: "/images/galsendev_logo.jpeg",
    duration: "November 2018 – Present",
    location: "Remote / Dakar",
    description:
      "Active member of the Senegalese developer community. Reviewing open-source contributions, organising coding meetups, and mentoring junior developers.",
    color: "#00813A",
  },
  {
    title: "Tech Educator",
    company: "Daara-IT",
    company_url: "#",
    logo_path: "/images/daarait_logo.png",
    duration: "August 2018 – Present",
    location: "Dakar, Senegal",
    description:
      "Volunteering to teach programming fundamentals and digital literacy to underprivileged youth in Dakar. Delivered HTML/CSS and Python workshops.",
    color: "#FF5722",
  },
  {
    title: "GitHub Campus Expert",
    company: "GitHub",
    company_url: "https://github.com/",
    logo_path: "/images/github_logo.png",
    duration: "July 2018 – Present",
    location: "Remote",
    description:
      "Promoting open-source culture and Git best practices among university students. Organising hackathons and contributing to the GitHub Education community.",
    color: "#181717",
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    name: "Wolof_SpellChecker",
    createdAt: "2020-06-01",
    description:
      "Automatic Spell Checking for the Wolof language — a low-resource African language. Uses a custom lexicon and statistical language model to detect and correct spelling errors.",
    starCount: 12,
    forkCount: 4,
    url: "https://github.com/TiDev00/Wolof_SpellChecker",
    languages: [{ name: "Python", iconifyTag: "logos:python" }],
  },
  {
    name: "Covid19_Detector",
    createdAt: "2020-04-01",
    description:
      "Deep learning image classifier to detect COVID-19 from chest X-ray images. Achieved 94% accuracy using transfer learning with ResNet50.",
    starCount: 8,
    forkCount: 3,
    url: "https://github.com/TiDev00/Covid19_Detector",
    languages: [
      { name: "Jupyter Notebook", iconifyTag: "logos:jupyter" },
      { name: "Python", iconifyTag: "logos:python" },
    ],
  },
  {
    name: "DrowsinessDetection",
    createdAt: "2019-10-01",
    description:
      "Real-time drowsy driver safety alert system using OpenCV and facial landmark detection. Issues audio-visual alerts when eye-closure is detected beyond a threshold.",
    starCount: 6,
    forkCount: 2,
    url: "https://github.com/TiDev00/DrowsinessDetection",
    languages: [{ name: "Python", iconifyTag: "logos:python" }],
  },
  {
    name: "NMT_fr_en",
    createdAt: "2021-03-01",
    description:
      "Neural Machine Translation model for French-to-English translation using sequence-to-sequence architecture with attention mechanism. Trained on WMT14 dataset.",
    starCount: 15,
    forkCount: 5,
    url: "https://github.com/TiDev00/NMT_fr_en",
    languages: [
      { name: "Jupyter Notebook", iconifyTag: "logos:jupyter" },
      { name: "Python", iconifyTag: "logos:python" },
    ],
  },
  {
    name: "keyword_extraction",
    createdAt: "2021-06-01",
    description:
      "Unsupervised keyword and keyphrase extraction from text documents using TF-IDF, RAKE, and TextRank algorithms. Includes benchmark comparison.",
    starCount: 5,
    forkCount: 1,
    url: "https://github.com/TiDev00/keyword_extraction",
    languages: [{ name: "Python", iconifyTag: "logos:python" }],
  },
  {
    name: "Facial_Emotion_Recognition",
    createdAt: "2020-01-01",
    description:
      "CNN-based facial expression recognition system classifying 7 emotion categories. Built with Keras and deployed as a Flask web application.",
    starCount: 10,
    forkCount: 3,
    url: "https://github.com/TiDev00/Facial_Emotion_Recognition",
    languages: [
      { name: "Jupyter Notebook", iconifyTag: "logos:jupyter" },
      { name: "Python", iconifyTag: "logos:python" },
      { name: "HTML", iconifyTag: "vscode-icons:file-type-html" },
    ],
  },
];

export const research: ResearchPaper[] = [
  {
    title:
      "Automatic Spell Checker and Correction for Under-represented Spoken Languages: Case Study on Wolof",
    authors: "Thierno Ibrahima Cissé, Fatiha Sadat",
    venue: "Proceedings of the Fourth Workshop on Resources for African Indigenous Languages @ ACL",
    year: "2023",
    abstract: "",
    paper_url: "https://aclanthology.org/2023.rail-1.1/",
    github_url: "https://github.com/TiDev00/Wolof_SpellChecker",
  },
  {
    title:
      "Advancing Language Diversity and Inclusion: Towards a Neural Network-based Spell Checker and Correction for Wolof",
    authors: "Thierno Ibrahima Cissé, Fatiha Sadat",
    venue:
      "Proceedings of the Fifth Workshop on Resources for African Indigenous Languages @ LREC-COLING",
    year: "2024",
    abstract: "",
    paper_url: "https://aclanthology.org/2024.rail-1.16/",
    github_url: "https://github.com/TiDev00/Wolof_Neural_SpellChecker",
  },
];

// ─── Contact ─────────────────────────────────────────────────────────────────

export const contactSection: ContactSection = {
  title: "Contact Me",
  profile_image_path: "/images/manOnTable.svg",
  description:
    "I am available for freelance projects, full-time roles, and research collaborations. Whether you have a project in mind, want to discuss ML/NLP research, or just want to say hi — my inbox is open!",
};

export const addressSection: AddressSection = {
  title: "Address",
  subtitle: "Montreal, QC, Canada",
  location_map_link: "https://goo.gl/maps/JQSYLFYzxBLgpMzH7",
};

// ─── Settings ────────────────────────────────────────────────────────────────

export const settings = {
  isSplash: false, // Disable splash screen; handled by Next.js loading.tsx if needed
};
