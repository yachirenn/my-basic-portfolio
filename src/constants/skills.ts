const skillsData = [
  {
    name: "JavaScript",
    level: "Advanced",
    description:
      "Proficient in JavaScript ES6+, including concepts like closures, promises, and async/await.",
    tags: ["JavaScript", "ES6", "Async"],
  },
  {
    name: "TypeScript",
    level: "Advanced",
    description:
      "Experienced in using TypeScript for type-safe JavaScript development, including interfaces, generics, and decorators.",
    tags: ["TypeScript", "Interfaces", "Generics"],
  },
  {
    name: "React",
    level: "Advanced",
    description:
      "Skilled in building dynamic user interfaces with React, including hooks, context API, and component lifecycle.",
    tags: ["React", "Hooks", "Context API"],
  },
  {
    name: "Redux",
    level: "Intermediate",
    description:
      "Knowledgeable in state management using Redux, including actions, reducers, and middleware.",
    tags: ["Redux", "State Management", "Middleware"],
  },
  {
    name: "HTML & CSS",
    level: "Advanced",
    description:
      "Strong understanding of semantic HTML5 and modern CSS3 techniques, including Flexbox and Grid.",
    tags: ["HTML5", "CSS3", "Flexbox", "Grid"],
  },
  {
    name: "Node.js",
    level: "Intermediate",
    description:
      "Familiar with server-side development using Node.js, including Express framework and RESTful APIs.",
    tags: ["Node.js", "Express", "APIs"],
  },
  {
    name: "Git & GitHub",
    level: "Advanced",
    description:
      "Proficient in version control using Git and collaboration on projects via GitHub.",
    tags: ["Git", "GitHub", "Version Control"],
  },
];

export default {
  title: "Skills",
  items: skillsData.map((skill) => skill.name),
};