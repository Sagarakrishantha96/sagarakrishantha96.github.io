// ─────────────────────────────────────────────────────────────
//  All of your content lives here. Edit this file to update the
//  site; the components read everything from it.
// ─────────────────────────────────────────────────────────────
import photo from "../assets/my.png";
import booking from "../assets/projects/BookingApp.jpg";
import ecommerce from "../assets/projects/E_commerceApp.jpg";
import netflix from "../assets/projects/Netflix_clone.jpg";
import deltamax from "../assets/projects/DeltaMAX_AdminPanel.jpg";
import tiktok from "../assets/projects/Tiktok_clone.jpg";
import tinder from "../assets/projects/Tinder_clone.jpg";

export const profile = {
  name: "Sagara Krishantha",
  firstName: "Sagara",
  lastName: "Krishantha",
  role: "Full-stack developer",
  location: "Colombo, Sri Lanka",
  photo,
  cv: "./Sagara_Krishantha_CV.pdf",
  email: "sagarakrishantha96@gmail.com",
  phone: "+94 71 214 5254",
  intro:
    "I build and run production web apps across the whole stack: React and TypeScript on the front, .NET Core and Node.js APIs in the middle, SQL Server underneath, deployed on AWS.",
  about: [
    "I'm a full-stack developer from Sri Lanka with more than two years of building, deploying and maintaining production web applications. I graduated with a B.Sc. (Hons) in Information Technology from the University of Moratuwa.",
    "At XpressJobs I work on a live job platform end to end: JWT-secured .NET Core APIs, React and TypeScript interfaces, SQL Server tuning and AWS infrastructure. Alongside feature work, I mentor junior developers and review their code.",
    "I care about software that stays fast and stable once real users arrive, and about leaving a codebase easier for the next developer to work in.",
  ],
  facts: [
    { label: "Currently", value: "Full Stack Developer at XpressJobs" },
    { label: "Experience", value: "2+ years in production" },
    { label: "Degree", value: "B.Sc. (Hons) IT, University of Moratuwa" },
    { label: "Based in", value: "Colombo, Sri Lanka" },
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/Sagarakrishantha96", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/sagara-krishantha/", icon: "linkedin" },
    { label: "HackerRank", url: "https://www.hackerrank.com/Sagarakrishantha", icon: "hackerrank" },
    { label: "Instagram", url: "https://www.instagram.com/sagara.krishantha.96", icon: "instagram" },
  ],
};

// Newest first. `roles` lists promotions inside the same company, newest first.
// `stack` is shown as tags.
export const experience = [
  {
    company: "XpressJobs (Pvt) Ltd",
    period: "Mar 2024 – Present",
    roles: [
      { title: "Full Stack Developer", period: "Jan 2025 – Present" },
      { title: "Associate Full Stack Developer", period: "Mar 2024 – Dec 2024" },
    ],
    summary: "Building and running a live job platform end to end.",
    highlights: [
      "Build full-stack features with .NET Core, React (TypeScript) and SQL Server, from JWT-secured REST APIs to fully responsive interfaces.",
      "Integrated the OpenAI and Meta APIs to automate job-posting workflows, and contributed to an AI-powered interview scheduling assistant.",
      "Work across AWS EC2, S3, DynamoDB, RDS and Lambda, including AWS-based task scheduling that replaced third-party cron jobs.",
      "Designed a high-performance job search and filtering system by location and sector.",
      "Mentor junior developers, run code reviews and give technical guidance on best practices.",
      "Optimised SQL Server with indexes, stored procedures and query improvements to reduce execution time.",
      "Integrated payment gateways, covering payment workflows, transaction handling and security.",
      "Deploy and manage applications on AWS EC2 servers.",
      "Implemented SEO and technical improvements to search visibility and site structure.",
      "Maintain the platform: troubleshooting, bug fixes and performance work for stability and reliability.",
    ],
    stack: [".NET Core", "C#", "React", "TypeScript", "ASP.NET MVC", "SQL Server", "AWS"],
  },
  {
    company: "SOFF Cricket",
    period: "Jun 2023 – Jan 2024",
    roles: [{ title: "Software Engineer (part-time)", period: "Jun 2023 – Jan 2024" }],
    summary: "A web platform for cricket facility bookings, user accounts and admin work.",
    highlights: [
      "Built the web platform for facility bookings, user accounts and administrative operations.",
      "Optimised the database and architecture to keep the system stable and the data consistent through high-traffic registration periods.",
      "Turned client requirements into new, scalable features as the organisation grew.",
    ],
    stack: ["Angular", "Java", "MongoDB"],
  },
  {
    company: "Hasthiya IT",
    period: "Jan 2022 – Jun 2022",
    roles: [{ title: "Trainee Software Engineer", period: "Jan 2022 – Jun 2022" }],
    summary: "Backends and admin tools for two mobile apps.",
    highlights: [
      "Built backend services and admin features for Fitbets, a mobile betting platform: user management, content moderation, video uploads, voting and betting workflows.",
      "Built and maintained backend APIs for Zlive, a live-commerce app with real-time chat and live video streaming, including authentication, authorisation and database work.",
    ],
    stack: ["Node.js", "Express", "React", "MySQL"],
  },
];

