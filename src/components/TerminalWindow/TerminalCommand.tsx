import { nanoid } from "nanoid";
import { TerminalLine } from "@/components/lib/types/terminal"; 
import { personalInfo } from "@/constants/personalInfo";
import { projects } from "@/constants/Project";

export function runCommand(command: string): TerminalLine {
  if (command === "help") {
    return {
      id: nanoid(),
      type: "info",
      output: "Available commands: help, clear, cat about.txt, cat projects.txt",
      timestamp: Date.now(),
    };
  }

  if (command === "clear") {
    return {
      id: nanoid(),
      type: "clear",
      output: "",
      timestamp: Date.now(),
    };
  }

  if (command === "cat about.txt") {
    return {
      id: nanoid(),
      type: "/about",
      output: personalInfo.bio,
      timestamp: Date.now(),
    };
  }

  if (command === "cat projects.txt") {
    return {
      id: nanoid(),
      type: "/projects",
      output: projects.map((project) => `- ${project.title}`).join("\n"),
      timestamp: Date.now(),
    };
  }

  return {
    id: nanoid(),
    type: "error",
    output: `Command not found: ${command}`,
    timestamp: Date.now(),
  };
}