import type {
  Seo,
  SocialLink,
  SkillData,
  OpenSourceOverview,
  CompetitiveSite,
  Degree,
  Certification,
  ExperienceSection,
  WorkExperience,
  ResearchPaper,
  ContactSection,
  AddressSection,
} from "./types";

// ─── SEO ────────────────────────────────────────────────────────────────────

export const seo: Seo = {
  title: "Thierno Ibrahima Cissé",
  description:
    "Fullstack software engineer with 5+ years of experience building .NET, React, Python, and AI-enabled applications across enterprise delivery, teaching, and NLP research.",
  og: {
    title: "Thierno Ibrahima Cissé",
    type: "website",
    url: "https://tidev00.github.io/",
  },
};

// ─── Greeting ───────────────────────────────────────────────────────────────

export const greeting = {
  title: "Who I am?",
  logoName: "ThiernoIbrahimaCisse",
  subTitle:
    "Fullstack software engineer with 5+ years of experience across multiple languages, frameworks, and production environments. I build software end to end, teach software engineering through practical real-world examples, and bring an AI/NLP research mindset to teams solving meaningful problems.",
  resumeLink: "https://1drv.ms/b/c/4bb26cefdabb9147/EUxYIv9CI6VHnhotVHifDXcBhnpBfv6m12D5sLHgyhk4Yg",
};

// ─── Skills ──────────────────────────────────────────────────────────────────

