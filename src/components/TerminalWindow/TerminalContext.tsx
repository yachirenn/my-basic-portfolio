import { createContext, useState, useCallback } from "react";

interface TerminalLine {
  id: string;
  command?: string;
  output: string;
  type: 'command' | 'output' | 'error' | 'success' | 'info';
  timestamp: Date;
}

export interface TerminalContentType {
  history: TerminalLine[];
  currentInput: string;
  setCurrentInput: (input: string) => void;
  executeCommand: (command: string) => void;
  clearHistory: () => void;
  isTerminalFocused: boolean;
  setTerminalFocused: (focused: boolean) => void;
  navigateHistory: (direction: 'up' | 'down') => void;
}

export const TerminalContext = createContext<TerminalContentType | undefined>(undefined);

export const TerminalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TerminalContext.Provider value={{
      history: [],
      currentInput: "",
      setCurrentInput: () => {},
      executeCommand: () => {},
      clearHistory: () => {},
      isTerminalFocused: false,
      setTerminalFocused: () => {},
      navigateHistory: () => {},
    }}>
      {children}
    </TerminalContext.Provider>
  );
}