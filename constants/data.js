const userData = {
  githubUsername: "mikebrandin",
  name: "Mike Brandin",
  designation: "Full-Stack Developer",
  avatarUrl: "/avatar.jpg", //#TODO: find professional photo
  email: "mikebrandinbiz@gmail.com",
  address: "Charlotte, NC",
  projects: [
    {
      title: "Alchemy Sort",
      link: "https://github.com/mikebrandin/Alchemy-Sort",
      imgUrl: "/alchemy_sort_app.png",
    },
    {
      title: "Makerspace Sign-In",
      link: "https://www.cumaker.space/",
      imgUrl: "/cu_maker.png",
    },
    {
      title: "WhatToWatch",
      link: "https://github.com/mikebrandin/WhatToWatch-Discord-Bot",
      imgUrl: "/whattowatch.png",
    },
    {
      title: "Package Pal",
      link: "https://github.com/mikebrandin/PackagePal",
      imgUrl: "/pallogo.png",
    },
    {
      title: "Adversarial Search Connect 4",
      link: "",
      imgUrl: "/connect4.png",
    }
  ],
  about: {
    title:
      "I'm a Software Developer with a passion for building impactful products and using innovative solutions to enhance user experiences",
    description: [
      "B.S. Computer Science from Clemson University. " 
      + "Throughout my academic and professional journey, I have honed my skills in various areas including Full-Stack Development, Cloud Architecting, Data Engineering, Machine Learning, Web Development, and Automation.",
    ],
    currentProject: "Alchemy Sort",
    currentProjectUrl: "https://github.com/mikebrandin/DiscordBot",
  },
  experience: [
    {
      title: "Software Engineer",
      company: "Ally, Charlotte, NC",
      year: "2023",
      companyLink: "https://ally.com",
      desc:  "One of the lead full-stack developers and cloud engineers on the team" + 
            "working on Cloud Platform Integration to develop and transform enterprise applications to the cloud (AWS, Azure).",
    },
    {
      title: "Graduated",
      company: "Clemson University, Clemson, SC",
      year: "2022",
      companyLink: "https://clemson.edu",
      desc: "I graduated Summa Cum Laude in 3.5 years, recieving a Bachelor of Science in Computer Science with a 3.97 GPA and General Honors. " + 
            "I held a part-time job on-campus for every semester and also was a member of numerous clubs including " + 
            " Google Student Developer Club, ACM, Debate Club, and Honor Society of Phi Kappa Phi.",
    },
    {
      title: "Full-Stack Developer",
      company: "Environmental Information Science Lab, Clemson, SC",
      year: "2022",
      companyLink: "https://www.clemson.edu/public/water/scwater/project_ir_nsf.html",
      desc: "During my last semester, I worked as a Full-Stack Developer developing an android application and managing the cloud architecture " + 
      "of an on-campus environmental data science project called Intelligent River. I used multiple AWS services such as IoT to recieve messages from " + 
      "the weather and water sensors, Lambda functions to normalize the data, storage in DynamoDB tables, and SageMaker machine learning for anomaly detection.",
    },
    {
      title: "Software Engineer Intern",
      company: "Ally, Charlotte, NC",
      year: "2022",
      companyLink: "https://ally.com",
      desc: "Over the summer, I worked as a developer on a self-service portal for ordering and patching virtual machines" + 
            ". My changes were merged to production and resulted in improved load speeds, site data, and network security. " + 
            " During my internship, I worked hands-on with the following technologies: Terraform, " + 
            " AWS (ECS, EC2, RDS), GitLab, Django, Python, PostgreSQL, and Docker.",
    },
    {
      title: "Capstone Project - Developer",
      company: "Amazon Web Services (AWS), Clemson, SC",
      year: "2022",
      companyLink: "https://www.cumaker.space/",
      desc: "I worked with AWS on a capstone project for the Clemson Makerspace. We were tasked with developing a sign-in system and using agile methodologies to plan sprints." + 
            " In addition to helping redesigning the front-end of the sign-in system, I worked primarily on creating a dashboard for gathering user analytics for reports." + 
            " I used Athena to query our DynamoDB tables and Quicksight to create the dashboards. The front-end was built on React, Vite and Typescript.",
    },
    {
      title: "Technical Support",
      company: "Clemson Computing and Information Technology, Clemson, SC",
      year: "2020-2022",
      companyLink: "https://ccit.clemson.edu/",
      desc: "I worked for CCIT for 2 years as technical support for the College of Business." + 
            " My responsibilities included managing the active directory, modifying PC hardware, " + 
            " and assisting faculty with technical issues.",
    },
    {
      title: "Joined Honors College",
      company: "Clemson University, Clemson, SC",
      year: "2020",
      companyLink: "https://clemson.edu",
      desc: "I joined the Clemson Honors College and began working on Honors Projects.",
    },
    {
      title: "Enrolled in College",
      company: "Clemson University, Clemson, SC",
      year: "2019",
      companyLink: "https://clemson.edu",
      desc: "I enrolled at Clemson University for the Fall 2022 semester as a Computer Science major.",
    },
    {
      title: "High School",
      company: "Westwood High School, Blythewood, SC",
      year: "2015-2019",
      companyLink: "https://www.richland2.org/WH",
      desc: "Here I began my journey as a developer." + 
            " I took classes in Visual Basic 2010, my first programming language." + 
            " I played Varsity Soccer and took positions in numerous clubs" + 
            " such as President of Academic Team and Chair of Programming/Graphic Design for Robotics Team.",
    },
  ],
  resumeUrl:
    "https://drive.google.com/file/d/1YUPA4hDmfwshWHyRY61cHZ6ATq2BLeZA/view?usp=share_link",
  socialLinks: {
    twitter: "https://twitter.com/mikejbrandin",
    linkedin: "https://www.linkedin.com/in/mikebrandin/",
    github: "https://github.com/mikebrandin",
  },
};

export default userData;