export const skills: { data: SkillData[] } = {
  data: [
    {
      title: "Full Stack Engineering",
      skills: [
        "⚡ Building end-to-end web applications with C#/.NET, React, Angular, and TypeScript across enterprise and client-facing projects",
        "⚡ Designing REST APIs, application backends, and integration flows that stay maintainable from initial concept through deployment",
        "⚡ Comfortable moving between frontend, backend, and architecture concerns to ship practical software in fast-moving teams",
      ],
      softwareSkills: [
        "C#",
        ".NET",
        "JavaScript",
        "TypeScript",
        "React",
        "Angular",
        "Node.js",
        "Spring Boot",
      ],
    },
    {
      title: "Applied AI, NLP & Data",
      skills: [
        "⚡ Building and evaluating machine learning workflows for NLP use cases such as keyword extraction and low-resource language tooling",
        "⚡ Using Python ML libraries to move from data preparation and experimentation to model training, evaluation, and iteration",
        "⚡ Bringing research discipline to product engineering through careful experimentation, analysis, and communication of results",
      ],
      softwareSkills: [
        "Python",
        "PyTorch",
        "TensorFlow",
        "Keras",
        "spaCy",
        "Scikit-Learn",
        "OpenCV",
        "Hugging Face",
      ],
    },
    {
      title: "Databases, Tooling & Delivery",
      skills: [
        "⚡ Working confidently with relational and document databases, from SQL Server and PostgreSQL to MongoDB and SQLite",
        "⚡ Improving delivery quality with Git, GitLab, Docker, Postman, unit testing, and pragmatic CI/CD practices",
        "⚡ Comfortable with the day-to-day developer tooling needed to ship, test, debug, and maintain production software",
      ],
      softwareSkills: [
        "MS SQL Server",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "SQLite",
        "Docker",
        "Git",
        "GitLab",
        "GitHub",
        "Postman",
        "Firebase",
      ],
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
          title: "Fullstack Software Engineer",
          company: "Pomerleau",
          company_url: "https://www.pomerleau.ca/",
          logo_path: "/images/pomerleau_logo.jpg",
          duration: "Apr 2024 – Present",
          location: "Montreal, Canada",
          description:
            "Work across the full software development lifecycle, from early concept discussions to deployment and ongoing maintenance, building integrated C#/.NET backends and React frontends around client requirements. Collaborate with multidisciplinary teams on ArcGIS projects that strengthen spatial data analysis and visualization. Contribute to artificial intelligence R&D initiatives by exploring emerging approaches and helping turn promising ideas into practical solutions.",
          color: "#006B3E",
        },
        {
          title: "Lecturer",
          company: "Teccart Institute",
          company_url: "https://teccart.qc.ca/",
          logo_path: "/images/teccart_logo.png",
          duration: "Mar 2023 – Present",
          location: "Montreal, Canada",
          description:
            "Teach programming through hands-on coursework that brings real-world .NET and C# projects directly into the classroom. Combine practical workshops, industry-informed examples, and active learning strategies to keep the curriculum close to current software engineering practice. Use MSTest-based exercises to help students build stronger testing habits, code quality awareness, and problem-solving confidence.",
          color: "#D91E27",
        },
        {
          title: "Graduate Student Instructor",
          company: "University of Quebec in Montreal",
          company_url: "https://uqam.ca/",
          logo_path: "/images/uqam.png",
          duration: "Sep 2022 – Dec 2023",
          location: "Montreal, Canada",
          description:
            "Led labs in C, Java, Spring, and Angular, using real-world scenarios to help students connect theory with day-to-day software engineering practice. Reinforced version control and unit testing foundations through Git and JUnit-centered instruction. Also introduced GitLab-based CI/CD concepts so students could understand collaborative and automated delivery workflows earlier in their training.",
          color: "#005BBB",
        },
        {
          title: "Fullstack Developer",
          company: "Freelancer",
          company_url: "#",
          logo_path: "/images/freelancer_logo.jpg",
          duration: "Sep 2021 – Dec 2022",
          location: "Montreal, Canada",
          description:
            "Designed custom software solutions for clients, combining frontend and backend technologies to deliver full-stack applications around changing business needs. Adapted quickly as project scope evolved, drawing on a broad technical toolkit that included MERN-style development patterns. Maintained strong client relationships through clear communication, responsiveness, and consistent on-time delivery.",
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
          duration: "Jun 2022 – Nov 2022",
          location: "Montreal, Canada",
          description:
            "Led the development and evaluation of NLP and machine learning models in Python to improve keyword extraction for internal documentation. Worked hands-on with ML and NLP libraries across experimentation, training, and evaluation workflows. Shared findings, methodology, and implementation tradeoffs with the research team, contributing to a broader understanding of practical NLP applications inside the organization.",
          color: {
            light: "#00274C",
            dark: "#FFD8B3",
          },
        },
        {
          title: "Fullstack Engineer Intern",
          company: "Atos",
          company_url: "https://atos.net/",
          logo_path: "/images/atos_logo.png",
          duration: "Dec 2020 – Aug 2021",
          location: "Dakar, Senegal",
          description:
            "Contributed to scalable web applications from UML design through production delivery using .NET on the backend and Angular with TypeScript on the frontend. Strengthened application quality with MSTest, SQL Server integration, RESTful service design, and Postman-based API validation. Worked within agile Scrum processes and cross-functional teamwork to improve execution consistency across the delivery cycle.",
          color: "#009FE3",
        },
        {
          title: "Fullstack Engineer Intern",
          company: "Société Nationale des Télécommunications du Sénégal",
          company_url: "https://www.sonatel.sn/",
          logo_path: "/images/sonatel_logo.png",
          duration: "Mar 2020 – Aug 2020",
          location: "Dakar, Senegal",
          description:
            "Developed and integrated web services for both mobile and web platforms using Spring Boot, Ionic, and Angular, with a strong focus on consistent cross-platform functionality and user experience. Supported code quality with JUnit-based testing and helped improve reliability as features evolved. Also contributed to continuous integration and deployment efforts that made updates more regular and the development cycle more efficient.",
          color: "#FF6B00",
        },
        {
          title: "Python Developer Intern",
          company: "Technologies Consulting Services Entreprise",
          company_url: "#",
          logo_path: "/images/tcs_logo.png",
          duration: "Aug 2016 – Sep 2016",
          location: "Dakar, Senegal",
          description:
            "Developed Flask-based REST APIs that improved interoperability and enabled smoother data exchange across applications. Worked with PostgreSQL and MySQL-backed systems to support flexible and efficient data management. Collaborated closely with frontend developers on integration work while using unit tests to reinforce code quality and reliability.",
          color: "#E03C31",
        },
      ],
    },
  ],
};

// ─── Education ───────────────────────────────────────────────────────────────

