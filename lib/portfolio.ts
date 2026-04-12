import type {
  Seo,
  SocialLink,
  SkillData,
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
  title: "Thierno Cissé",
  description:
    "Fullstack software engineer with 5+ years of experience building .NET, React, Python, and AI-enabled applications across enterprise delivery, teaching, and NLP research.",
  og: {
    title: "Thierno Cissé",
    type: "website",
    url: "https://tidev00.github.io/",
  },
};

// ─── Greeting ───────────────────────────────────────────────────────────────

export const greeting = {
  title: "Who I am?",
  logoName: "ThiernoCisse",
  subTitle:
    "Fullstack software engineer with 5+ years of experience across a large stack. I build production software end to end, teach software engineering with real-world examples, and bring an AI/NLP research mindset to teams solving meaningful problems.",
  resumeLink: "https://1drv.ms/b/c/4bb26cefdabb9147/EUxYIv9CI6VHnhotVHifDXcBhnpBfv6m12D5sLHgyhk4Yg",
};

// ─── Social Media ────────────────────────────────────────────────────────────

export const socialMediaLinks: SocialLink[] = [
  {
    name: "Email",
    link: "mailto:cisse.thierno@outlook.com",
    iconClass: "Mail",
    backgroundColor: "#D44638",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/tidev00",
    iconClass: "Linkedin",
    backgroundColor: "#0077B5",
  },
  {
    name: "GitHub",
    link: "https://github.com/tidev00",
    iconClass: "Github",
    backgroundColor: "#181717",
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
        { skillName: "C#", iconifyTag: "vscode-icons:file-type-csharp2" },
        { skillName: ".NET", iconifyTag: "logos:dotnet" },
        { skillName: "JavaScript", iconifyTag: "logos:javascript" },
        { skillName: "TypeScript", iconifyTag: "logos:typescript-icon" },
        { skillName: "React", iconifyTag: "logos:react" },
        { skillName: "Angular", iconifyTag: "logos:angular-icon" },
        { skillName: "Node.js", iconifyTag: "logos:nodejs-icon" },
        { skillName: "Spring Boot", iconifyTag: "logos:spring-icon" },
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
        { skillName: "Python", iconifyTag: "logos:python" },
        { skillName: "PyTorch", iconifyTag: "logos:pytorch-icon" },
        { skillName: "TensorFlow", iconifyTag: "logos:tensorflow" },
        { skillName: "Keras", iconifyTag: "simple-icons:keras" },
        { skillName: "spaCy", iconifyTag: "simple-icons:spacy" },
        { skillName: "Scikit-Learn", iconifyTag: "simple-icons:scikitlearn" },
        { skillName: "OpenCV", iconifyTag: "logos:opencv" },
        { skillName: "Hugging Face", iconifyTag: "simple-icons:huggingface" },
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
        { skillName: "MS SQL Server", iconifyTag: "logos:microsoft-sql-server" },
        { skillName: "PostgreSQL", iconifyTag: "logos:postgresql" },
        { skillName: "MySQL", iconifyTag: "logos:mysql-icon" },
        { skillName: "MongoDB", iconifyTag: "logos:mongodb-icon" },
        { skillName: "SQLite", iconifyTag: "logos:sqlite" },
        { skillName: "Docker", iconifyTag: "logos:docker-icon" },
        { skillName: "Git", iconifyTag: "logos:git-icon" },
        { skillName: "GitLab", iconifyTag: "logos:gitlab" },
        { skillName: "GitHub", iconifyTag: "logos:github-icon" },
        { skillName: "Postman", iconifyTag: "logos:postman-icon" },
        { skillName: "Firebase", iconifyTag: "logos:firebase" },
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
    profileLink: "https://www.coursera.org/learner/tidev00",
  },
  {
    siteName: "freeCodeCamp",
    iconifyTag: "simple-icons:freecodecamp",
    style: { color: "#0A0A23" },
    profileLink: "https://www.freecodecamp.org/tidev00",
  },
  {
    siteName: "HackerRank",
    iconifyTag: "simple-icons:hackerrank",
    style: { color: "#2EC866" },
    profileLink: "https://www.hackerrank.com/tidev00",
  },
  {
    siteName: "LeetCode",
    iconifyTag: "simple-icons:leetcode",
    style: { color: "#F89F1B" },
    profileLink: "https://leetcode.com/u/TiDev00/",
  },
];

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
      title: "Institut Mathématiques et Etudes Supérieures (IMES)",
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
      color_code: "#B50035",
    },
    {
      title: "Natural Language Processing Specialization",
      subtitle: "deeplearning.ai",
      logo_path: "/images/deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/XUMDCNZJD8VJ",
      alt_name: "deeplearning.ai",
      color_code: "#ffffff",
    },
    {
      title: "Angular Full Stack Development",
      subtitle: "Hong Kong University of Science and Technology",
      logo_path: "/images/HongKong_logo.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/ZKKKHBGXD8F4",
      alt_name: "HKUST",
      color_code: "#ffffff",
    },
    {
      title: "React Full Stack Development",
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
          title: "Fullstack Software Engineer",
          company: "Pomerleau",
          company_url: "https://www.pomerleau.ca/",
          logo_path: "/images/pomerleau_logo.jpg",
          duration: "Apr 2024 – Present",
          location: "Montreal, Canada",
          description:
            "Own work across the full software development lifecycle, building integrated C#/.NET and React solutions tailored to client needs from design through deployment and maintenance. Collaborate on ArcGIS initiatives and contribute to AI R&D efforts that improve spatial analysis and product outcomes.",
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
            "Design and teach hands-on programming curriculum with real-world .NET and C# projects, bringing current industry practices directly into the classroom. Use active learning, practical workshops, and MSTest-based exercises to strengthen code quality habits and applied problem-solving.",
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
            "Led labs in C, Java, Spring, and Angular, helping students connect core software engineering concepts to realistic development workflows. Introduced Git, JUnit, and GitLab-based CI/CD practices to prepare students for collaborative and automated delivery environments.",
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
            "Delivered custom full-stack solutions for clients, combining frontend and backend technologies to ship responsive applications under evolving requirements. Worked across MERN-style stacks while maintaining strong client communication, adaptability, and reliable delivery.",
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
            "Built and evaluated NLP and machine learning models in Python to improve keyword extraction for internal documentation. Presented findings and implementation approaches to the research team, helping expand internal knowledge of practical NLP applications.",
          color: "#00274C",
        },
        {
          title: "Fullstack Engineer Intern",
          company: "Atos",
          company_url: "https://atos.net/",
          logo_path: "/images/atos_logo.png",
          duration: "Dec 2020 – Aug 2021",
          location: "Dakar, Senegal",
          description:
            "Contributed to scalable web applications from UML design through production using .NET on the backend and Angular with TypeScript on the frontend. Strengthened quality with MSTest, SQL Server, REST APIs, Postman-based validation, and agile Scrum collaboration.",
          color: "#009FE3",
        },
        {
          title: "Fullstack Engineer Intern",
          company: "Société Nationale des Télécommunications du Sénégal",
          company_url: "https://www.sonatel.com/",
          logo_path: "/images/sonatel_logo.png",
          duration: "Mar 2020 – Aug 2020",
          location: "Dakar, Senegal",
          description:
            "Developed and integrated web services for mobile and web platforms using Spring Boot, Ionic, and Angular, with a focus on consistent cross-platform user experiences. Added JUnit-based testing and supported CI/CD improvements that made delivery more regular and efficient.",
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
            "Developed Flask-based REST APIs and collaborated closely with frontend developers to deliver reliable integrations across web applications. Worked with PostgreSQL and MySQL-backed systems while using unit tests to improve code quality and maintainability.",
          color: "#E03C31",
        },
      ],
    },
  ],
};

// ─── Research ──────────────────────────────────────────────────────────────

export const research: ResearchPaper[] = [
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
];

// ─── Open Source & Community ──────────────────────────────────────────────────────────────

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
    title: "Open Source Contributor & Community Member",
    company: "Galsen AI",
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
    logo_path: {
      light: "/images/gh_logo_dark.png",
      dark: "/images/gh_logo_light.png",
    },
    duration: "July 2018 – Present",
    location: "Remote",
    description:
      "Promoting open-source culture and Git best practices among university students. Organising hackathons and contributing to the GitHub Education community.",
    color: {
      light: "#181717",
      dark: "#f0f6fc",
    },
  },
];

// ─── Contact ─────────────────────────────────────────────────────────────────

export const contactSection: ContactSection = {
  title: "Contact Me",
  description:
    "I’m open to software engineering roles, consulting work, teaching collaborations, and conversations around applied AI. If you’re building something meaningful or need an engineer who can move comfortably between product delivery and research-minded problem solving, feel free to reach out.",
};

export const addressSection: AddressSection = {
  title: "Address",
  subtitle: "Montreal, Canada",
  location_map_link: "https://goo.gl/maps/JQSYLFYzxBLgpMzH7",
};
