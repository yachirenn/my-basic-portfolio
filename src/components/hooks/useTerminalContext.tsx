import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import { parseFilesystem } from "@/components/lib/filesystemUtils";
import { initialFilesystem } from "../lib/initialFilesystem";
import { commands as registryCommands, CommandFn } from "@/constants/commands";
import { TerminalLine } from "@/components/lib/types/terminal";

// Context type
type TerminalContextType = {
  history: TerminalLine[];
  currentInput: string;
  currentDir: string;
  setCurrentInput: (val: string) => void;
  executeCommand: (input: string) => void;
  navigateHistory: (direction: "up" | "down") => void;
  registerCommand: (name: string, fn: CommandFn) => void;
  virtualFilesystem: Record<string, any[]>;
};

const TerminalContext = createContext<TerminalContextType | undefined>(undefined);

export const TerminalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [currentDir, setCurrentDir] = useState("/");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [customCommands, setCustomCommands] = useState<Record<string, CommandFn>>({});

  // Pastikan parseFilesystem ada di filesystemUtils.ts
  const virtualFilesystem = useRef(parseFilesystem(initialFilesystem)).current;

  const addLine = (line: TerminalLine) => {
    setHistory((prev) => [...prev, line]);
  };

  const executeCommand = (input: string) => {
    const [cmd, ...args] = input.trim().split(/\s+/);
    const fn = customCommands[cmd.toLowerCase()] || registryCommands[cmd.toLowerCase()];

    if (fn) {
      fn(args, {
        addLine,
        clearHistory: () => setHistory([]),
        history,
        setCurrentDir,
        currentDir,
        virtualFilesystem,
      });
    } else {
      addLine({
        id: crypto.randomUUID(),
        command: input,
        output: `Command not found: ${cmd}`,
        type: "error",
        timestamp: Date.now(),
      });
    }

    setCommandHistory((prev) => [...prev, input]);
    setHistoryIndex(-1);
  };

  const navigateHistory = (dir: "up" | "down") => {
    if (dir === "up" && historyIndex < commandHistory.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
    } else if (dir === "down") {
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setCurrentInput("");
      }
    }
  };

  const registerCommand = (name: string, fn: CommandFn) => {
    setCustomCommands((prev) => ({ ...prev, [name.toLowerCase()]: fn }));
  };

  return (
    <TerminalContext.Provider
      value={{
        history,
        currentInput,
        currentDir,
        setCurrentInput,
        executeCommand,
        navigateHistory,
        registerCommand,
        virtualFilesystem: virtualFilesystem,
      }}
    >
      {children}
    </TerminalContext.Provider>
  );
};

export const useTerminalContext = () => {
  const context = useContext(TerminalContext);
  if (!context) throw new Error("useTerminalContext must be used within a TerminalProvider");
  return context;
};