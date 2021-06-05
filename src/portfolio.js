/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Thierno's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable " +
    "social and technical systems to create impact.",
  og: {
    title: "Thierno Ibrahima Cissé Portfolio",
    type: "website",
    url: "https://ashutosh1919.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Thierno Ibrahima Cissé",
  logo_name: "ThiernoIbrahimaCisse",
  subTitle: "A passionate individual who always thrives to work on end to end products which develop sustainable and " +
    "scalable social and technical systems to create impact.",
  resumeLink: "https://drive.google.com/file/d/1uBQ9XDcziiMArQPU4XtC15qv4BJzyqtq/view?usp=sharing",
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
  }
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing solutions to analyze big data",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Applying effectively standard implementations of Machine Learning algorithms",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
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
        "⚡ Building responsive website front end using HTML, CSS, bootstrap, javascript, angular & react ",
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
          fontAwesomeClassname: "logos-bootstrap"
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
          skillName: "React",
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
            color: "#3880FF"
          }
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
          fontAwesomeClassname: "logos:spring-icon"
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "logos-django-icon"
        }
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Integration of databases",
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances"
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
      ],
    }
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
      profileLink: "https://www.coursera.org/user/4f92758fceccd23cf7092d57bfe5b49e",
    },
    {
      siteName: "FreeCodeCamp",
      iconifyClassname: "simple-icons:freecodecamp",
      style: {
        color: "#0A0A23",
      },
      profileLink: "https://www.freecodecamp.org/tidev00",
    }
  ]
};

