export const TerminalCommand: Record<
  string,
  { route? : string; output? : string }
> = {
  help: {
    output: `
    Avaliable Command:
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
  },
  project: {
    route: "/project",
  },
  noted: {
    route: "/noted",
  },
  skills: {
    route: "/skills",
  },
  credits: {
    route: "/credits"
  },
};