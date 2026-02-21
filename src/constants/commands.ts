import { personalInfo } from "@/constants/personalInfo";
import { navigationItems } from "@/constants/navigation";

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
    content:
      "Available commands:\n\n" +
      "Navigation:\n" +
      navigationItems
        .map((item) => `  ${item.command} - ${item.label}`)
        .join("\n") +
      "\n\nSystem Commands:\n" +
      "  clear\n" +
      "  history\n" +
      "  date\n" +
      "  echo <message>\n" +
      "\nExternal Links:\n" +
      "  github\n" +
      "  linkedin\n" +
      "  email\n" +
      "\nFun Commands:\n" +
      "  ascii\n" +
      "  quote",
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
