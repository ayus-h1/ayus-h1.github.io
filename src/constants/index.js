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
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    ros,
    python,
    C,
    chatgpt,
    R, 
    react,
    ecocar,
    roshumble,
    sld,
    recycling,
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
    },
  ];
  
  const services = [
    {
      title: "Internet of Things",
      icon: web,
    },
    {
      title: "Embedded systems",
      icon: mobile,
    },
    {
      title: "Robotics",
      icon: backend,
    },
    {
      title: "Web Dev",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "React",
      icon: react,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "ROS2",
      icon: ros,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "ChatGPT",
      icon: chatgpt,
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
      name: "C/C++",
      icon: C,
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
      name: "R",
      icon: R,
    },
    {
      name: "Python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Connected and Automated vehicles team member ",
      company_name: "Ecocar - EV Challange",
      icon: ecocar,
      iconBg: "#383E56",
      date: "September 2022 - Present",
      points: [
        "Achieved 1st place in the competition for feature study and software stack development of ADAS features.",
        "Developed and analyzed hardware architecture design to reduce power consumption by ≈25%, improve thermal capabilities and reduce cost of design.",
        "Currently learning how to use RTmaps as middleware to bring the automotive software together.",
      ],
    },
    {
      title: "Competitions Lead",
      company_name: "Mcmaster Engineering Competitions",
      icon: mobile,
      iconBg: "#E6DEDD",
      date: "July 2023 - Present",
      points: [
        "Designing the reengineering and communications competitons for university students. ",
      ],
    },
    {
      title: "VP Internal",
      company_name: "Mcmaster Comeptitive Programming",
      icon: mobile,
      iconBg: "#383E56",
      date: "July 2023 - Present",
      points: [
        "managing notion page data and planning for the competitons",
        "Learning competitve programming to improve my logical thinking ",
      ],
    },
    // {
    //   title: "VP Finanaces",
    //   company_name: "Mcmaster Mechatronics Society ",
    //   icon: mobile,
    //   iconBg: "#E6DEDD",
    //   date: "August 2023 - Present",
    //   points: [
    //     "Managing finanaces !",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ROS2 TurtleSim",
      description:
        "Made a simulation game which uses functionalies used on existing real robots like PID controller for line following and leveraging use of multiple nodes.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "bash scripting",
          color: "pink-text-gradient",
        },
      ],
      image: roshumble,
      source_code_link: "https://github.com/ayus-h1/ROS2-Turtlesim-Project-",
    },
    {
      name: "Recycling System Automation Project",
      description:
        "Interfaced Raspberry Pi with Quanser virtual environment to develop waste sorting algorithm in Python, optimizing waste segregation. Later deployed it on robotic arms and movers.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "sensors",
          color: "green-text-gradient",
        },
        {
          name: "robots",
          color: "pink-text-gradient",
        },
      ],
      image: recycling,
      source_code_link: "https://github.com/ayus-h1/Recycling-automation-project",
    },
    {
      name: "Sequential 7 Segment Display",
      description:
        "Used sequential logic design to convert student number to decimal output on 7-seg display.Made a physical circuit using gates and flip-flops."
        ,
      tags: [
        {
          name: "Sequential logic design",
          color: "blue-text-gradient",
        },
        {
          name: "digital circuits",
          color: "green-text-gradient",
        },
      ],
      image: sld,
      source_code_link: "https://github.com/ayus-h1/Sequential-7-segment-display",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };