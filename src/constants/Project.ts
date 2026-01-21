const projects = [
  {
    title: "Projects",
    terminal: `
  > Portfolio Website
    ↳ <a href="https://github.com/yachirenn/portfolio" target="_blank">github.com/yachirenn/portfolio</a>

  > Crypto Simulator
    ↳ <a href="https://github.com/yachirenn/crypto-sim" target="_blank">github.com/yachirenn/crypto-sim</a>
  `
  },
  {
    name: "E-commerce Platform",
    description:
      "An online store platform with features like product listings, shopping cart, and payment integration. Developed using Next.js and Stripe API.",
    link: "",
    github: "",
    tags: ["Next.js", "Stripe API", "TypeScript"],
  },
  {
    name: "Blog Application",
    description:
      "A full-featured blog application with user authentication, post creation, and commenting system. Implemented with Node.js, Express, and MongoDB.",
    link: "",
    github: "",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    name: "Task Management Tool",
    description:
      "A productivity tool to manage tasks and projects with features like deadlines, priorities, and collaboration. Built with Vue.js and Firebase.",
    link: "",
    github: "",
    tags: ["Vue.js", "Firebase", "JavaScript"],
  },
  {
    name: "Weather App",
    description:
      "A weather forecasting application that provides real-time weather updates and forecasts. Created using React Native and OpenWeatherMap API.",
    link: "",
    github: "",
    tags: ["React Native", "OpenWeatherMap API", "TypeScript"],
  },
];

export default {
  title: "Projects",
  items: projects,
};