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

  threejs,
  kotlin,
  java,
  android,
  flutter,
  razorpay,
room,
sql,
sqlite,
firebase,
exoplayer,
mvvm,
retrofit,

TuneLyf,
organizerclasses,
smallsteps,

  

} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const services = [
  {
    title: "Android App Development",
    icon: android, // android / mobile icon
  },
  {
    title: "Flutter App Development",
    icon: flutter, // flutter related icon
  },
  {
    title: "UI / UX Design",
    icon: figma,
  },
  {
    title: "Firebase Integration",
    icon: firebase,
  },
];


const technologies = [
  {
    name: "Kotlin",
    icon: kotlin, // ya kotlin icon agar available ho
  },
  {
    name: "Java",
    icon: java, // temporary reuse if no java icon
  },
  {
    name: "Android SDK",
    icon: android,
  },
  {
    name: "MVVM Architecture",
    icon: mvvm,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Room Database",
    icon: room, // reusable db icon
  },
  {
    name: "SQL",
    icon: sql, // reusable db icon
  },
  {
    name: "SQLite",
    icon: sqlite,
  },
  {
    name: "Retrofit",
    icon: retrofit,
  },
  {
    name: "ExoPlayer",
    icon: exoplayer,
  },
  {
    name: "RazorPay",
    icon: razorpay,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Git & GitHub",
    icon: git,
  },
  {
    name: "UI / UX (Figma)",
    icon: figma,
  },
];


const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
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
    name: "TuneLyf – Music Streaming App",
    description:
      "A modern Android music streaming application built with Kotlin and MVVM. Supports online streaming, local playback, background play, playlists, and smooth UI using ExoPlayer and Firebase.",
    tags: [
      { name: "kotlin", color: "blue-text-gradient" },
      { name: "mvvm", color: "green-text-gradient" },
      { name: "firebase", color: "pink-text-gradient" },
      { name: "exoplayer", color: "blue-text-gradient" },
    ],
    image: TuneLyf,
    source_code_link: "https://github.com/nafisquaisar/TuneLyfmusic",
    playstore_link:
      "https://play.google.com/store/apps/details?id=com.song.nafis.nf.TuneLyf",
  },

  {
    name: "Organizer Classes – Education App",
    description:
      "An education-focused Android app providing videos, notes, PYQs, doubt-solving, and test features for Bihar Board, MP Board, and CBSE students. Live on Google Play Store.",
    tags: [
      { name: "android", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "mvvm", color: "pink-text-gradient" },
    ],
    image: organizerclasses,
    source_code_link:
      "https://github.com/nafisquaisar/Organizer_Classes",
    playstore_link:
      "https://play.google.com/store/apps/details?id=com.nafis.organizerclasses",
  },

  {
    name: "Small Steps – Notes App",
    description:
      "A lightweight Android notes application focused on simplicity and offline usage. Built to understand Android fundamentals, file handling, and clean UI flows.",
    tags: [
      { name: "android", color: "blue-text-gradient" },
      { name: "kotlin", color: "green-text-gradient" },
      { name: "sqlite", color: "pink-text-gradient" },
    ],
    image: smallsteps,
    source_code_link:
      "https://github.com/nafisquaisar/Small_Steps",
    playstore_link:
      "https://play.google.com/store/apps/details?id=com.app.nafis.nf2024.smallsteps",
  },
];


export { services, technologies, experiences, testimonials, projects };
