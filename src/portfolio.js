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
  nickname: "none",
  full_name: "",
  subTitle:
    "I support projects, programs, processes, system improvements and organizational changes.",
  subSubTitle:
    "I have experience in clinical development across Therapeutic areas that include Oncology, Immunology, rare disease, infectious and Cardiovascular disease. Experienced in research, IND to phase 3, and Medical Affairs. ",
  resumeLink:
    "https://docs.google.com/document/d/17hV_3wLW2grmwWT46eM2DV4XFLJyefnC/edit?usp=sharing&ouid=104175081397162516756&rtpof=true&sd=truehttps://drive.google.com/file/d/1Ty0-51DZ72PE30kfJ2p1jjw9SHYCnDAi/view?usp=sharing",
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
          title:
            "Director, Medical Affairs Business Strategy, Project Management and Operations",
          company: "Regeneron",
          company_url: "https://www.regeneron.com/",
          logo_path: "regeneron.png",
          duration: "Aug 2021 - Feb 2023",
          location: "XYZ",
          description: `
          Act as thought partner and Chief of Staff to the Vice President of Health Economics and Outcomes Research (HEOR). Provided project
management and business operational support to the HEOR team supporting Oncology, Immunology and Gen Med projects. Collaborated
cross-functionally to create processes/systems. Lead strategic annual brand and tactic planning and collaborated with Finance to
establish/manage program budgets, prepare financial planning, forecasting, track invoicing activities and oversee accrual management.
Maintain annual budgets review (medical and clinical), and project tactic status reviews. Managed resource needs through outsourcing

and ensured team is sufficiently supported to complete projects. Supported adboards with KOLs. Line Management in supporting the
HEOR team in operational excellence and strategical capacity. Built key performance indicators and metrics (KPIs) to measure team
productivity. Part of a team to build an enterprise solution for project management to support Medical Affairs. Additionally, supported
Transparency reporting for the team.`,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#055aa4",
        },
        {
          title:
            "Director project Management and Operations and Head Global Program Management Office",
          company: "Takeda",
          company_url: "https://www.takeda.com/",
          logo_path: "takeda.png",
          duration: "Dec 2019 - Aug 2021",
          location: "XYZ",
          description: `
          Joined Takeda as Global Head of Operations and Project Management under the Drug Metabolism and pharmacokinetics (DMPK) group.
          Thought Partner and Chief of Staff to the VP of DMPK leading the strategic planning, project management and operations.
          Also setup and led the operations team and established processes within Global DMPK. Following a re-organization and formation of one platform, Preclinical and Translational Sciences (PTS) that includes Drug metabolism, Drug
          safety and Quantitation Translation, was tasked to setup and lead a global PMO and build a global team within the clinical research team.`,
          color: "#ee3c26",
        },
        {
          title:
            "PMO Global Commercial Brand Launch Operations Lead, Commercial",
          company: "SUN Pharma",
          company_url: "https://sunpharma.com/",
          logo_path: "sunpharma.png",
          duration: "Oct 2019 - Dec 2019",
          location: "XYZ",
          description: `
          Responsible for the commercial launching of ILUMYA and the SUN Pharma entity in Canada. Within three months, setup the Sun
Pharma address in Brampton Ontario, Canada. Additionally, helped setup the pieces for the launch including hire of the Medical
Science Liaison (MSLs), provide equipment and software and initiate recruitment of the medical sales rep with help of Taro Pharma
human resources, a subsidiary of Sun Pharma.`,
          color: "#f5831a",
        },
        {
          title:
            "Director HCP engagement and Program Management, Transparency and Compliance Operations",
          company: "Sanofi",
          company_url: "https://www.sanofi.com/en",
          logo_path: "sanofi.png",
          duration: "Apr 2015 - Oct 2019",
          location: "XYZ",
          description: `
          Served in increasing level of responsibility: Associate Director R&amp;D Transparency Business Partner (2015 – 2017), Director Program
          Management (2017 – 2019) within transparency and compliance operations. Established a global team to manage contract drafting, payment and consent for disclosure of transfers of value for HCPs and HCOs
          across US, LATAM and EU, thus ensuring compliance with transparency laws and codes including Sunshine Act (US), EFPIA Code
          (EU) and Bertrand Law (France). Represented organizational benefits during vendor management – employ 11 global transparency tools that included contract and
          payment, disclosure, and led the team through planning, execution, resource management and process improvement across these
          tools. Contract negotiations with vendors and managed overall program budget. Increased efficiency globally by reducing
          redundant tools and resources to capture direct and non-direct payments.`,
          color: "#7a00e6",
        },
      ],
    },
    {
      title: "Additional Experience",
      experiences: [
        {
          title:
            "Instructor, Co-director & Volunteer, Project Management Institute (PMI) New Jersey Chapter",
          company: "Project Management Institute",
          company_url: "https://www.pmi.org/",
          logo_path: "pmi.png",
          duration: "Feb 2015 - Jan 2017",
          location: "",
          description: "",
          color: "#FFFFFF",
        },
        {
          title:
            "Manager Biostatistics, Northwestern University Medical School, Arthritis Center, Chicago, IL",
          company: "Northwestern University",
          company_url: "https://crosswoc.ieeedtu.in/",
          logo_path: "northwestern.png",
          duration: "Oct 1999 - Jul 2003",
          location: "",
          description: "",
          color: "#FFFFFF",
        },
        {
          title:
            "Statistical Analyst, Abbott Medical Diagnostics Division (through Trilogy Consulting)",
          company: "Abbott Medical Diagnostics Division",
          company_url:
            "https://www.abbott.com/for-healthcare-professionals/diagnostics.html",
          logo_path: "abbott.png",
          duration: "Aug 1998 - Oct 1999",
          location: "",
          description: "",
          color: "#FFFFFF",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Publications",
  description: "My publications",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "eli.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Molecular Genetics and Metabolism",
      url:
        "https://www.researchgate.net/publication/277414479_Successful_Within-patient_Dose_Escalation_of_Olipudase_Alfa_in_Acid_Sphingomyelinase_Deficiency",
      description:
        "Successful Within-patient Dose Escalation of Olipudase Alfa in Acid Sphingomyelinase Deficiency",
      languages: [],
      links: [
        {
          name: "View Publicaion",
          url:
            "https://www.researchgate.net/publication/277414479_Successful_Within-patient_Dose_Escalation_of_Olipudase_Alfa_in_Acid_Sphingomyelinase_Deficiency",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "1",
      name: "The Journal of Clinical Pharmacology",
      url:
        "https://www.sciencedirect.com/science/article/abs/pii/S1096719214006684",
      description:
        "An open-label, multicenter, ascending-repeat-dose study of the tolerability and safety of recombinant human acid sphingomyelinase (rhASM) in patients with ASM deficiency (ASMD)",
      languages: [],
      links: [
        {
          name: "View Publicaion",
          url:
            "https://www.sciencedirect.com/science/article/abs/pii/S1096719214006684",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "2",
      name: "National Library of Medicine",
      url: "https://pubmed.ncbi.nlm.nih.gov/15818654/",
      description:
        "History of infection before the onset of juvenile dermatomyositis: results from the National Institute of Arthritis and Musculoskeletal and Skin Diseases Research Registry",
      languages: [],
      links: [
        {
          name: "View Publicaion",
          url: "https://pubmed.ncbi.nlm.nih.gov/15818654/",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "3",
      name: "National Library of Medicine",
      url: "https://pubmed.ncbi.nlm.nih.gov/14730602/",
      description:
        "Retinoblastoma suppression of matrix metalloproteinase 1, but not interleukin-6, through a p38-dependent pathway in rheumatoid arthritis synovial fibroblasts",
      languages: [],
      links: [
        {
          name: "View Publicaion",
          url: "https://pubmed.ncbi.nlm.nih.gov/14730602/",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "4",
      name: "National Library of Medicine",
      url: "https://pubmed.ncbi.nlm.nih.gov/15290747/",
      description:
        "Skin involvement in juvenile dermatomyositis is associated with loss of end row nailfold capillary loops",
      languages: [],
      links: [
        {
          name: "View Publicaion",
          url: "https://pubmed.ncbi.nlm.nih.gov/15290747/",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "5",
      name: "National Library of Medicine",
      url: "https://pubmed.ncbi.nlm.nih.gov/11762951/",
      description:
        "Differential Expression Pattern of the Antiapoptotic Proteins, Bcl-2 and FLIP, in Experimental Arthritis",
      languages: [],
      links: [
        {
          name: "View Publicaion",
          url: "https://pubmed.ncbi.nlm.nih.gov/11762951/",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "6",
      name: "National Library of Medicine",
      url: "https://pubmed.ncbi.nlm.nih.gov/11448282/",
      description:
        "The Role of Knee Alignment in Disease Progression and Functional Decline in Knee Osteoarthritis",
      languages: [],
      links: [
        {
          name: "View Publicaion",
          url: "https://pubmed.ncbi.nlm.nih.gov/11448282/",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "7",
      name: "Orthopaedic Research Society",
      url: "https://www.ors.org/transactions/47/0229.pdf",
      description:
        "Varus-Valgus Alignment in the Progression of Knee Osteoarthritis",
      languages: [],
      links: [
        {
          name: "View Publicaion",
          url: "https://www.ors.org/transactions/47/0229.pdf",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "8",
      name: "National Library of Medicine",
      url: "https://pubmed.ncbi.nlm.nih.gov/12517948/",
      description:
        "IL-6 and matrix metalloproteinase-1 are regulated by the cyclin-dependent kinase inhibitor p21 in synovial fibroblasts",
      languages: [],
      links: [
        {
          name: "View Publicaion",
          url: "https://pubmed.ncbi.nlm.nih.gov/12517948/",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
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
