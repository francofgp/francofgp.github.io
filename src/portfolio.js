/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pertile Giuliano",
  title: "Hello there, I'm Giuliano",
  subTitle: emoji(
    " Argentinean 🇦🇷 |Information Systems Engineer | Full Stack Web Developer | Aspiring Data Scientist 🤖| Language Learner"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Kud5EzUDc4RmxH94_iveKY0x2gI2c_Tq/view?usp=sharing", // Set to empty to hide the button
  resumeLinkAlternative:
    "https://drive.google.com/file/d/1ubYE_zhH52CELOIc5iYq2BEwN6m_k_8J/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/francofgp",
  linkedin: "https://www.linkedin.com/in/francofgp/",
  gmail: "giulianopertile@gmail.com",
  facebook: "https://www.facebook.com/francofgp",
  twitter: "https://twitter.com/francofgp",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web sites"
    ),
    emoji("⚡ Single Page Aplications (SPA) and SSR Stacks"),
    emoji(
      "⚡ Integration of third party services such as Heroku"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML",
      icon: "vscode-icons:file-type-html"
    },
    {
      skillName: "CSS",
      icon: "vscode-icons:file-type-css"
    },
    {
      skillName: "JavaScript",
      icon: "logos:javascript"
    },
    {
      skillName: "React",
      icon: "logos:react"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node",
      icon: "logos:nodejs"
    },
    {
      skillName: "C#",
      icon: "logos:c-sharp"
    },

    {
      skillName: ".NET",
      icon: "simple-icons:dotnet"
    },
    {
      skillName: "Python",
      icon: "logos:python"
    },
    {
      skillName: "Django",
      icon: "logos:django-icon"
    },


  ],
  display: true // Set false to hide this section, defaults to true
};



// Skills Section, if you want to have two sections


const skillsSectionSecond = {
  title: "Data Science",
  subTitle: "PASSIONATELY INTERESTED IN DATA SCIENCE AND MACHINE LEARNING, CURRENTLY A SELF LEARNER 📚 IN THE FIELD.",
  skills: [
    emoji("⚡ Knowledge of Neural Networks and ML Algorithms"),
    emoji("⚡ Visualization platform such as Streamlit"),
  ],
  softwareSkills: [
    {
      skillName: "Python",
      icon: "logos:python"
    },
    {
      skillName: "PyTorch",
      icon: "logos:pytorch"
    },
    {
      skillName: "Scikit-learn",
      icon: "simple-icons:scikitlearn"
    },
    {
      skillName: "Matplotlib",
      icon: "logos:matplotlib-icon"
    },
    {
      skillName: "Numpy",
      icon: "logos:numpy"
    }


  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad Tecnológica Nacional",
      logo: require("./assets/images/utnLogo.jpg"),
      subHeader: "Information Systems Engineering",
      duration: "March 2017 - December 2021",
      desc: "Information Systems Engineering Degree",
      descBullets: [
        "Distinction for Academic Merit from the Universidad Tecnológica Nacional of Villa María.",
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "63%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Problem Solving",
      progressPercentage: "76%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Javascript Developer",
      company: "E-Partners",
      companylogo: require("./assets/images/ePartnersLogo.jpg"),
      date: "October – Present",
      desc: `Javascript developer for ScheduleInterpreter®.
      | Redesign of user interfaces
      | Increased the platform response speed.`,
      descBullets: [
        "Javascript",
        "NodeJS",
        "ExpressJS",
        "Jest",
        "HTML",
        "CSS"
      ]
    },
    {
      role: ".NET Developer",
      company: "E-Partners",
      companylogo: require("./assets/images/ePartnersLogo.jpg"),
      date: "January 2021 – October 2021",
      desc: `NET developer for the Dito-Commerce project of the company E-Partners.
      | Development of the complete informative dashboard module for users.
      | Increased the loading speed of the website.`,
      descBullets: [
        `C#`,
        `Javascript`,
        `ASP.NET Core Rest API`,
        `Razor Pages`,
        `Microsoft SQL Server`,
        `React`,
        `Redux`,
      ]
    },
    {
      role: "Java Developer",
      company: "Global Gestión",
      companylogo: require("./assets/images/globalGestionLogo.png"),
      date: "June 2019 – September 2019",
      desc: `Database maintenance.
      | Working with stakeholders, both internal and external.
      | Improving the design of internal website components.
      | Backend development`,
      descBullets: [
        `Java`,
        `Spring Boot`,
        `HTML`,
        `CSS`,
        `Javascript`,
        `PostgreSQL`,
      ]
    },
    {
      role: "Universidad Tecnológica Nacional",
      company: "UTN FRVM",
      companylogo: require("./assets/images/utnLogo.jpg"),
      date: "May 2018 – December 2018",
      desc: `Installation of network equipment |
      Network maintenance.`
    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const languages = {
  title: "Languages",
  subtitle: "SOME LANGUAGES I SPEAK",
  projects: [
    {
      image: "emojione:flag-for-spain",
      projectName: "Spanish",
      projectDesc: "Native",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: "emojione:flag-for-united-states"/*  require("./assets/images/saayaHealthLogo.webp") */,
      projectName: "English",
      projectDesc: "Advanced",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: "emojione:flag-for-russia",
      projectName: "Russian",
      projectDesc: "Intermediate",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },

    {
      image: "emojione:flag-for-france",
      projectName: "French",
      projectDesc: "Basic",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "UTN Academic Merit",
      subtitle:
        "Distinction for Academic Merit by the Universidad Tecnológica Nacional of Villa María.",
      image: require("./assets/images/utnLogo.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1-PMjZHhcazQc9A0uHSJvhVl5BsVqFluV/view?usp=sharing"
        }
      ]
    },
    {
      title: "International Olympiad of Russian as a Foreign Language",
      subtitle:
        "Awared for the 2nd International Olympiad of Russian as a Foreign Language by the St Petersburg University",
      image: require("./assets/images/peter3Logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1tZLQTUlmyJ2LYwxF2AZ5xr3diqQFqqKf/view?usp=sharing"
        }
      ]
    },

    {
      title: "International Olympiad of Russian as a Foreign Language",
      subtitle:
        "Awared for the 1st International Olympiad of Russian as a Foreign Language by the St Petersburg University",
      image: require("./assets/images/peter3Logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/199AkcoRX8WOQHpbfOrfAnRX9eiRDKY4A/view?usp=sharing"
        }
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://some-url.com"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "francofgp", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  skillsSectionSecond,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  languages,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
