// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Thierno's Portfolio",
  description:
    "Highly motivated and passionate software engineer and artificial intelligence (AI) engineer with expertise in " +
    "natural language processing (NLP).",
  og: {
    title: "Thierno Ibrahima Cissé Portfolio",
    type: "website",
    url: "https://tidev00.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Who I am?",
  logo_name: "ThiernoIbrahimaCisse",
  subTitle:
    "Highly motivated and passionate software engineer and artificial intelligence (AI) engineer with expertise in " +
    "natural language processing (NLP).",
  resumeLink: "https://cvdesignr.com/p/60c6971db226a?hl=en_GB",
};

const socialMediaLinks = [
  {
    name: "Google Scholar",
    link: "https://scholar.google.com/citations?user=G3xzRcQAAAAJ&hl=fr",
    fontAwesomeIcon: "fas fa-newspaper", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#4285F4", // Reference https://simpleicons.org/?q=googlescholar
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/thierno-ciss%C3%A9-448965160/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Github",
    link: "https://github.com/TiDev00",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Outlook",
    link: "mailto:cisse.thierno@outlook.com",
    fontAwesomeIcon: "fas fa-envelope", // Reference https://fontawesome.com/icons/envelope?style=brands
    backgroundColor: "#0078D4", // Reference https://simpleicons.org/?q=outlook
  },
  {
    name: "Twitter",
    link: "https://twitter.com/TiDev00",
    fontAwesomeIcon: "fab fa-twitter", // Reference https://fontawesome.com/icons/envelope?style=brands
    backgroundColor: "#00acee", // Reference https://simpleicons.org/?q=twitter
  },
];

