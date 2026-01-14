"use client";

import TerminalContent from "./TerminalContent";

export default function TerminalWindow({ onClose }: { onClose: () => void }) {
  return (
    <div className="terminal-overlay">
      <div className="terminal-window">
        <div className="terminal-header">
          <span>Terminal</span>
          <button onClick={onClose}>X</button>
        </div>
        <TerminalContent />
      </div>
    </div>
  );
}
