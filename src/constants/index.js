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
    maersk,
    cisco,
    tesla,
    shopify,
    kanplan,
    drawconnect,
    jobit,
    tripguide,
    threejs,
    codedoodle
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
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
      title: "Consulting Engineer",
      company_name: "Cisco",
      icon: cisco,
      iconBg: "#383E56",
      date: "January 2022 - current",
      points: [
        "Developing Cisco security product solutions and integrating them with cross domain solutions.",
        "Providing cross domain solutions to customers",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Developing highly responsive web apps for internal teams",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "SDET Intern",
      company_name: "Maersk",
      icon: maersk,
      iconBg: "#E6DEDD",
      date: "June 2021 - Dec 2021",
      points: [
        "Writing automation test cases for web applications using Jest, Selenium and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },

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
      name: "KanPlan",
      description:
        "This website lets you track your progress with the help of a drag and drop Kanban board.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "zustand",
          color: "pink-text-gradient",
        },
      ],
      image: kanplan,
      source_code_link: "https://github.com/Mr-Sushant/kanplan",
    },
    {
      name: "Draw Connect",
      description:
        "Web application that enables users to collaborate over a drawing board. It has features which includes - Undo, Redo, Erase, Download",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "socket.io",
          color: "green-text-gradient",
        },
        {
          name: "Canvas API",
          color: "pink-text-gradient",
        },
      ],
      image: drawconnect,
      source_code_link: "https://github.com/Mr-Sushant/drawing-tool",
    },
    {
      name: "Code Doodle",
      description:
        "A website which allows users to have hands-on practice of HTML, CSS & JS. It uses an integrated code editor which validates respective syntaxes and iFrame to render the final code on the browser.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "iFrame",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: codedoodle,
      source_code_link: "https://github.com/Mr-Sushant/code-doodle",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  