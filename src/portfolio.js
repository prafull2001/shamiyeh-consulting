/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hi, I'm Elias.",
  title2: "Shamiyeh PM Consult LLC",
  logo_name: "Shamiyeh PM Consult LLC",
  nickname: "harry / picleric",
  full_name: "",
  subTitle:
    "I support projects, programs, processes, system improvements and organizational changes.",
  subSubTitle:
    "I have experience in clinical development across Therapeutic areas that include Oncology, Immunology, rare disease, infectious and Cardiovascular disease. Experienced in research, IND to phase 3, and Medical Affairs. ",
  resumeLink:
    "https://drive.google.com/file/d/1Ty0-51DZ72PE30kfJ2p1jjw9SHYCnDAi/view?usp=sharing",
  mail: "mailto:shamiye@hotmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  linkedin: "https://www.linkedin.com/in/elishamiyeh/",
};

const skills = {
  data: [
    {
      title: "What I'm Good At",
      fileName: "FullStackImg",
      skills: [
        "📌 Cross Functional Team Leadership",
        "📌 Strategic Planning",
        "📌 Process Design and Continuous Improvement ",
        "📌 Strategic Planning & Enablement Strategic Leadership Skills",
        "📌 R&D Operations",
        "📌 Stakeholder, Vendor, Alliance, Compliance, Performance, Team & Project Management",
        "📌 Contract Negotiations",
        "📌 Executive Leadership Presentation",
      ],
      softwareSkills: [],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
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
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Colorado State University",
      subtitle: "Masters in Business Administration",
      logo_path: "csu.png",
      alt_name: "CSU",
      duration: "2009 - 2012",
      descriptions: [
        "Grade: 3.7 GPA",
        "Activities and societies: Gamma Beta Phi Honor Society",
      ],
    },
    {
      title: "George Mason University",
      subtitle: "Master of Science, Applied Statistical Sciences,",
      logo_path: "gmu.png",
      alt_name: "GMU",
      duration: "1996 - 1998",
      descriptions: [
        "Opened first telecommunication center in Northern Virginia",
        "Collected data for business and marketing purposes to provide the customer a more meaningful support by the staff",
      ],
    },
    {
      title: "University of Virginia at Wise",
      subtitle: "Bachelor of Science, Mathematics & Biology Minor",
      logo_path: "uva.png",
      alt_name: "UVW",
      duration: "1991 - 1994",
      descriptions: ["Activities and societies: Pi Kappa Phi"],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Project Management Profressional (PMP)®",
      subtitle: "Project Management Institute",
      logo_path: "pmi.png",
      certificate_link:
        "https://drive.google.com/file/d/1QpTw-ndZJyaEpnN7yl44t2xkzF5NNPhD/view?usp=sharing",
      alt_name: "Project Management Institute",
      // color_code: "#2AAFED",
      color_code: "#fe5b35",
    },
    {
      title: "Smartsheet Certified User Exam",
      subtitle: "Skilljar Corporation",
      logo_path: "smartsheet.png",
      certificate_link:
        "https://drive.google.com/file/d/1j9CWjsBho5EHbK17GYoZ7qm0eU7_ABGA/view?usp=sharing",
      alt_name: "Smartsheet Certified User Exam",
      // color_code: "#2AAFED",
      color_code: "#FFFFFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Professional Experiences",
  subtitle: "Big pharma and local businesses.",
  description:
    "Project Management, Program Management, and Operations PMP professional with 20+ years of progressive experience in life sciences, biotechnology, and solid biopharma business acumen.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Node.js Backend Developer",
          company: "Valora Infotech",
          company_url: "http://valorainfotech.com/",
          logo_path: "valora.jpg",
          duration: "Oct 2020 - Dec 2022",
          location: "Surat, Gujarat",
          description: `Train, oversee, and mentor young software development employees. I created and managed the admin panel backend and a gambling application as a Node.js backend developer. I obtained knowledge in Web Socket, Payment Gateway Integration, and gaming legislation, while growing my industry experience and investigating new technologies.
          Focus on change request functions in close collaboration with the project manager and team leads.
          Developed new and maintained existing applications.
          Increased productivity and problem-solving technics by 20%.
          We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        // {
        //   title: "Node.js Backend Developer (Intern)",
        //   company: "Valora Infotech",
        //   company_url: "http://valorainfotech.com/",
        //   logo_path: "valora.jpg",
        //   duration: "Oct 2020 - Mar 2021",
        //   location: "Surat, Gujarat",
        //   description: `Focus on change request functions in close collaboration with the project manager and team leads.
        //   Developed new and maintained existing applications.
        //   Increased productivity and problem-solving technics by 20%.
        //   We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
        //   `,
        //   // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
        //   color: "#0071C5",
        // },
        {
          title: "Full Stack Developer (Freelancer)",
          company: "NightOwls",
          company_url: "http://nightowls.company/",
          logo_path: "nightowls.jpg",
          duration: "Sep 2020 - Oct 2020",
          location: "Work From Home",
          description: `Maintain close contact with the client and team when handling change requests.
          LAMP Stack was mostly utilised. 40% of my work was doing backend development, 30% of my work was designing database schemas, and 30% of my work was on maintain hosting and user traffics on the website.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Community Lead",
          company: "Bauddhik-Geeks",
          company_url: "https://bauddhikgeeks.tech/",
          logo_path: "bauddhikgeeks.png",
          duration: "Sep 2021 - Present",
          location: "Work From Home",
          description:
            "Help Tech-Geeks so they get exposure to the technical world and enlighten their skills. Hence, the programming club highlight all the skills of the individual members and help them develop and groom their skills in a meaningful way. Help community members to learn and grow.",
          color: "#FBBD18",
        },
        {
          title: "Cross Winter of Code Mentor",
          company: "CWOC",
          company_url: "https://crosswoc.ieeedtu.in/",
          logo_path: "cwoc.png",
          duration: "Feb 2021 - Present",
          location: "Work From Home",
          description:
            "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
          color: "#4285F4",
        },
        // {
        //   title: "Campus Hustler",
        //   company: "Skillenza",
        //   company_url: "https://skillenza.com/",
        //   logo_path: "skillenza.png",
        //   duration: "Feb 2021 - Present",
        //   location: "Work from Home",
        //   description:
        //     "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
        //   color: "#196acf",
        // },
        {
          title: "GDG Student Volunteer",
          company: "Google Developer Groups",
          company_url: "https://gdg.community.dev/",
          logo_path: "gdg.png",
          duration: "Feb 2021 - Present",
          location: "Work From Home",
          description:
            "Google Developer Group Surat Student Volunteer and Member.",
          color: "#D83B01",
        },
        {
          title: "Postman Student Expert",
          company: "Postman",
          company_url: "https://www.postman.com/",
          logo_path: "postman.png",
          duration: "Feb 2020 - Present",
          location: "Work From Home",
          description:
            "Google Developer Group Surat Student Volunteer and Member.",
          color: "#D83B01",
        },
        {
          title: "GitHub Student Developer",
          company: "GitHub",
          company_url: "https://github.com/",
          logo_path: "github.png",
          duration: "Nov 2019 - Present",
          location: "Work from Home",
          description:
            "Contribute to Open Source Community and Open Source Project.",
          color: "#040f26",
        },
        {
          title: "Google Local Guide",
          company: "Google Map",
          company_url: "https://maps.google.com/localguides/",
          logo_path: "localguide.png",
          duration: "Sep 2018 - Present",
          location: "Work From Home",
          description:
            "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
          color: "#D83B01",
        },
        {
          title: "E. F. I. Student Volunteer",
          company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
          company_url: "https://indiaenvironment.org/",
          logo_path: "efi.png",
          duration: "Apr 2017 - Present",
          location: "Work From Home",
          description:
            "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
          color: "#5a900f",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "harikrushn.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Harikrushn9",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Keep Calm and Carry On",
      url: "https://github.com/harikanani/Keep-Calm-and-Carry-On.github.io",
      description:
        "This platform enables users to practice Augmented Reality meditation, play stress burster games, track task completion and engage in motivational exercises to cope with stress and anxiety at work.  ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Augmented Reality",
          iconifyClass: "bi:badge-ar",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/Keep-Calm-and-Carry-On.github.io",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/keep-calm-and-carry-on",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
        {
          name: "Live Demo",
          url:
            "https://akshitagupta15june.github.io/Keep-Calm-and-Carry-On.github.io/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "1",
      name: "YOG4LIFE SOCIAL APP",
      url: "https://github.com/kevalvavaliya/Yog4Life",
      description:
        "An app for helping people their healthy life. Yog4Life Has a feed feature which is help to get information from the folks, Yog4Life has an anonymous chat room to get connected with the world.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/kevalvavaliya/Yog4Life",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devfolio",
          url: "https://devfolio.co/projects/yoglife-b20d",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "2",
      name: "Adoptisity",
      url: "https://github.com/kevalvavaliya/Adoptisity",
      description:
        "Our mission is to spread awareness about the benefits of adoption and to support LGBT families so that everyone has the chance to have a loving home environment.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Wix",
          iconifyClass: "bxl:wix",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/Adoptisity",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/adoptisity",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
        {
          name: "Live Demo",
          url: "https://rajmahadevwala1.wixsite.com/adoptisity",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "3",
      name: "FinSplit",
      url: "https://github.com/rajmahadev8/Fin-Split",
      description:
        "Split your bills with your friends without any hassle. Manage Group Expenses, Track your expenses, and much more.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/rajmahadev8/Fin-Split",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/finsplit",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "4",
      name: "Emosic",
      url: "https://github.com/kevalvavaliya/Emosic",
      description:
        "An app that plays music according to your mood. Created a playlist management UI and used SpotifyAPI to control player client based on mood detection using ml model.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/kevalvavaliya/Emosic",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/emosic",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "5",
      name: "Fileblok",
      url: "https://github.com/harikanani/Fileblok",
      description:
        "Keep your projects moving with seamless transfer experice. FileBlok is a file transfer app that allows you to transfer files from one device to another without any hassle. We built this app using Flutter, Node.js and StoryBlok.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Storyblok",
          iconifyClass: "logos-storyblok-icon",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/Fileblok",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/fileblok",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "6",
      name: "BAUDDIK-GEEKS PORTFOLIO",
      url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
      description:
        "Awesome Community Portfolio website for Bauddhik-Geeks community",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "https://bauddhikgeeks.co/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "7",
      name: "Votechain",
      url: "https://github.com/abhigoyani/votechain",
      description:
        "Awesome Community Portfolio website for Bauddhik-Geeks community",
      languages: [
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb-icon",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/abhigoyani/votechain",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "8",
      name: "Swag Store",
      url: "https://github.com/harikanani/e-commerce-frontend",
      description:
        "An E-commerce website built using MERN[Mongo, Express, React, Node] stack and we have also added stripe payment gateway integration [in test mode].",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "MedusaJS",
          iconifyClass: "logos-medusa-icon",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/e-commerce-frontend",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "9",
      name: "node-blockchain",
      url: "https://github.com/harikanani/node-blockchain",
      description:
        "A simple blockchain and cryptocurrency wallet implemented in Node.js and TypeScript (for learning purposes).",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "TypeScript",
          iconifyClass: "skill-icons:typescript",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/node-blockchain",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "10",
      name: "Know Me Well",
      url: "https://github.com/harikanani/personal-portfolio",
      description:
        "A simple command line interface based quiz app to know more about me :).",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Repl.it",
          iconifyClass: "logos-replit-icon",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/personal-portfolio",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "11",
      name: "Bloggify",
      url: "https://github.com/harikanani/Bloggify",
      description: "A Simple REST API for Blog Application.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/Bloggify",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "12",
      name: "Stargazzers",
      url: "https://github.com/harikanani/stargazers",
      description: "An Unofficial API for GitHub Repo Stars Count",
      languages: [
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/stargazers",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "13",
      name: "GitHub Theme Portfolio",
      url: "https://github.com/harikanani/harikanani.github.io",
      description:
        "A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "SCSS",
          iconifyClass: "vscode-icons:file-type-scss2",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/harikanani.github.io",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "https://harikanani.github.io/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    // {
    //   id: "6",
    //   name: "Automate Attendace",
    //   url: "https://github.com/harikanani/Node_Python",
    //   description: "Automation of Online Attendance using node js and python",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "7",
    //   name: "Automate Discord Bot",
    //   url: "https://github.com/harikanani/AutomateDiscordBot",
    //   description:
    //     "A Discord Bot to send Automatic messages to serer channel in regular time difference.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Python Selenium",
    //       iconifyClass: "logos-selenium",
    //     },
    //     {
    //       name: "Chromium Browser",
    //       iconifyClass: "openmoji-chromium",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "8",
    //   name: "Flask Blog",
    //   url: "https://github.com/harikanani/flask_blog",
    //   description: "A Simple Blog Web Application made using Flask Framework",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Flask",
    //       iconifyClass: "cib-flask",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "9",
    //   name: "Netflix top series",
    //   url: "https://github.com/harikanani/netflix-top-series",
    //   description: "List of Top Netflix Series which is deployed to vercel.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    {
      id: "10",
      name: "COVID-19 Tracker",
      url: "https://github.com/harikanani/Covid19TrackerReact",
      description:
        "Simple Covid-19 Tracker made using React and deployed to Vercel.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/Covid19TrackerReact",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    // {
    //   id: "11",
    //   name: "Food Order Static Website",
    //   url: "https://github.com/harikanani/food-order-website",
    //   description:
    //     "A simple static website related to food restaurants service. this is reasponsive as well.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "PHP",
    //       iconifyClass: "logos-php",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "12",
    //   name: "NFT Launchpad",
    //   url: "https://deliquescent-cents.000webhostapp.com/",
    //   description: "NFT Launchpad crypto site portfolio",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/nft-launchpad",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
