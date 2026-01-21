"use client";
import { createContext, useState, useCallback } from "react";
import { TerminalLine } from "@/components/lib/types/terimnal";
import { runCommand } from "@/components/TerminalWindow/TerminalCommand";

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

export const TerminalContext = createContext<TerminalContentType | undefined>(undefined);

export const TerminalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isTerminalFocused, setTerminalFocused] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const executeCommand = useCallback((command: string) => {
    setCommandHistory(prev => [...prev, command]);
    setHistoryIndex(-1);

    if (command === "clear") {
      setHistory([]);
      return;
    }

    const result = runCommand(command);
    setHistory(prev => [...prev, result]);
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  const navigateHistory = useCallback((direction: "up" | "down") => {
    if (direction === "up") {
      const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
      setHistoryIndex(newIndex);
      setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
    } else {
      const newIndex = historyIndex > 0 ? historyIndex - 1 : -1;
      setHistoryIndex(newIndex);
      setCurrentInput(newIndex >= 0 ? commandHistory[commandHistory.length - 1 - newIndex] : "");
    }
  }, [historyIndex, commandHistory]);

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