const skills = {
  data: [
    {
      title: "ML, DL & NLP",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience in working with Computer Vision and Natural Language Processing projects",
        "⚡ Applying effectively standard implementations of Deep Learning and Machine Learning algorithms",
      ],
      softwareSkills: [
        {
          skillName: "Pytorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: {
            color: "#EE4C2C",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
        },
        {
          skillName: "spaCy",
          fontAwesomeClassname: "simple-icons:spacy",
          style: {
            color: "#09A3D5",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "logos-opencv",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using HTML, CSS, bootstrap, javascript, angular & reactJS ",
        "⚡ Developing mobile applications using ionic & react native",
        "⚡ Creating application backend in nodeJS, spring, asp.net core & django",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "logos-bootstrap",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "black",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "logos-angular-icon",
        },
        {
          skillName: "Ionic",
          fontAwesomeClassname: "simple-icons:ionic",
          style: {
            color: "#3880FF",
          },
        },
        {
          skillName: "ASP.NET Core",
          fontAwesomeClassname: "mdi:dot-net",
          style: {
            backgroundColor: "#512BD4",
            color: "white",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "logos:spring-icon",
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "logos-django-icon",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Integration of databases",
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances",
      ],
      softwareSkills: [
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MS SQL Server",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: {
            color: "#CC2927",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#430098",
          },
        },
        {
          skillName: "Oracle Database",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#F80000",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#0db7ed",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Coursera",
      iconifyClassname: "simple-icons:coursera",
      style: {
        color: "#0056D2",
      },
      profileLink:
        "https://www.coursera.org/user/4f92758fceccd23cf7092d57bfe5b49e",
    },
    {
      siteName: "FreeCodeCamp",
      iconifyClassname: "simple-icons:freecodecamp",
      style: {
        color: "#0A0A23",
      },
      profileLink: "https://www.freecodecamp.org/tidev00",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Quebec in Montreal",
      subtitle: "Master of Artificial Intelligence",
      logo_path: "uqam.png",
      alt_name: "UQAM",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ Developed expertise in AI algorithms, machine learning, natural language processing, and intelligent systems.",
        "⚡ Gained a deep understanding of AI research methodologies.",
        "⚡ Successfully completed a thesis on Automatic Spell Checking for an under-represented language resulting, " +
          "in published scientific papers.",
      ],
      website_link: "https://uqam.ca",
    },
    {
      title: "Polytechnic School of Dakar",
      subtitle: "Master of Software Engineering",
      logo_path: "ucad.png",
      alt_name: "ESP",
      duration: "2018 - 2020",
      descriptions: [
        "⚡ Conducted research in the field of software engineering, culminating in a thesis.",
        "⚡ Developed and uploaded a comprehensive remote control system solution, including a mobile application and " +
          "a back-office website, to my GitHub account.",
        "⚡ Completed coursework in software engineering, with advanced studies in programming, database management " +
          "systems, artificial intelligence, expert systems, data mining, and more.",
      ],
      website_link: "http://www.esp.sn/",
    },
    {
      title: "Polytechnic School of Dakar",
      subtitle: "Bachelor of Software Engineering",
      logo_path: "ucad.png",
      alt_name: "ESP",
      duration: "2017 - 2018",
      descriptions: [
        "⚡ Earned my bachelor's degree following a scholarship internship at the Banking Company of West Africa (CBAO) " +
          "and the submission of a work experience report.",
        "⚡ Studied fundamental software engineering subjects throughout the year, including data structures, " +
          "algorithms, database management systems, and operating systems.",
        "⚡ Completed additional courses in software design, computer programming, project management, IT security, " +
          "and Full Stack Development.",
      ],
      website_link: "http://www.esp.sn/",
    },
    {
      title: "IMES",
      subtitle: "Associate's Degree",
      logo_path: "imes.png",
      alt_name: "ESP",
      duration: "2015 - 2017",
      descriptions: [
        "⚡ Completed preparatory courses for elite French Institutes of Higher Education competitive exams (CPGE).",
        "⚡ Received high-quality instruction in theoretical and scientific subjects, including Mathematics, Physics, " +
          "and Computer Science, as well as French and foreign languages.",
        "⚡ Managed a rigorous workload, averaging over 60 hours per week dedicated to lessons and personal study.",
        "⚡ Accumulated 120 ECTS credits during CPGE coursework.",
      ],
      website_link:
        "https://www.enseignementsup-recherche.gouv.fr/fr/classes-preparatoires-aux-grandes-ecoles-cpge-46496",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "AI Engineering Professional Certificate",
    //   subtitle: "",
    //   logo_path: "ibm_logo.png",
    //   certificate_link: "",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Machine Learning Professional Certificate",
    //   subtitle: "",
    //   logo_path: "ibm_logo.png",
    //   certificate_link: "",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    {
      title: "Machine Learning Course",
      subtitle: "Andrew Ng",
      logo_path: "stanford_online_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/978V2MU8QE75",
      alt_name: "Stanford Online",
      color_code: "#B50035",
    },
    {
      title: "Natural Language Processing Specialization",
      subtitle: "Younes Mourri, Lukasz Kaiser",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/XUMDCNZJD8VJ",
      alt_name: "deeplearning.ai",
      color_code: "white",
    },
    // {
    //   title: "Deep Learning Specialization",
    //   subtitle: "Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link: "",
    //   alt_name: "deeplearning.ai",
    //   color_code: "white",
    // },
    {
      title: "Angular Full Stack Development",
      subtitle: "Jogesh Muppala",
      logo_path: "HongKong_logo.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/ZKKKHBGXD8F4",
      alt_name: "The Hong Kong University of Science and Technology",
      color_code: "white",
    },
    {
      title: "React Full Stack Development",
      subtitle: "Jogesh Muppala",
      logo_path: "HongKong_logo.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/J45UNW886XBU",
      alt_name: "The Hong Kong University of Science and Technology",
      color_code: "white",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've worked with evolving startups, large banks and some well established companies. " +
    "Moreover, I'm involved with many opensource communities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Works",
      experiences: [
        {
          title: "Lecturer",
          company: "Teccart Institute",
          company_url: "https://www.teccart.qc.ca",
          logo_path: "teccart_logo.png",
          duration: "Mars 2023 - Present",
          location: "Montreal, Canada",
          description:
            "Experienced lecturer at Teccart Institute, teaching Object-oriented Programming with C# language and running laboratory sections. " +
            "Passionate about creating an engaging learning environment and providing hands-on experience in C# programming. " +
            "Skilled in delivering comprehensive lectures, guiding students through practical exercises, and evaluating their progress. " +
            "Stay updated with industry trends and collaborate with colleagues to enhance curriculum and instructional strategies. " +
            "Dedicated to inspiring students and equipping them with the skills for success in software development.",
          color: "#004497",
        },
        {
          title: "Chief Executive Officer",
          company: "M&T Solutions",
          company_url: "",
          logo_path: "m&t_logo.png",
          duration: "Dec 2022 - Present",
          location: "Montreal, Canada",
          description:
            "CEO of M&T Solutions, a startup specializing in leveraging new information technologies to improve business performance and competitiveness. " +
            "Expertly guides organizations through digital transformation and digitization initiatives from strategy to implementation. " +
            "Skilled in understanding client needs, developing tailored solutions, and delivering impactful results. " +
            "Committed to staying ahead of emerging technology trends.",
          color: "#2C3A50",
        },
        {
          title: "Graduate Student Instructor",
          company: "University of Quebec in Montreal",
          company_url: "https://uqam.ca",
          logo_path: "uqam.png",
          duration: "Sep 2022 - Present",
          location: "Montreal, Canada",
          description:
            "Graduate Student Instructor at UQAM with expertise in leading laboratory sections for UML modeling, " +
            "Java language, Spring framework, C language, Git and GitLab versioning, CI/CD with GitLab and Angular framework. " +
            "Skilled in creating an interactive learning environment, providing hands-on guidance, and evaluating student progress. " +
            "Up-to-date with industry practices and actively collaborate with colleagues to enhance course materials. ",
          color: "#0077C1",
        },
        {
          title: "Software developer",
          company: "Freelancer",
          company_url: "https://www.freelancer.com/",
          logo_path: "freelancer_logo.jpg",
          duration: "Sep 2021 - Dec 2022",
          location: "Montreal, Canada",
          description:
            "Experienced freelance developer delivering high-quality, tailored products for clients on the Freelancer Platform. " +
            "Utilize a wide range of new technologies to provide innovative solutions. " +
            "Strong project management skills, ensuring timely delivery. " +
            "Adaptable to diverse project requirements, spanning web development, mobile applications, and more. " +
            "Committed to client satisfaction and staying up-to-date with emerging trends.",
          color: "#2f7fc1",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "NLP Researcher",
          company: "Ciena",
          company_url: "https://www.ciena.ca",
          logo_path: "ciena_logo.png",
          duration: "Jun 2022 -  Nov 2022",
          location: "Montreal, Canada",
          description:
            "As an AI researcher at an American telecommunications networking equipment and software services supplier " +
            "headquartered in Hanover, Maryland, I was responsible for advancing Ciena's documentation system's " +
            "science and technology. I actively contributed to both fundamental and applied research projects, " +
            "presented research findings, and successfully delivered projects.",
          color: "#CF0030",
        },
        {
          title: "Research and development engineer",
          company: "Atos",
          company_url: "https://atos.net/en/",
          logo_path: "atos_logo.png",
          duration: "Dec 2020 -  Aug 2021",
          location: "Dakar, Senegal",
          description:
            "At a French multinational information technology service and consulting company specializing in hi-tech " +
            "transactional services, unified communications, cloud, big data, and cybersecurity, I served as a " +
            "Research and Development Engineer. My role involved designing and developing customized platforms to meet " +
            "client needs, encompassing front-end website architecture, user interface design, " +
            "back-end web applications, and API development.",
          color: "#0066A1",
        },
        {
          title: "Production support engineer",
          company: "Banque Nationale pour le Développement Économique",
          company_url: "https://www.bnde.sn/",
          logo_path: "bnde_logo.jpeg",
          duration: "Oct 2020 - Nov 2020",
          location: "Dakar, Senegal",
          description:
            "At BNDE, a national financing entity actively contributing to the implementation of Senegal's " +
            "Accelerated Growth Strategy and the country's overall development, I served as a Production Engineer " +
            "Support. In this role, I prioritized and efficiently addressed Business As Usual support inquiries, " +
            "ensuring compliance with SLA terms. I also played a key role in maintaining application stability, " +
            "supervising incident and problem resolution within the team, assisting with complex incidents, and " +
            "ensuring the application of effective problem-solving techniques and processes.",
          color: "#E04A00",
        },
        {
          title: "Software exploitation engineer",
          company: "Société Nationale des Télécommunications du Sénégal",
          company_url: "https://www.sonatel.sn/",
          logo_path: "sonatel_logo.png",
          duration: "Mar 2020 - Aug 2020",
          location: "Dakar, Senegal",
          description:
            "At Sonatel, Senegal's leading telecommunications provider and an affiliate of the France Telecom Group, " +
            "I served as a Software Exploitation Engineer. In this role, I specialized in testing, integrating, " +
            "and deploying new applications to production environments. Additionally, I conducted analysis and " +
            "optimization of running application processes.",
          color: "#15979A",
        },
        {
          title: "Network administrator",
          company: "Compagnie Bancaire de l'Afrique Occidentale",
          company_url: "https://www.attijariwafabank.com/en",
          logo_path: "cbao_logo.png",
          duration: "Jun 2018 - Jul 2018",
          location: "Dakar, Senegal",
          description:
            "At CBAO Senegal, a leader in the Senegalese banking market, I served as a Network Administrator. " +
            "In this role, I was responsible for the installation, configuration, and maintenance of computer " +
            "networks and systems. I efficiently identified and resolved issues related to computer networks and " +
            "systems, collaborated with IT support, and managed network administration tasks.",
          color: "#F4B52D",
        },
        {
          title: "Python developer",
          company: "Technologies Consulting Services Entreprise",
          company_url: "http://www.tcs.sn/index.php",
          logo_path: "tcs_logo.png",
          duration: "Aug 2016 - Sep 2016",
          location: "Dakar, Senegal",
          description:
            "At an organization affiliated with DELL, specializing in consulting and services for Senegalese " +
            "companies and individuals, I worked as a Python Developer. My role primarily involved designing and " +
            "developing RESTful APIs for internal and partner use. Additionally, I collaborated closely with UX and " +
            "front-end developers.",
          color: "#1ABCFF",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        // {
        //   title: "",
        //   company: "GalsenAI",
        //   company_url: "https://galsen.ai/",
        //   logo_path: "",
        //   duration: "",
        //   location: "Dakar, Senegal",
        //   description:
        //     ""
        //   color: "#4285F4",
        // },
        {
          title: "Member",
          company: "Galsen Dev </>",
          company_url: "https://galsendev.com/",
          logo_path: "galsendev_logo.jpeg",
          duration: "Nov 2018 - Present",
          location: "Dakar, Senegal",
          description:
            "A community with senegalese developers aiming to create the best environment possible for sharing and helping " +
            "each other. Galsen Dev can also help raising interest in young people for subject related to the IT field. As a " +
            "community, we are trying to help beginners to sharpen their skills through many webinars, activities and events.",
          color: "#4C6AFF",
        },
        {
          title: "Programming Commission Member",
          company: "Daara-IT",
          company_url: "https://daarait.com/",
          logo_path: "daarait_logo.png",
          duration: "Aug 2018 - Present",
          location: "Dakar, Senegal",
          description:
            "A strong senegalese community of young actives in the IT field and passionate about technologies. The " +
            "community main goal is to promote IT and all the domain related to it. The organization also try to improve the " +
            "skills of its member in order to help them in their professional career.",
          color: "#275BAA",
        },
        {
          title: "Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "Jul 2018 - Present",
          description:
            "I am actively contributing to many opensource projects. These contributions include bug fixes, feature requests " +
            "and formulating proper documentation for projects.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of vast variety of latest technology tools. Most of them allowed me to learn and develop great" +
    " programming skills.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "manOnTable.svg",
    description:
      "I am available on almost every social media and I will reply within 24 hours. I can help you " +
      "with ML, AI, web, mobile and opensource development.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the
  //     reader individually to change the core of their character.",
  //   link: "",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle: "Montreal, Canada",
    location_map_link: "https://goo.gl/maps/JQSYLFYzxBLgpMzH7",
  },
  // phoneSection: {
  //   title: "Phone Number",
  //   subtitle: "",
  // },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
