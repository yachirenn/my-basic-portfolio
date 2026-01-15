import React, { createContext, useState, useCallback } from "react"
import { navigationItems } from "@/constants/navigation";
import { personalInfo } from "@/constants/personalInfo"
import { useRouter } from "next/navigation"
import { TerminalCommand } from "@/app/lib/TerminalCommand"
import { callbackify } from "util";
import { Command } from "lucide-react";

interface TerminalLine {
  id: string;
  command?: string;
  output: string;
  type: 'command' | 'output' | 'error' | 'success' | 'info';
  timestamp: Date;
}

interface TerminalCommandType {
  history: TerminalLine[];
  currentInput: string;
  setCurrentinput: (input: string) => void;
  executeCommand: (command: string) => void;
  clearHistory: () => void;
  isTerminalFocused: boolean;
  setTerminalFocus: (focused: boolean) => void;
  navigateHistory: (direction: 'up' | 'down') => void;
}

export const TerminalContent = createContext<TerminalContentType | undefined>(undefined);

export const TerminalProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: '1',
      output: `Welcome to Terminal yachiren@v1.0.0`,
      type: 'success',
      timestamp: new Date()
    },
    {
      id: '2',
      output: `System initialized was succesfully. Type 'help' to see available command.`,
      type: 'info',
      timestamp: new Date()
    },
    {
      id: '3',
      output: `_ _ _`,
      type: 'output',
      timestamp: new Date()
    },
  ]);

  const [currentInput, setCurrentinput] = useState('');
  const [isTerminalFocused, setTerminalFocused] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [lineCounter, setLineCounter] = useState(4); 

  const addLine = useCallback((line: Omit<TerminalLine, 'id' | 'timestamp'>) => {
    const newLine: TerminalLine = {
      ...line,
      id: `line-${lineCounter}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date()
    };
    setLineCounter(prev => prev + 1);
    setHistory(prev => [...prev, newLine]);
  },[lineCounter]);

  const clearHistory = useCallback(() => {
    setHistory([]);
  },[]);

  const executeCommand = useCallback((command: string) => {
    const trimmedCommand = command.trim().toLowerCase();

    // add command to command history
    setCommandHistory(prev => [...prev, command]);
    setHistoryIndex(-1);

    // add command to terminal history
    addLine({
      command: command,
      output: ${personalInfo.name.toLowerCase().replace(' ', '')}@portfolio:~$ ${command},
      type: command,
    });

    // Eksekusi command
    switch (trimmedCommand) {
      case 'help':
        addLine({
          output: 'Available commands:\n\n' +
            'Navigation:\n' +
            navigationItems.map(item => 
              `  ${item.command.padEnd(18)} - ${item.description}`
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
            '  joke                   - Get a programming joke\n' +
            '  quote                  - Get an inspirational quote',
          type: 'output'
        });
        break;
      
      case 'clear':
        clearHistory();
        break;

      case 'history': {
        const commands = history.filter(line => line.command).slice(-10);
        addLine({
          output: commands.length > 0
            ? `Recent command:\n${commands.map((line, index) => ` ${index + 1}. ${line.command}`).join('\n')}`
            : 'No command history available.',
          type: 'output'
        });
        break;
      }

      case 'date':
        addLine({
          output: new Date().toLocaleString(),
          type: 'output'
        });
        break;

      case 'whoami':
        window.location.href = '/';
        addLine({
          output: 'Navigating to home page...',
          type: 'success'
        });
        break;

      case 'cat about.md':
        window.location.href = '/about';
        addLine({
          output: 'Loading about page...',
          type: 'success'
        });
        break;

      case 'ls projects/':
        window.location.href = '/projects';
        addLine({
          output: 'Listing projects...',
          type: 'success'
        });
        break;

      case 'which skills':
        window.location.href = '/skills';
        addLine({
          output: 'Displaying skills matrix...',
          type: 'success'
        });
        break;

      case 'find certificates/':
        window.location.href = '/certificates';
        addLine({
          output: 'Fetching certificates...',
          type: 'success'
        });
        break;

      case 'curl contact.json':
        window.location.href = '/contact';
        addLine({
          output: 'Fetching contact information...',
          type: 'success'
        });
        break;

      case 'github':
        window.open(personalInfo.github, '_blank');
        addLine({
          output: 'Opening GitHub profile in new tab...',
          type: 'success'
        });
        break;

      case 'linkedin':
        window.open(personalInfo.linkedin, '_blank');
        addLine({
          output: 'Opening LinkedIn profile in new tab...',
          type: 'success'
        });
        break;

      case 'email':
        window.location.href = `mailto:${personalInfo.email}`;
        addLine({
          output: 'Opening email client...',
          type: 'success'
        });
        break;

      case 'ascii':
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
          type: 'output'
        });
        break;
    }
  })
}