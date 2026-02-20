export type TerminalLineType = 'command' | 'output' | 'error' | 'success' | 'info' | 'clear' | '/about' | '/projects';

export interface TerminalLine {
  id: string;
  command?: string;
  output: string;
  type: TerminalLineType;
  timestamp: number;
}