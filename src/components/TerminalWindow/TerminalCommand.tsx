import { nanoid } from "nanoid";
import { TerminalLine } from "@/components/lib/types/terimnal";
import { personalInfo } from "@/constants/personalInfo";
import projects from "@/constants/Project";

export function runCommand(command: string): TerminalLine {
  if (command === "help") {
    return {
      id: nanoid(),
      type: "info",
      output: "Available commands: help, clear, cat about.txt, cat projects.txt",
      timestamp: Date.now(),
    };
  }

  if (command === "cat about.txt") {
    return {
      id: nanoid(),
      type: "info",
      output: personalInfo.bio,
      timestamp: Date.now(),
    };
  }

  if (command === "cat projects.txt") {
    return {
      id: nanoid(),
      type: "info",
      output: projects.title,
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