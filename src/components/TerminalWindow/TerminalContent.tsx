"use client"

import React, { createContext, useState, useCallback } from "react"
import { navigationItems } from "@/constants/navigation";
import { personalInfo } from "@/constants/personalInfo";

import { useContext, KeyboardEvent } from "react"

export default function TerminalView() {
  const terminal = useContext(TerminalContext)
  if (!terminal) return null
}

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

  const [currentInput, setCurrentInput] = useState('')
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
    setLineCounter(1);
  }, []);

  const executeCommand = useCallback((command: string) => {
    const trimmedCommand = command.trim().toLowerCase();

    // add command to command history
    setCommandHistory(prev => [...prev, command]);
    setHistoryIndex(-1);

    // add command to terminal history
    addLine({
      command: command,
      output: `${personalInfo.name.toLowerCase().replace(' ', '')}@portfolio:~$ ${command}`,
      type: 'command',
    },);

    // Eksekusi command
    switch (trimmedCommand) {
      case 'help':
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
        window.open(personalInfo.Github, '_blank');
        addLine({
          output: 'Opening GitHub profile in new tab...',
          type: 'success'
        });
        break;

      case 'linkedin':
        window.open(personalInfo.Linkedin, '_blank');
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

      case 'quote':
        const qoutes = [
          "Teknologi adalah upaya manusia untuk menulis ulang hukum alam—tetapi semakin dalam kita mengukir,\nsemakin jelas terlihat: kita hanya menorehkan tanda tanya di atas takdir yang sudah tertulis..",
          "Kematian bukanlah kegagalan manusia terhadap hukum alam,\nmelainkan tanda bahwa hidup adalah hadiah yang diberi batas—dan justru dalam batas itulah makna ditemukan.",
          "Manusia bukan hanya makhluk individu, tapi juga bagian dari masyarakat dan hukum alam.\nKebahagiaan pribadi tidak bisa mengabaikan tanggung jawab terhadap keturunan dan norma sosial.",
          'Kita membangun peradaban di atas keyakinan bahwa hukum alam bisa direvisi—hingga suatu hari,\nbanjir besar datang mengingatkan:\n"yang kita ubah hanyalah diri kita sendiri, bukan aturan semesta."',
          "Kita menyebutnya 'inovasi' ketika mencoba membekukan waktu, menghidupkan yang mati, atau menciptakan surga di bumi\npadahal itu hanyalah cara lain untuk berlari di tempat, sambil langit menertawakan drama kita.",
          "Kita adalah cara alam mengenali dirinya sendiri—dan ketika kita memberontak,\nitu hanyalah alam yang sedang menari dengan gerakan yang kita sebut 'kemajuan'.",
          'Kita tidak pernah benar-benar "menang" melawan hukum alam karena hukum alam bukanlah musuh yang bisa dikalahkan, melainkan fondasi eksistensi itu sendiri. '
        ];
        addLine({
          output: qoutes[Math.floor(Math.random() * qoutes.length)],
          type: 'output'
        });
        break;

      default:
        if(trimmedCommand.startsWith('echo')) {
          const message = trimmedCommand.slice(5);
          addLine({
            output: message,
            type: 'output'
          });
        } else {
          addLine({
            output: `Command not found ${trimmedCommand}\n\nDid You mean these?\n${
              navigationItems.map(item => ` • ${item.command}`).join('\n')
            }\n\nType "/help" for a complete list of available commands.`,
            type: 'error',
          });
        }
    }
  }, [addLine, clearHistory, history]);

  const navigateHistory = useCallback((dir: 'up' | 'down') => {
    if (commandHistory.length === 0) return;

    let next = historyIndex;

    if (dir === 'up') {
      next = historyIndex === -1
        ? commandHistory.length - 1
        : Math.max(0, historyIndex - 1);
    } else {
      next = historyIndex >= commandHistory.length - 1
        ? -1
        : historyIndex + 1;
    }

    setHistoryIndex(next);
    setCurrentInput(next === -1 ? '' : commandHistory[next]);
  }, [commandHistory, historyIndex]);

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
        navigateHistory
      }}
    >
      {children}
    </TerminalContext.Provider>
  );
};