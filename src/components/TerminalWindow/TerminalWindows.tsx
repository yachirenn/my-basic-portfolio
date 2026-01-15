"use client"

import TerminalView from "./TerminalView"
import { TerminalProvider } from "@/components/TerminalWindow/TerminalContext"

export default function TerminalWindow({ onClose }: { onClose: () => void }) {
  return (
    <div className="terminal-overlay">
      <div className="terminal-window">
        <div className="terminal-header">
          <span>Terminal</span>
          <button onClick={onClose}>X</button>
        </div>

        <TerminalProvider>
          <TerminalView />
        </TerminalProvider>
      </div>
    </div>
  );
}
