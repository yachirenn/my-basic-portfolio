"use client";

import { createContext, useState, useCallback, useEffect, useRef } from "react";
import { useWindows } from "../container/WindowsContext";
import { useRouter } from "next/navigation";
import { TerminalLine, TerminalLineType } from "@/components/lib/types/terminal";
import { commands, CommandResult, CommandFn } from "@/constants/commands";
import { parseFilesystem } from "@/components/lib/filesystemUtils";
import { initialFilesystem } from "@/components/lib/initialFilesystem";

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

export const TerminalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const { openWindow } = useWindows();

  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isTerminalFocused, setTerminalFocused] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentDir, setCurrentDir] = useState("/");

  const virtualFilesystem = useRef(parseFilesystem(initialFilesystem)).current;

  useEffect(() => {
    setHistory([
      createLine("Welcome to my Terminal v.1.0!", "info"),
      createLine(
        "System initialized successfully. Type $help to see available commands.",
        "output"
      ),
      createLine("---", "output"),
    ]);
  }, []);

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

  const addLine = (line: TerminalLine) => {
    setHistory(prev => [...prev, line]);
  };

  /* ============================= */
  /* ===== EXECUTE COMMAND ======= */
  /* ============================= */

  const executeCommand = useCallback(
    (input: string) => {
      const trimmed = input.trim();
      if (!trimmed) return;

      setCommandHistory(prev => [...prev, trimmed]);
      setHistoryIndex(-1);

      const [cmd, ...args] = trimmed.split(" ");
      const commandFn: CommandFn | undefined = commands[cmd];

      // Tambahkan input user ke history
      addLine(createLine(trimmed, "input", trimmed));

      if (!commandFn) {
        addLine(createLine(`Command not found: ${cmd}`, "error"));
        setCurrentInput("");
        return;
      }

      const result: CommandResult = commandFn(args, {
        addLine,
        clearHistory: () => setHistory([]),
        history,
        setCurrentDir,
        currentDir,
        virtualFilesystem,
      });

      switch (result.type) {
        case "clear":
          setHistory([]);
          break;

        case "output":
        case "success":
          addLine(createLine(result.content, result.type));
          break;

        case "navigate":
          addLine(createLine(result.message, "success"));
          router.push(result.path);
          break;

        case "external":
          addLine(createLine(result.message, "success"));
          window.open(result.url, "_blank");
          break;

        case "window":
          addLine(createLine(result.message, "success"));
          openWindow(result.window);
          break;
      }

      setCurrentInput("");
    },
    [router, currentDir, history, virtualFilesystem]
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