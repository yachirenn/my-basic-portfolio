export type TerminalLineType = 'input' | 'output' | 'error' | 'success' | 'info' | 'clear' | 'help';

export interface TerminalLine {
  id: string;
  command?: string;
  output: string;
  type: TerminalLineType;
  timestamp: number;
}