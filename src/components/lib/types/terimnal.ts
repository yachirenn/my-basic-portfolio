export type TerminalLineType = 'command' | 'output' | 'error' | 'success' | 'info';

export interface TerminalLine {
  id: string;
  command?: string;
  output: string | React.ReactNode;
  type: TerminalLineType;
  timestamp: Date;
}