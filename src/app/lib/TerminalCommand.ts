export const TerminalCommand: Record<
  string,
  { route?: string; output?: string }
> = {
  help: {
    output: `
Available Commands:
- /about
- /project
- /noted
- /skills
- /credits
- /clear
`,
  },

  about: {
    route: "/about",
    output: "Opening about page...",
  },

  project: {
    route: "/project",
    output: "Opening project page...",
  },

  noted: {
    route: "/noted",
    output: "Opening notes...",
  },

  skills: {
    route: "/skills",
    output: "Opening skills...",
  },

  credits: {
    route: "/credits",
    output: "Opening credits...",
  },

  clear: {},
};
