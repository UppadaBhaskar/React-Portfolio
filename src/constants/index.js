import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  threejs,
  code,
  AWS,
  framer,
  hoobank,
  metaverse,
  portfolio,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Certifications",
  },
  {
    id: "works",
    title: "projects",
  },
];


const services = [
  {
    title: "B.Tech ",
    course:'IT',
    college:'Andhra Loyola Institute Of Engineering And Technology',
    year:'2020- 2024',
    location:'Vijayawada',
  },
  {
    title: "Intermediate",
    course:'MPC',
    college:'Sri Chaitanya Junior College',
    year:'2018- 2020',
    location:'Vijayawada',
  },
  {
    title: "SSC ",
    course:'10',
    college:'JaiKisan English Medium High School',
    year:'2017- 2018',
    location:'Vijayawada',
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
    name: "Framer",
    icon: framer,
  },
  {
    name: "React JS",
    icon: reactjs,
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
  
];

const experiences = [
  {
    title: "The complete web development bootcamp 2022",
    company_name: "Udemy",
    icon: code,
    iconBg: "#383E56",
    date: "Apr 2022 - Aug 2022",
    points: [
      "Effectively developed interactive and responsive websites using HTML, CSS, and JavaScript.",
      "Successfully built dynamic and state-managed single-page applications with React and Redux.",
      "Confidently designed and implemented RESTful APIs for data management using Node.js and Express.",
    ],
  },
  {
    title: "AWS-Cloud internship",
    company_name: "BrainOvision",
    icon: AWS,
    iconBg: "#9ce3ff",
    date: "Sep 2021 - Nov 2022",
    points: [
      
        "As an intern, I successfully completed an AWS Cloud internship where I demonstrated my expertise in deploying and managing EC2 instances, implementing robust S3 storage strategies, and optimizing database performance through Amazon RDS.",
        "Contributed to impactful projects, showcasing practical skills in cloud technologies for seamless infrastructure management.",
    ],
  },
  
   
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Personal Portfolio",
    description:
      "Designed and developed a standout personal portfolio using React, Tailwind CSS, Three.js, Three Fiber, and Framer Motion. Seamlessly blending 3D graphics with a fully responsive layout for an immersive online showcase of skills and experiences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "Framer motion",
        color: "black-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
    site_link:'https://uppadabhaskar.github.io/React-Portfolio/',
  },
  {
    name: "Metaverse",
    description:
      "Crafted a mesmerizing Metaverse landing page, seamlessly integrating complex gradients with Framer Motion, and showcasing advanced skills in Next.js. Experience a cutting-edge online journey with responsive design and compelling UI/UX.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
      {
        name: "Framer motion",
        color: "black-text-gradient",
      },
    ],
    image: metaverse,
    source_code_link: "https://github.com/UppadaBhaskar/React-Metaverse-clone",
    site_link:'https://uppadabhaskar.github.io/React-Metaverse-clone/',
  },
  {
    name: "Hoobank",
    description:
      "Experience Hoobank's landing page with a fully responsive design, modern UI/UX, powered by React.js, and enhanced by Tailwind CSS for an engaging online experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      
    ],
    image: hoobank,
    source_code_link: "https://github.com/UppadaBhaskar/React-Hoobank-Clone",
    site_link:'https://uppadabhaskar.github.io/React-Hoobank-Clone/',
  },
];

export { services,technologies, experiences, projects };
