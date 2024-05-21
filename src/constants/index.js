import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    cgi,
    tcs,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    jira,
    gradle,
    confluence,
    ansible,
    dynatrace,
    jenkins,
    kubernetes,
    gcp

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    }
  ];
  
  const services = [
    
    {
      title: "DevOps Engineer",
      icon: mobile,
    },
    {
      title: "Cloud Developer",
      icon: backend,
    },
    {
      title: "SRE",
      icon: creator,
    },
    {
      title: "Tech writer",
      icon: web,
    }
  ];
  
  const technologies = [
    {
      title: "confluence",
      icon: confluence,
    },
    {
      title: "ansible",
      icon: ansible,
    },
    {
      title: "jenkins",
      icon: jenkins,
    },
    {
      title: "kubernetes",
      icon: kubernetes,
    },
    {
      title: "gcp",
      icon: gcp,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "CGI Inc.",
      icon: cgi,
      iconBg: "#383E56",
      date: "January 2020 - Present",
      points: [
        "Spearheaded the development and maintenance of banking and finance applications for Scotiabank.",
"Architected migration from on-premise to GCP infrastructure.",
"Leveraged Dynatrace for proactive monitoring and bottleneck identification, ensuring optimal system performance.",
"Contributed to Disaster Recovery (DR) and Business Continuity (DBR) activities to fortify the production environment against disruptions and ensure uninterrupted business operations.",
"Managed IBM MQ to oversee message queues, ensuring efficient communication and optimal performance.",
"Updated KSQL streams to enhance message consumption from Kafka Topics, streamlining data processing.",
"Demonstrated expertise in analyzing end-to-end message flow within Kafka using the Confluent platform.",
"Established IST and UAT environments for Loyalty Points pipelines, implementing Kerberos authentication for secure connectivity across Microsoft Azure and On-premise Cloud environments.",
"Utilized Python scripting for log analysis and command generation, enhancing operational efficiency.",
"Engineered bash scripts for automating data analysis, reducing manual intervention and improving productivity.",
"Provided support for maintenance activities and swiftly resolved production issues to minimize downtime.",
"Maintained meticulous documentation using Confluence, ensuring seamless knowledge transfer and continuity.",
"Technologies used: Confluent Kafka, XML, YAML, JSON, IBM DB2, Java, Spring boot, Python, Confluence, Shell Scripts, Containerization(Docker), Kubernetes, Ansible, GCP, Azure, IBM MQ, PagerDuty, ServiceNow Notify, IBM DB2, Ansible, Mobaxterm, Jenkins"
      ],
    },
    {
      title: "System Administrator",
      company_name: "TCS",
      icon: tcs,
      iconBg: "#E6DEDD",
      date: "Jan 2020 - Dec 2020",
      points: [
"        Re-engineered company’s systems setup, establishing automated server generation routines, optimizing system performance, installing upgrades/patches, establishing system monitoring, and maintaining security protocols.",
"Ensured that all server hardware, operating systems, software, and procedures aligned with organizational standards and strategic business plan. ",
"Increased team productivity and automated repetitive tasks by using batch files, PowerShell, VBScript and WMI. ",
"Acted as escalation point for troubleshooting advanced network/systems issues; consistently earned 100% issue-resolution scores by providing excellent service to internal and external customers.",
"Patched and updated more than 1000 Windows Servers using SCCM and kept them up to date using on a biweekly basis.",
"Created Python scripts to analyze the number of servers getting constant updates and patches and the ones which are lagging and visualizing them.",
"Worked in agile and stressful situations and updated 200 servers using Shell scripts."

      ],
    },
  ];
  
  const testimonials = [
    
    {
      testimonial:
        "Always there to help me and explain the system design without any hesitation with analogies.",
      name: "Shruti Dua",
      designation: "Project Lead",
      company: "Scotiabank",
      image: "",
    },
    {
      testimonial:
        "Energectic Team player. It was great working with him because of his Enthuasiastic and always ready to learn nature",
      name: "Nitesh Kumar",
      designation: "System Analyst",
      company: "TCS",
      image: "",
    },
    
    
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };