import { TerminalLine, TerminalLineType } from "@/components/lib/types/terimnal";
import { personalInfo } from "@/constants/personalInfo";
import { navigationItems } from "@/constants/navigation";
import React from "react";

export type CommandFn = (args: string[], helpers: {
  addLine: Function;
  clearHistory: Function;
  history: TerminalLine[];
  setCurrentDir: Function;
  currentDir: string;
  virtualFilesystem: any;
}) => void;


export const defaultCommands: Record<string, CommandFn> = {
  help: (_, { addLine }) => {
    addLine({
      output: 'Available commands:\n\n' +
        'Navigation:\n' +
        navigationItems.map(item =>
          `  ${item.command} - ${item.label}`
        ).join('\n') +
        '\n\nSystem Commands:\n' +
        '  clear                  - Clear terminal screen\n' +
        '  history                - Show command history\n' +
        '  date                   - Show current date and time\n' +
        '  echo <message>         - Print message to screen\n' +
        '\nExternal Links:\n' +
        '  github                 - Open GitHub profile\n' +
        '  linkedin               - Open LinkedIn profile\n' +
        '  email                  - Open email client\n' +
        '\nFun Commands:\n' +
        '  ascii                  - Show ASCII art\n' +
        '  quote                  - Get an inspirational quote',
      type: "output" as TerminalLineType,
    });
  },

  clear: (_, { clearHistory }) => {
    clearHistory();
  },

  history: (_, { history, addLine }) => {
    const commands = history.filter(line => line.command).slice(-10);
    addLine({
      output: commands.length > 0
        ? `Recent command:\n${commands.map((line, index) => ` ${index + 1}. ${line.command}`).join('\n')}`
        : "No command history available.",
      type: "output" as TerminalLineType,
    });
  },

  date: (_, { addLine }) => {
    addLine({
      output: new Date().toLocaleString(),
      type: "output" as TerminalLineType,
    });
  },

  whoami: (_, { addLine }) => {
    window.location.href = "/";
    addLine({
      output: "Navigating to home page...",
      type: "success" as TerminalLineType,
    });
  },

  "cat about.md": (_, { addLine }) => {
    window.location.href = "/about";
    addLine({
      output: "Loading about page...",
      type: "success" as TerminalLineType,
    });
  },

  "ls projects/": (_, { addLine }) => {
    window.location.href = "/projects";
    addLine({
      output: "Listing projects...",
      type: "success" as TerminalLineType,
    });
  },

  "which skills": (_, { addLine }) => {
    window.location.href = "/skills";
    addLine({
      output: "Displaying skills matrix...",
      type: "success" as TerminalLineType,
    });
  },

  "find certificates/": (_, { addLine }) => {
    window.location.href = "/certificates";
    addLine({
      output: "Fetching certificates...",
      type: "success" as TerminalLineType,
    });
  },

  "curl contact.json": (_, { addLine }) => {
    window.location.href = "/contact";
    addLine({
      output: "Fetching contact information...",
      type: "success" as TerminalLineType,
    });
  },

  github: (_, { addLine }) => {
    window.open(personalInfo.Github, "_blank");
    addLine({
      output: "Opening GitHub profile in new tab...",
      type: "success" as TerminalLineType,
    });
  },

  linkedin: (_, { addLine }) => {
    window.open(personalInfo.Linkedin, "_blank");
    addLine({
      output: "Opening LinkedIn profile in new tab...",
      type: "success" as TerminalLineType,
    });
  },

  email: (_, { addLine }) => {
    window.location.href = `mailto:${personalInfo.email}`;
    addLine({
      output: "Opening email client...",
      type: "success" as TerminalLineType,
    });
  },

  ascii: (_, { addLine }) => {
    addLine({
      output: `
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
      type: "output" as TerminalLineType,
    });
  },

  quote: (_, { addLine }) => {
    const quotes = [
      "Teknologi adalah upaya manusia untuk menulis ulang hukum alam...",
      "Kematian bukanlah kegagalan manusia terhadap hukum alam...",
      "Manusia bukan hanya makhluk individu, tapi juga bagian dari masyarakat...",
      "Kita membangun peradaban di atas keyakinan bahwa hukum alam bisa direvisi...",
      "Kita menyebutnya 'inovasi' ketika mencoba membekukan waktu...",
      "Kita adalah cara alam mengenali dirinya sendiri...",
      "Kita tidak pernah benar-benar 'menang' melawan hukum alam..."
    ];
    addLine({
      output: quotes[Math.floor(Math.random() * quotes.length)],
      type: "output" as TerminalLineType,
    });
  }
};