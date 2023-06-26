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
    // git,
    github1,
    figma,
    // docker,
    bootstrap,
    // meta,
    // starbucks,
    // tesla,
    // shopify,
    school,
    college,
    university,
    wildlia,
    bikescape,
    travelguru,
    // educavo,
    threejs,
    course,
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
        title: "Working with Html5",
        company_name: "Html",
        icon: html,
        iconBg: "#383E56",
        date: " 2021 - present",
        points: [
            "Developing and maintaining web applications using Html 5 and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Working with Css",
        company_name: "Css",
        icon: css,
        iconBg: "#E6DEDD",
        date: " 2021 - present",
        points: [
            "Developing and maintaining web applications using Css and other Css framework like Tailwind,Bootstrap and Material Ui.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Working with Javascript",
        company_name: "JS",
        icon: javascript,
        iconBg: "#383E56",
        date: " 2022 - present",
        points: [
            "Developing and maintaining web applications using Javascript and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Working with React",
        company_name: "React Js",
        icon: reactjs,
        iconBg: "#E6DEDD",
        date: "july 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },

    {
        title: "Web Development",
        company_name: "Programming Hero",
        icon: course,
        iconBg: "#E6DEDD",
        date: "July 2022 - January 2023 (6th batch)",
        points: [
            "Black Belt "
        ],
    },
    {
        title: "Bsc",
        company_name: "National University of Bangladesh,Dhaka,Bangladesh",
        icon: university,
        iconBg: "#E6DEDD",
        date: "August 2018 - Present",
        points: [
            "Mathematics"
        ],
    },
    {
        title: "HSC",
        company_name: "Monpura College,Dhaka,Bangladesh",
        icon: college,
        iconBg: "#E6DEDD",
        date: "2016",
        points: [
            "Science",
        ],
    },
    {
        title: "SSC",
        company_name: "Noakhali Zilla School,Noakhali,Bangladesh",
        icon: school,
        iconBg: "#E6DEDD",
        date: "2014",
        points: [
            "Science",
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
        source_code_link: "https://github.com/NazrulIslam-Chowdhury/destination-unknown",
        live_demo_link: "https://astonishing-pudding-2f47a7.netlify.app",
    },

    {
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
];

export { services, technologies, experiences, testimonials, projects };