"use client";

import { createContext, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { TerminalLine, TerminalLineType } from "@/components/lib/types/terminal";
import { commands, CommandResult } from "@/constants/commands";

export interface TerminalContentType {
  history: TerminalLine[];
  currentInput: string;
  setCurrentInput: (input: string) => void;
  executeCommand: (command: string) => void;
  clearHistory: () => void;
  isTerminalFocused: boolean;
  setTerminalFocused: (focused: boolean) => void;
  navigateHistory: (direction: "up" | "down") => void;
}

export const TerminalContext =
  createContext<TerminalContentType | undefined>(undefined);

export const TerminalProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const router = useRouter();

  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isTerminalFocused, setTerminalFocused] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const createLine = (
    output: string,
    type: TerminalLineType,
    command?: string
  ): TerminalLine => ({
    id: crypto.randomUUID(),
    output,
    type,
    timestamp: Date.now(),
    command,
  });

  /* ============================= */
  /* ===== EXECUTE COMMAND ======= */
  /* ============================= */

  const executeCommand = useCallback(
    (input: string) => {
      const trimmed = input.trim();
      if (!trimmed) return;

      setCommandHistory((prev) => [...prev, trimmed]);
      setHistoryIndex(-1);

      const [cmd, ...args] = trimmed.split(" ");
      const commandFn = commands[cmd];

      // Add user input line
      setHistory((prev) => [
        ...prev,
        createLine(trimmed, "input", trimmed),
      ]);

      if (!commandFn) {
        setHistory((prev) => [
          ...prev,
          createLine(`Command not found: ${cmd}`, "error"),
        ]);
        setCurrentInput("");
        return;
      }

      const result = commandFn(args);

      switch (result.type) {
        case "clear":
          setHistory([]);
          break;

        case "output":
        case "success":
          setHistory((prev) => [
            ...prev,
            createLine(result.content, result.type),
          ]);
          break;

        case "navigate":
          setHistory((prev) => [
            ...prev,
            createLine(result.message, "success"),
          ]);
          router.push(result.path);
          break;

        case "external":
          setHistory((prev) => [
            ...prev,
            createLine(result.message, "success"),
          ]);
          window.open(result.url, "_blank");
          break;
      }

      setCurrentInput("");
    },
    [router]
  );

  /* ============================= */
  /* ===== CLEAR HISTORY ========= */
  /* ============================= */

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  /* ============================= */
  /* ===== NAVIGATE HISTORY ====== */
  /* ============================= */

  const navigateHistory = useCallback(
    (direction: "up" | "down") => {
      if (direction === "up") {
        const newIndex =
          historyIndex < commandHistory.length - 1
            ? historyIndex + 1
            : historyIndex;

        setHistoryIndex(newIndex);
        setCurrentInput(
          commandHistory[commandHistory.length - 1 - newIndex] || ""
        );
      } else {
        const newIndex = historyIndex > 0 ? historyIndex - 1 : -1;
        setHistoryIndex(newIndex);

        setCurrentInput(
          newIndex >= 0
            ? commandHistory[commandHistory.length - 1 - newIndex]
            : ""
        );
      }
    },
    [historyIndex, commandHistory]
  );

  return (
    <TerminalContext.Provider
      value={{
        history,
        currentInput,
        setCurrentInput,
        executeCommand,
        clearHistory,
        isTerminalFocused,
        setTerminalFocused,
        navigateHistory,
      }}
    >
      {children}
    </TerminalContext.Provider>
  );
};