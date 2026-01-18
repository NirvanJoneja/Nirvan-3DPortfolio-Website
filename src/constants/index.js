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
  threejs,
  python,
  go,
} from "../assets";

// --- ADD THIS IMPORT ---
// We use a file that already exists in your folder so it never breaks
import herobg from "../assets/herobg.png";
// -----------------------

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Engineering",
    icon: web,
  },
  {
    title: "Backend Systems",
    icon: mobile,
  },
  {
    title: "Applied AI & Automation",
    icon: backend,
  },
  {
    title: "Product-Oriented Engineering",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Go",
    icon: go,
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [];

const testimonials = [
  {
    testimonial:
      "This section is reserved for future client feedback and testimonials once projects are deployed and reviewed.",
    name: "Future Client",
    designation: "CEO",
    company: "Tech Company",
    image: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
  },
  {
    testimonial:
      "Positive reviews, success stories, and impact statements from collaborators will be featured in this space.",
    name: "Collaborator",
    designation: "CTO",
    company: "Startup Inc",
    image: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
  },
  {
    testimonial:
      "Feedback on reliability, code quality, and project execution will appear here after project completion.",
    name: "Stakeholder",
    designation: "Product Lead",
    company: "Enterprise",
    image: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
  },
];

// --- UPDATED PROJECTS SECTION ---
const projects = [
  {
    name: "Project One",
    description:
      "This project is currently in the planning and development phase. It will focus on solving real-world problems using modern web technologies.",
    tags: [
      {
        name: "upcoming",
        color: "blue-text-gradient",
      },
      {
        name: "development",
        color: "green-text-gradient",
      },
      {
        name: "ideas",
        color: "pink-text-gradient",
      },
    ],
    image: herobg, // <--- Uses your local background image
    source_code_link: "https://github.com/",
  },
  {
    name: "Project Two",
    description:
      "A scalable application is being designed here. Check back later for details on the tech stack, architecture, and live demo.",
    tags: [
      {
        name: "loading",
        color: "blue-text-gradient",
      },
      {
        name: "wip",
        color: "green-text-gradient",
      },
    ],
    image: herobg, // <--- Uses your local background image
    source_code_link: "https://github.com/",
  },
  {
    name: "Project Three",
    description:
      "Future home of an innovative technical project. This space is reserved for showcasing complex problem-solving and engineering skills.",
    tags: [
      {
        name: "future",
        color: "blue-text-gradient",
      },
      {
        name: "tech",
        color: "pink-text-gradient",
      },
    ],
    image: herobg, // <--- Uses your local background image
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };