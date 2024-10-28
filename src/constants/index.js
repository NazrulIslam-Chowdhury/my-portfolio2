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
  github1,
  figma,
  bootstrap,
  school,
  college,
  university,
  wildlia,
  bikescape,
  travelguru,
  noteMaker,
  dashboard,
  firstHomes,
  photoGallery,
  mediHealth,
  threejs,
  course,
  weero,
} from "/public/assets";

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
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Mern Stack Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
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
    name: "github",
    icon: github1,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "Weero Digital",
    icon: weero,
    iconBg: "#ffffff",
    date: " 1.02.2024 - 31.05.2024",
    link: "https://weerodigital.com",
    points: [
      "Worked with e-commerce site.",
      "Implemented whole front-end of a website",
      "Implemented a new feature that increased user engagement.",
      "Troubleshooted and resolved critical website bugs, ensuring optimal performance.",
      "Collaborated with a team of designers to create a visually appealing and intuitive user interface.",
      "Managed multiple projects simultaneously, meeting deadlines and exceeding client expectations.",
      "Presented technical findings and recommendations to senior management.",
    ],
  },
  // {
  //   title: "Working with Css",
  //   company_name: "Css",
  //   icon: css,
  //   iconBg: "#E6DEDD",
  //   date: " 2021 - present",
  //   points: [
  //     "Developing and maintaining web applications using Css and other Css framework like Tailwind,Bootstrap and Material Ui.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Working with Javascript",
  //   company_name: "JS",
  //   icon: javascript,
  //   iconBg: "#E6DEDD",
  //   date: " 2022 - present",
  //   points: [
  //     "Developing and maintaining web applications using Javascript and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Working with React",
  //   company_name: "React Js",
  //   icon: reactjs,
  //   iconBg: "#E6DEDD",
  //   date: "july 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },

  {
    title: "Web Development",
    company_name: "Programming Hero",
    icon: course,
    iconBg: "#E6DEDD",
    date: "July 2022 - January 2023",
    points: ["Black Belt "],
  },
  {
    title: "Bsc",
    company_name: "National University of Bangladesh,Dhaka,Bangladesh",
    icon: university,
    iconBg: "#E6DEDD",
    date: "August 2018 - Present",
    points: ["Mathematics"],
  },
  {
    title: "HSC",
    company_name: "Monpura College,Dhaka,Bangladesh",
    icon: college,
    iconBg: "#E6DEDD",
    date: "2016",
    points: ["Science"],
  },
  {
    title: "SSC",
    company_name: "Noakhali Zilla School,Noakhali,Bangladesh",
    icon: school,
    iconBg: "#E6DEDD",
    date: "2014",
    points: ["Science"],
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
    category: "React",
    name: "First Homes",
    description:
      "A real estate application where user can listing their properties for sale or rent.An user can buy or rent properties from an owner",
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
      {
        name: "node js",
        color: "orange-text-gradient",
      },
    ],
    image: firstHomes,
    source_code_link: "https://github.com/NazrulIslam-Chowdhury/first-homes",
    live_demo_link: "https://first-homes.onrender.com",
  },

  {
    category: "React",
    name: "Wildlia",
    description:
      "Personal tour guide web application that enables users to hire tour guide for them. Users can add a service place. Users also can give a review and delete or update a review",
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
      {
        name: "node js",
        color: "orange-text-gradient",
      },
    ],
    image: wildlia,
    source_code_link: "https://github.com/NazrulIslam-Chowdhury/wildlia",
    live_demo_link: "https://wildlia-58185.web.app",
  },

  {
    category: "React",
    name: "Travel Guru",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
      {
        name: "node js",
        color: "orange-text-gradient",
      },
    ],
    image: travelguru,
    source_code_link:
      "https://github.com/NazrulIslam-Chowdhury/destination-unknown",
    live_demo_link: "https://astonishing-pudding-2f47a7.netlify.app",
  },

  {
    category: "React",
    name: "Bike Scape",
    description:
      "Web-based platform that allows users to buy and manage bikes from various seller, providing an efficient solution for bike lovers.Users can add their bike for sell.",
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
      {
        name: "node js",
        color: "orange-text-gradient",
      },
    ],
    image: bikescape,
    source_code_link: "https://github.com/NazrulIslam-Chowdhury/bike-scape",
    live_demo_link: "https://bike-scape.web.app",
  },

  {
    category: "React",
    name: "Note Maker",
    description:
      "Web-based platform that allows users to make notes and manage them like delete them,edit them and download them.User also can categorized them by creating category and manage the categories also",
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
      {
        name: "node js",
        color: "orange-text-gradient",
      },
    ],
    image: noteMaker,
    source_code_link: "https://github.com/NazrulIslam-Chowdhury/note-maker",
    live_demo_link: "https://note-maker23.web.app",
  },

  {
    category: "React",
    name: "React Dashboard",
    description:
      "An admin dashboard with different types of charts.User can experience a smooth UI/UX",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "full calendar",
        color: "pink-text-gradient",
      },
      {
        name: "nivo charts",
        color: "orange-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link:
      "https://github.com/NazrulIslam-Chowdhury/react-dashboard",
    live_demo_link: "https://simple-dashboard23.netlify.app",
  },

  {
    category: "Next Js",
    name: "Medi Health",
    description:
      "A web-based patient management system built with Next.js, TypeScript, Tailwind CSS, Appwrite, and Sentry. This system helps healthcare providers efficiently manage patient information, appointments, and medical records.",
    tags: [
      {
        name: "next js",
        color: "black-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
    ],
    image: mediHealth,
    source_code_link: "https://github.com/NazrulIslam-Chowdhury/medi-health",
    live_demo_link: "https://medi-health24.vercel.app/",
  },
  {
    category: "React",
    name: "React Photo Gallery",
    description:
      "A photo gallery where user can add and maintain photo by deleting,sorting and drag and drop with dark mode.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "img BB",
        color: "orange-text-gradient",
      },
    ],
    image: photoGallery,
    source_code_link:
      "https://github.com/NazrulIslam-Chowdhury/react-photo-gallery",
    live_demo_link: "https://react-simple-photo-gallery.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
