import React, {createContext, useContext, useState, useRef, useEffect} from "react";
import { parseFilesystem, resolvePath } from "@/utils/filesystemUtils";
import initialFilesystem from "../lib/initialFilesystem";
import { defaultCommands } from "@/constants/commands";
import { TerminalLine } from "@/components/lib/types/terimnal";

type CommandFn = (args: string[]) => void;

type TerminalContextType = {
  history: TerminalLine[];
  currentInput: string;
  currentDir: string;
  setCurrentInput: (val: string) => void;
  executeCommand: (input: string) => void;
  navigateHistory: (direction: 'up' | 'down') => void;
  registerCommand: (name: string, fn: CommandFn) => void;
  virtualFilesystem: Record<string, any[]>;
};

const TerminalContext = createContext<TerminalContextType | undefined>(undefined);

export const TerminalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [currentDir, setCurrentDir] = useState('/');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commands, setCommands] = useState<Record<string, CommandFn>>({});

  const virtualFilesystem = useRef(parseFilesystem(initialFilesystem)).current;

  const addLine = (Line: TerminalLine) => {
    setHistory((prev) => [...prev, Line]);
  };

  const executeCommand = (input: string) => {
    const [cmd, ...args] = input.trim().split(/\s+/);
    const fn = commands[cmd.toLowerCase()];

    if (fn) {
      fn(args); // tidak dipakai sebagai output
    } else {
      addLine({
        id: crypto.randomUUID(),
        command: input,
        output: `Command not found: ${cmd}`,
        type: 'error',
        timestamp: new Date(),
      });
    }

    setCommandHistory(prev => [...prev, input]);
    setHistoryIndex(-1);
  };

  const navigateHistory = (dir: 'up' | 'down') => {
    if (dir === 'up' && historyIndex < commandHistory.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
    } else if (dir === 'down') {
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  };

  const registerCommand = (name: string, fn: CommandFn) => {
    setCommands((prev) => ({ ...prev, [name.toLowerCase()]: fn }));
  };

  useEffect(() => {
    // Inject semua command dari registry
    Object.entries(defaultCommands).forEach(([name, fn]) => {
      registerCommand(name, (args) =>
        fn(args, {
          addLine,
          clearHistory: () => setHistory([]),
          history,
          setCurrentDir,
          currentDir,
          virtualFilesystem
        })
      );
    });
  }, [currentDir, history]);

  return (
    <TerminalContext.Provider value={{
      history,
      currentInput,
      currentDir,
      setCurrentInput,
      executeCommand,
      navigateHistory,
      registerCommand,
      virtualFilesystem: virtualFilesystem.current
    }}>
      {children}
    </TerminalContext.Provider>
  );
};

export const useTerminalContext = () => {
  const context = useContext(TerminalContext);
  if(!context) throw new Error("useTerminalContext must be used within a TerminalProvider");
  return context;
}