// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Thierno's Portfolio",
  description:
    "A self-motivated and passionate individual who always thrives to work on end to end products which develop " +
    "sustainable, scalable, social and technical systems to create impact.",
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
    "A self-motivated and passionate individual who always thrives to work on end to end products which develop " +
    "sustainable, scalable, social and technical systems to create impact.",
  resumeLink: "https://cvdesignr.com/p/60c6971db226a?hl=en_GB",
};

const socialMediaLinks = [
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
    backgroundColor: "#00acee", // Reference https://simpleicons.org/?q=outlook
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
          fontAwesomeClassname: "simple-icons:node-dot-js",
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
        "⚡ I am currently doing a master with thesis in artificial intelligence. ",
        "⚡ The goal of this master is to introduce myself to artificial intelligence researches. ",
        "⚡ It is about demonstrating abilities to solve a specific problem connected to the conception and implementation " +
          "of intelligent systems.",
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
        "⚡ I've done researches in the software engineering field and written a thesis.",
        "⚡ I've also implemented and uploaded on my github account a complete solution of a remote control system including " +
          "the mobile application and the back office website.",
        "⚡ I've studied software engineering subjects and done advanced courses on: programming, Database " +
          "management systems, artificial intelligence, expert system, data mining, etc.",
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
        "⚡ I've earned my bachelor's degree after a scholar internship at the Banking Company of West Africa (CBAO) " +
          "followed by a work experience report.",
        "⚡ All along the year, I've studied basic software engineering subjects like data structures, algorithms, " +
          "database management systems, operating systems, etc.",
        "⚡ Furthermore, I've done courses on: software design, computer programming, project management, IT security, " +
          "Full Stack Development, etc.",
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
        "⚡ Preparation courses for the international competitive examinations to the elite French Institutes  " +
          "of Higher Education (CPGE).",
        "⚡ The program offers high quality teaching in theoretical and scientific subjects (Maths - Physics - " +
          "Computer Science) as well as in French and foreign languages.",
        "⚡ The workload is very high: more than 60 hours per week of lessons and personal work.",
        "⚡ The teaching in CPGE corresponds to 120 ECTS credits.",
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
      title: "Natural Language Processing Specialization",
      subtitle: "Younes Mourri, Lukasz Kaiser",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/b2ff8aec5ddb8a36026b50227544591f",
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
      title: "Machine Learning",
      subtitle: "Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://coursera.org/share/36a35da1fd29b9a408f3cf87517394ac",
      alt_name: "Stanford Online",
      color_code: "#B50035",
    },
    {
      title: "React Full Stack Development",
      subtitle: "Jogesh Muppala",
      logo_path: "HongKong_logo.jpg",
      certificate_link:
        "https://coursera.org/share/1c25b5de4da74ccca8e9add4dad98e8b",
      alt_name: "The Hong Kong University of Science and Technology",
      color_code: "white",
    },
    {
      title: "Angular Full Stack Development",
      subtitle: "Jogesh Muppala",
      logo_path: "HongKong_logo.jpg",
      certificate_link:
        "https://coursera.org/share/5b278b41421c6966837584165b483166",
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
          title: "Graduate Student Instructor",
          company: "University of Quebec in Montreal",
          company_url: "https://uqam.ca",
          logo_path: "uqam.png",
          duration: "Sep 2022 - Present",
          location: "Montreal, Canada",
          description:
            "I'm in charge of teaching small introductory classes, facilitating discussions in small sections " +
            "connected to large lecture courses and running laboratory sections.",
          color: "#0077C1",
        },
        {
          title: "Software developer",
          company: "Freelancer",
          company_url: "https://www.freelancer.com/",
          logo_path: "freelancer_logo.jpg",
          duration: "Sep 2021 - Present",
          location: "Montreal, Canada",
          description:
            "I am working as a freelance on several projects according to clients needs. " +
            "I'm using a variety of new technologies in order to deliver high quality products.",
          color: "#2f7fc1",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Artificial Intelligence Researcher",
          company: "Ciena",
          company_url: "https://www.ciena.ca",
          logo_path: "ciena_logo.png",
          duration: "Jun 2022 -  Nov 2022",
          location: "Montreal, Canada",
          description:
            "An american telecommunications networking equipment and software services supplier based in Hanover, Maryland. " +
            "As AI researcher, i was tasked to advance the science and technology of Ciena's documentation system. " +
            "I've participated in fundamental and applied research projects, presented results and delivered projects.",
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
            "A french multinational information technology service and consulting company. " +
            "The firm is specialized in hi-tech transactional services, unified communications, cloud, big data and cybersecurity " +
            "services. Atos operates worldwide under the brands Atos, Atos|Syntel, Atos Consulting, Atos Healthcare, " +
            "Atos Worldgrid, Groupe Bull, Canopy and Unify. As a Research and Development Engineer, I've worked on the design and " +
            "development of specific platforms according to the needs of our clients. This included developing front-end website " +
            "architecture, designing user interactions on web pages, developing back-end website applications, designing " +
            "and developing APIs.",
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
            "BNDE is a national financing tool actively participating in the implementation of the Accelerated Growth " +
            "Strategy of Senegal and more generally to the development of the country. As a Production Engineer Support, I've " +
            "ensured all the Business As Usual support queries were handled on priority and within SLA terms agreement. I've " +
            "made sure all applications stability issues were well taken care off. In the mean time, I supervised the resolution of " +
            "incidents and problems within the team, assisted with the resolution of complex incidents and guaranteed that " +
            "the right problem solving techniques and processes were applied.",
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
            "Sonatel is the principal telecommunications provider in Senegal. The firm is a affiliate of France Telecom Group. " +
            "The company is active in fixed line telephony, mobile telephony, mobile payment, internet service, television " +
            "and corporate telecommunications. As a Software Exploitation Engineer, I've worked on the testing, integration and " +
            "deployment of new applications to a production environment. I was as well in charge of the analysis and optimization " +
            "of the running application processes.",
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
            "Leader in the Senegalese banking market, CBAO Senegal has a large network of 86 branches in the country, " +
            "including 2 business centers, as well as 3 branches in Burkina Faso, Niger and Benin. It covers all " +
            "banking services and is tailored to the needs of its individual, professional, corporate and institutional " +
            "clients. As a Network Administrator, I've installed and configured computer networks and systems, identified and " +
            "solved problems that arise with computer networks and systems. I've also worked with IT support and provided network " +
            "administration.",
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
            "Affiliated to DELL, this firm is working in consulting & providing services to senegalese companies and " +
            "individuals. As a Python Developer, I was involved in designing and developing a RESTful APIs for intern and " +
            "partner consumption. Moreover, I've worked closely with UX and Front-end developers.",
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
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 514 296 4153",
  },
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
