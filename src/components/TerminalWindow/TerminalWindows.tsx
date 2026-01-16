"use client"

import TerminalHeader from "./TerminalHeader";
import { TerminalProvider } from "./TerminalContext";
import TerminalView from "./TerminalContent";

type TerminalWindowProps = {
  onClose: () => void;
};

export default function TerminalWindow({ onClose }: TerminalWindowProps) {
  return (
    <div className="absolute top-24 left-24 z-50">
      <div className="w-180 h-105 bg-[#0b0e1a] rounded-xl border border-white/8 flex flex-col" tabIndex={-1}>
        <TerminalHeader onClose={onClose} />
        <TerminalProvider>
          <TerminalView />
        </TerminalProvider>
      </div>
    </div>
  );
}
