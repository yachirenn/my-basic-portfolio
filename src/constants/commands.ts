import { personalInfo } from "@/constants/personalInfo";
import { navigation } from "@/constants/navigation";

/* ============================= */
/* ========= TYPES ============= */
/* ============================= */

export type CommandResult =
  | { type: "output"; content: string }
  | { type: "success"; content: string }
  | { type: "clear" }
  | { type: "external"; url: string; message: string }
  | { type: "navigate"; path: string; message: string };

export type CommandFn = (args: string[]) => CommandResult;

/* ============================= */
/* ===== COMMAND REGISTRY ====== */
/* ============================= */

export const commands: Record<string, CommandFn> = {
  /* ---------- HELP ---------- */

  help: () => ({
    type: "output",
    content: 'Available commands:\n\n' +
      'Navigation:\n' +
      navigation.map(item => 
        `  ${item.command.padEnd(18)} - ${item.command}`
      ).join('\n') +
      '\n\nSystem Commands:\n' +
      '  clear                  - Clear terminal screen\n' +
      '  date                   - Show current date and time\n' +
      '  echo <message>         - Print message to screen\n' +
      '\nExternal Links:\n' +
      '  github                 - Open GitHub profile\n' +
      '  linkedin               - Open LinkedIn profile\n' +
      '  email                  - Open email client\n' +
      '\nFun Commands:\n' +
      '  ascii                  - Show ASCII art\n' +
      '  quote                  - Get an inspirational quote',
  }),

  /* ---------- CLEAR ---------- */

  clear: () => ({
    type: "clear",
  }),

  /* ---------- DATE ---------- */

  date: () => ({
    type: "output",
    content: new Date().toLocaleString(),
  }),

  /* ---------- ECHO ---------- */

  echo: (args) => ({
    type: "output",
    content: args.join(" "),
  }),

  /* ---------- ROUTER NAVIGATION ---------- */

  projects: () => ({
    type: "navigate",
    path: "/projects",
    message: "Navigating to /projects ...",
  }),

  certificates: () => ({
    type: "navigate",
    path: "/certificates",
    message: "Navigating to /certificates ...",
  }),

  whoami: () => ({
    type: "navigate",
    path: "/",
    message: "Navigating to home page...",
  }),

  about: () => ({
    type: "navigate",
    path: "/about",
    message: "Loading about page...",
  }),

  skills: () => ({
    type: "navigate",
    path: "/skills",
    message: "Displaying skills matrix...",
  }),

  contact: () => ({
    type: "navigate",
    path: "/contact",
    message: "Fetching contact information...",
  }),

  /* ---------- EXTERNAL LINKS ---------- */

  github: () => ({
    type: "external",
    url: personalInfo.github,
    message: "Opening GitHub profile...",
  }),

  linkedin: () => ({
    type: "external",
    url: personalInfo.linkedin,
    message: "Opening LinkedIn profile...",
  }),

  email: () => ({
    type: "external",
    url: `mailto:${personalInfo.email}`,
    message: "Opening email client...",
  }),

  /* ---------- ASCII ---------- */

  ascii: () => ({
    type: "output",
    content: `
╔═════════════════════════════════════╗
║       Ini adalah My Kisah           ║
║                                     ║
║        Elaina is My Wife            ║
║        Elaina is Beautifull         ║
║        Elaina is My Motivasion      ║
║                                     ║
║   "Tolong jangan claim istri saya!" ║
╚═════════════════════════════════════╝
`,
  }),

  /* ---------- QUOTE ---------- */

  quote: () => {
    const quotes = [
      "Teknologi adalah upaya manusia untuk menulis ulang hukum alam...",
      "Kematian bukanlah kegagalan manusia terhadap hukum alam...",
      "Manusia bukan hanya makhluk individu...",
      "Kita membangun peradaban di atas keyakinan...",
      "Kita menyebutnya inovasi...",
      "Kita adalah cara alam mengenali dirinya sendiri...",
      "Kita tidak pernah benar-benar menang...",
    ];

    return {
      type: "output",
      content: quotes[Math.floor(Math.random() * quotes.length)],
    };
  },
};