export const degrees: { degrees: Degree[] } = {
  degrees: [
    {
      title: "University of Quebec in Montreal (UQAM)",
      subtitle: "Master of Computer Science, Major in Artificial Intelligence",
      logo_path: "/images/uqam.png",
      alt_name: "UQAM",
      duration: "2021 – 2023",
      descriptions: [
        "⚡ Completed graduate studies focused on artificial intelligence, with work spanning machine learning, NLP, and practical experimentation with data-driven systems",
        "⚡ Combined advanced coursework with teaching and lab instruction, strengthening both technical depth and the ability to communicate complex software topics clearly",
      ],
      website_link: "https://uqam.ca/",
    },
    {
      title: "Polytechnic School of Dakar",
      subtitle: "Master of Computer Science, Major in Software Engineering",
      logo_path: "/images/ucad.png",
      alt_name: "ESP / UCAD",
      duration: "2018 – 2020",
      descriptions: [
        "⚡ Advanced training in software engineering, software architecture, and the design of maintainable application systems",
        "⚡ Built a strong foundation for delivering production software across backend, frontend, and database layers",
      ],
      website_link: "https://esp.sn/",
    },
    {
      title: "Polytechnic School of Dakar",
      subtitle: "Bachelor of Computer Science, Major in Software Engineering",
      logo_path: "/images/ucad.png",
      alt_name: "ESP / UCAD",
      duration: "2017 – 2018",
      descriptions: [
        "⚡ Grounded in core computer science topics including algorithms, object-oriented programming, databases, and software design",
        "⚡ Applied coursework through programming projects that strengthened implementation discipline and problem-solving skills",
      ],
      website_link: "https://esp.sn/",
    },
    {
      title: "Marist Institute of Higher Education (IMES)",
      subtitle: "Associate's Degree in Math-Physics-Computer Science, Major in Computer Science",
      logo_path: "/images/imes.png",
      alt_name: "IMES",
      duration: "2015 – 2017",
      descriptions: [
        "⚡ Associate-level preparatory studies in mathematics, physics, and computer science",
        "⚡ Developed the analytical rigor and scientific foundation that later supported both engineering and AI work",
      ],
      website_link: "#",
    },
  ],
};

// ─── Certifications ──────────────────────────────────────────────────────────

export const certifications: { certifications: Certification[] } = {
  certifications: [
    {
      title: "Machine Learning Specialization",
      subtitle: "Stanford Online",
      logo_path: "/images/stanford_online_logo.png",
      certificate_link: "https://www.coursera.org/account/accomplishments/certificate/978V2MU8QE75",
      alt_name: "Stanford Online",
      color_code: "#a80532",
    },
    {
      title: "Natural Language Processing Specialization",
      subtitle: "deeplearning.ai",
      logo_path: "/images/deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/XUMDCNZJD8VJ",
      alt_name: "deeplearning.ai",
      color_code: "#ff4a61",
    },
    {
      title: "Angular Full Stack Development",
      subtitle: "Hong Kong University of Science and Technology",
      logo_path: "/images/HongKong_logo.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/ZKKKHBGXD8F4",
      alt_name: "HKUST",
      color_code: "#8b6734",
    },
    {
      title: "React Full Stack Development",
      subtitle: "Hong Kong University of Science and Technology",
      logo_path: "/images/HongKong_logo.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/J45UNW886XBU",
      alt_name: "HKUST",
      color_code: "#8b6734",
    },
  ],
};

// ─── Competitive Sites ───────────────────────────────────────────────────────

export const competitiveSites: CompetitiveSite[] = [
  {
    siteName: "Coursera",
    color: "#0056D2",
    profileLink: "https://www.coursera.org/learner/tidev00",
  },
  {
    siteName: "freeCodeCamp",
    color: "#0A0A23",
    profileLink: "https://www.freecodecamp.org/tidev00",
  },
  {
    siteName: "HackerRank",
    color: "#2EC866",
    profileLink: "https://www.hackerrank.com/tidev00",
  },
  {
    siteName: "LeetCode",
    color: "#F89F1B",
    profileLink: "https://leetcode.com/u/TiDev00/",
  },
];

// ─── Research ──────────────────────────────────────────────────────────────

export const research: ResearchPaper[] = [
  {
    title:
      "Advancing Language Diversity and Inclusion: Towards a Neural Network-based Spell Checker and Correction for Wolof",
    authors: "Thierno Ibrahima Cissé, Fatiha Sadat",
    venue:
      "Proceedings of the Fifth Workshop on Resources for African Indigenous Languages @ LREC-COLING",
    year: "2024",
    abstract:
      "Introduces a neural spell-checking approach for Wolof using transformer models trained on semi-automatically generated pairs of misspelled and corrected sentences. The paper reports promising results for improving text quality in a low-resource language setting and contributes to more accessible digital communication for under-represented languages.",
    paper_url: "https://aclanthology.org/2024.rail-1.16/",
    github_url: "https://github.com/TiDev00/Wolof_Neural_SpellChecker",
  },
  {
    title:
      "Automatic Spell Checker and Correction for Under-represented Spoken Languages: Case Study on Wolof",
    authors: "Thierno Ibrahima Cissé, Fatiha Sadat",
    venue: "Proceedings of the Fourth Workshop on Resources for African Indigenous Languages @ ACL",
    year: "2023",
    abstract:
      "Presents a Wolof spell checker built with a trie, dynamic programming, and weighted Levenshtein distance, supported by newly created lexical resources and a corpus of misspellings. Despite limited training data, the system achieved 98.31% predictive accuracy and 93.33% suggestion accuracy, providing a strong foundation for future Wolof language tools.",
    paper_url: "https://aclanthology.org/2023.rail-1.1/",
    github_url: "https://github.com/TiDev00/Wolof_SpellChecker",
  },
];

