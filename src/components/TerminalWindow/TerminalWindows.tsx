"use client"

import { TerminalProvider } from "@/components/TerminalWindow/TerminalContext";
import TerminalView from "@/components/TerminalWindow/TerminalView";

type TerminalWindowProps = {
  onClose: () => void;
};

export default function TerminalWindow({ onClose }: { onClose: () => void }) {
  return (
    <div className="terminal-window">

      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="terminal-control">
          <span className="dot red" onClick={onClose}></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <span>yachirenn@portfolio:~root#</span>
      </div>

      <TerminalProvider>
        <TerminalView />
      </TerminalProvider>
    </div>
  );
}