// Personal projects with screenshots. `featured: true` makes a wide card.
// Add `demo: "https://..."` to show a "Live demo" link.
export const projects = [
  {
    title: "Hotel booking app",
    image: booking,
    featured: true,
    description:
      "A MERN hotel reservation platform. Guests search, book rooms on a calendar, check in and out, and track their reservations; JWT auth and the Context API keep sessions and state in order.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/Sagarakrishantha96/Bookingapp",
  },
  {
    title: "E-commerce store",
    image: ecommerce,
    featured: true,
    description:
      "Storefront with a Node.js/Express REST API for users and products, a full checkout flow with Stripe payments, and Redux for cart state.",
    stack: ["React", "Redux", "Node.js", "Express", "Firebase"],
    github: "https://github.com/Sagarakrishantha96/react-redux",
  },
  {
    title: "DeltaMAX admin panel",
    image: deltamax,
    description:
      "Admin panel for a fitness app where admins design challenges around steps, calories and exercises, and results are rewarded as NFTs.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Sagarakrishantha96/Delta-max-fitness-admin-panel",
  },
  {
    title: "Netflix clone",
    image: netflix,
    featured: true,
    description:
      "A Netflix-style streaming interface for browsing films, TV shows and documentaries, with Firebase as the backend.",
    stack: ["React", "Firebase", "Material UI"],
    github: "https://github.com/Sagarakrishantha96/Netflix-clone",
  },
  {
    title: "TikTok clone",
    image: tiktok,
    description:
      "A TikTok-style app for creating, sharing and discovering short videos, with Firebase handling the backend.",
    stack: ["React", "Firebase", "Material UI"],
    github: "https://github.com/Sagarakrishantha96/Tiktok-app-clone",
  },
  {
    title: "Tinder clone",
    image: tinder,
    description:
      "A Tinder-style app for meeting new people through swipeable profile cards, with Firebase handling the backend.",
    stack: ["React", "Firebase", "Material UI"],
    github: "https://github.com/Sagarakrishantha96/Tinder-app",
  },
];

export const academic = [
  {
    title: "Lung disease prediction system",
    year: "2023",
    kind: "Final-year research",
    text: "Trained and evaluated a model that classifies chest X-rays as normal or abnormal for pleural effusion, fibrosis and tuberculosis, using image preprocessing, feature extraction and model optimisation.",
    stack: ["Python", "OpenCV"],
  },
  {
    title: "Sport management system",
    year: "2020",
    kind: "Software project",
    text: "A web system that keeps team members connected and helps gather, analyse and manage performance data. Worked on system design, database, frontend, backend and hosting.",
    stack: ["Angular", "Node.js", "SQL Server"],
    url: "https://github.com/Sagarakrishantha96/mysport",
  },
  {
    title: "Smart oil supplier machine",
    year: "2019",
    kind: "Hardware project",
    text: "An ATmega32 microcontroller machine that dispenses the exact volume of oil for an entered price or volume.",
    stack: ["C", "AVR"],
  },
];

export const skills = [
  { group: "Languages", items: ["C#", "TypeScript", "JavaScript", "Java", "C"] },
  { group: "Frontend", items: ["React", "Angular", "HTML", "CSS"] },
  { group: "Backend", items: [".NET Core", "ASP.NET MVC", "Node.js", "Express"] },
  { group: "Data", items: ["SQL Server", "MySQL", "MongoDB"] },
  { group: "Cloud", items: ["AWS", "Heroku"] },
  { group: "Tools", items: ["Git", "Bitbucket", "Jira", "Worklenz"] },
];

export const education = [
  { school: "University of Moratuwa", years: "2018 – 2023", detail: "B.Sc. (Hons) in Information Technology, Faculty of IT" },
  { school: "H/Ranna Maha Vidyalaya", years: "2012 – 2015", detail: "G.C.E. Advanced Level, Science stream" },
  { school: "Royal College, Colombo 7", years: "2007 – 2012", detail: "G.C.E. Ordinary Level: 8 A's and 1 B" },
];

export const achievements = [
  "FIT Code Rush 2020, organised by INTECS, Faculty of IT, University of Moratuwa",
  "Hack Moral 3.0 (2021), organised by the University of Moratuwa",
];

// EmailJS keys for the contact form. Put them in a .env file (see .env.example).
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