// ─── Open Source & Community ──────────────────────────────────────────────────────────────

export const volunteerships: WorkExperience[] = [
  {
    title: "AI Community Contributor",
    company: "Galsen AI",
    company_url: "https://galsen.ai/",
    logo_path: {
      light: "/images/galsenai_logo_light.png",
      dark: "/images/galsenai_logo_dark.png",
    },
    duration: "Jan 2021 – Present",
    location: "Dakar, Senegal",
    description:
      "Active in the Senegalese AI community, participating in knowledge sharing around machine learning and applied AI work. Support community learning by discussing ideas, sharing practical experience, and encouraging more builders to explore AI projects.",
    color: "#498676",
  },
  {
    title: "Developer Community Contributor",
    company: "Galsen Dev",
    company_url: "https://galsen.dev/en",
    logo_path: "/images/galsendev_logo.jpeg",
    duration: "Nov 2018 – Present",
    location: "Dakar, Senegal",
    description:
      "Active in the Senegalese developer community through open-source discussions, peer support, and community-driven learning. Contribute by reviewing shared work, exchanging engineering practices, and mentoring junior developers as they grow their software craft.",
    color: "#5170fe",
  },
  {
    title: "Tech Educator",
    company: "Daara-IT",
    company_url: "https://sn.linkedin.com/company/daara-it",
    logo_path: "/images/daarait_logo.png",
    duration: "Aug 2018 – Present",
    location: "Dakar, Senegal",
    description:
      "Volunteer as a tech educator helping underprivileged youth in Dakar build digital literacy and foundational programming skills. Delivered HTML/CSS and Python workshops with an emphasis on practical, accessible learning.",
    color: "#FF5722",
  },
  {
    title: "GitHub Campus Expert",
    company: "GitHub",
    company_url: "https://github.com/",
    logo_path: {
      light: "/images/gh_logo_dark.png",
      dark: "/images/gh_logo_light.png",
    },
    duration: "Jul 2018 – Present",
    location: "Remote",
    description:
      "Promote open-source culture, Git best practices, and collaborative software development among students and early-career builders. Organize initiatives, share practical workflows, and help connect local communities to the broader GitHub Education ecosystem.",
    color: {
      light: "#181717",
      dark: "#f0f6fc",
    },
  },
];

export const openSourceOverview: OpenSourceOverview = {
  description:
    "Most of my public work lives on GitHub, where I share full-stack applications, Wolof NLP research code, and applied machine learning experiments. I enjoy collaborating in the open and using public code as a bridge between research, teaching, and product delivery.",
  profiles: {
    github: "https://github.com/TiDev00",
    codeSandbox: "https://codesandbox.io/u/TiDev00",
    huggingFace: "https://huggingface.co/TiDev00",
    kaggle: "https://www.kaggle.com/TiDev00",
  },
};

// ─── Contact ─────────────────────────────────────────────────────────────────

export const contactSection: ContactSection = {
  title: "Contact Me",
  description:
    "I'm open to software engineering roles, consulting work, teaching collaborations, and conversations around applied AI. If you're building something meaningful or need an engineer who can move comfortably between product delivery and research-minded problem solving, feel free to reach out",
};

export const addressSection: AddressSection = {
  title: "Address",
  subtitle: "Montreal, Canada",
  location_map_link: "https://goo.gl/maps/JQSYLFYzxBLgpMzH7",
};

// ─── Social Media ────────────────────────────────────────────────────────────

export const socialMediaLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/tidev00",
    iconClass: "Linkedin",
    backgroundColor: "#0077B5",
  },
  {
    name: "Google Scholar",
    link: "https://scholar.google.com/citations?user=G3xzRcQAAAAJ",
    iconClass: "FileText",
    backgroundColor: "#4285F4",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/TiDev00",
    iconClass: "Twitter",
    backgroundColor: "#00acee",
  },
];