const degrees = {
  degrees: [
    {
      title: "Polytechnic High School of Dakar",
      subtitle: "Master of Software Engineering",
      logo_path: "ucad.png",
      alt_name: "ESP",
      duration: "2018 - 2020",
      descriptions: [
        "⚡ I've done researches in the software engineering field and written a thesis.",
        "⚡ I've also implemented and uploaded the complete solution that I presented in my thesis on my github account.",
        "⚡ I've studied advanced software engineering subjects and done advanced courses on programming, DBMS, " +
        "artificial intelligence, expert system, data mining, etc."
      ],
      website_link: "http://www.esp.sn/",
    },
    {
      title: "Polytechnic High School of Dakar",
      subtitle: "Bachelor of Software Engineering",
      logo_path: "ucad.png",
      alt_name: "ESP",
      duration: "2017 - 2018",
      descriptions: [
        "⚡ I've earned my bachelor's degree after an scholar internship at the Banking Company of West Africa (CBAO) " +
        "followed by a work experience report.",
        "⚡ All along the year, I've studied basic software engineering subjects like data structures, algorithms, " +
        "DBMS, operating systems, etc.",
        "⚡ Apart from this, I've done courses on software design, computer programming, project management, IT security, " +
        "Full Stack Development and so on."
      ],
      website_link: "http://www.esp.sn/",
    },
    {
      title: "Marist High Studies Institute",
      logo_path: "imes.png",
      alt_name: "IMES",
      duration: "2015 - 2017",
      descriptions: [
        "⚡ In 2015, I've graduated with honors my senior year at Mikado High School.",
        "⚡ I've gone then to IMES where I've spent my first two years of university taking advanced courses mainly in " +
        "mathematics, physics and computer science.",
        "⚡ That has provided me a strong background particularly in scientific fields and has allowed me to pursue my " +
        "studies in the engineering field."
      ],
      website_link: "https://www.fesic.org/cycle-prepa-dakar/",
    }
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've worked with evolving startups, large banks and some well established companies. " +
    "I am also involved with many opensource communities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work & Internships",
      experiences: [
        {
          title: "Research and development engineer intern",
          company: "Atos",
          company_url: "https://atos.net/en/",
          logo_path: "atos_logo.png",
          duration: "Dec 2020 -  Present",
          location: "Dakar, Senegal",
          description:
            "This is a french multinational information technology service and consulting company and offices worldwide. " +
            "It specialises in hi-tech transactional services, unified communications, cloud, big data and cybersecurity " +
            "services. Atos operates worldwide under the brands Atos, Atos|Syntel, Atos Consulting, Atos Healthcare, " +
            "Atos Worldgrid, Groupe Bull, Canopy and Unify. I am currently working on the designing and the development " +
            "of software for our clients. I'm also working with microsoft's products like dynamics 365 and the power " +
            "platform.",
          color: "#0066A1",
        },
        {
          title: "Production engineer support intern",
          company: "Banque Nationale pour le Développement Économique",
          company_url: "https://www.bnde.sn/",
          logo_path: "bnde_logo.jpeg",
          duration: "Oct 2020 - Nov 2020",
          location: "Dakar, Senegal",
          description:
            "This is a national financing tool actively participating in the implementation of the Accelerated Growth " +
            "Strategy of Senegal and more generally to the development of the country. I've ensured all the BAU support " +
            "queries from business were handled on priority and within agreed SLA and also ensured all applications " +
            "stability issues were well taken care off. I've supported the resolution of incidents and problems within " +
            "the team. Assisted with the resolution of complex incidents. Ensured that the right problem solving " +
            "techniques and processes were applied.",
          color: "#E04A00",
        },
        {
          title: "Software exploitation engineer intern",
          company: "Société Nationale des Télécommunications du Sénégal",
          company_url: "https://www.sonatel.sn/",
          logo_path: "sonatel_logo.png",
          duration: "Mar 2020 - Aug 2020",
          location: "Dakar, Senegal",
          description:
            "This is the principal telecommunications provider of Senegal. Sonatel is a affiliate of France Telecom Group. " +
            "The company is active in fixed line telephony, mobile telephony, mobile payment, internet service, television " +
            "and corporate telecommunications. I've ensured the testing, the integration and the deployment of new " +
            "applications to a production environment. I was also in charge of the analysis and optimization of the " +
            "running application processes.",
          color: "#15979A",
        },
        {
          title: "Network administrator intern",
          company: "Compagnie Bancaire de l'Afrique Occidentale",
          company_url: "https://www.attijariwafabank.com/en",
          logo_path: "cbao_logo.png",
          duration: "Jun 2018 - Jul 2018",
          location: "Dakar, Senegal",
          description:
            "Leader in the Senegalese banking market, CBAO Senegal has a large network of 86 branches in the country, " +
            "including 2 business centers, as well as 3 branches in Burkina Faso, Niger and Benin. Its offer covers all " +
            "banking services and is tailored to the needs of its individual, professional, corporate and institutional " +
            "clients. I've installed and configured computer networks and systems, identified and solved problems that " +
            "arise with computer networks and systems. I've also worked with IT support personnel and provided network " +
            "administration and support.",
          color: "#F4B52D",
        },
        {
          title: "Python developer intern",
          company: "Technologies Consulting Services Entreprise",
          company_url: "http://www.tcs.sn/index.php",
          logo_path: "tcs_logo.png",
          duration: "Aug 2016 - Sep 2016",
          location: "Dakar, Senegal",
          description:
            "Affiliated to DELL, this company is working in consultants and Information technology business activities. " +
            "I was involved in the designing and the development of RESTful APIs for internal and partner consumption. " +
            "I've also worked closely with UX and Front-end developers.",
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
            "",
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
            "This is a strong senegalese community of young active in the IT field and passionate about technologies. The " +
            "community's goal is ",
          color: "#275BAA",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "Jul 2018 - Present",
          description:
            "I am actively contributing to many opensource projects. These contributions include bug fixes, feature requests " +
            "and formulating proper documentation for project.",
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
    "My projects makes use of vast variety of latest technology tools. My best experience is to create AI " +
    "projects and deploy them to web applications.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "manOnTable.svg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you " +
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
    subtitle: "Rue GY-05, Sipres 1 extension - Sud Foire, Dakar, Sénégal",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/vQ3toJFzN2Y3QJZE9",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+221 33 827 12 43",
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
