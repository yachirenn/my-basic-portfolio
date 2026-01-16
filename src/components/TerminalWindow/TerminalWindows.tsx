"use client"

import TerminalHeader from "./TerminalHeader";
import { TerminalContext } from "./TerminalContext";
import TerminalContent from "./TerminalContent";
import TerminalView from "./TerminalContent";

type TerminalWindowProps = {
  onClose: () => void;
};

export default function TerminalWindow({ onClose }: TerminalWindowProps) {
  return (
    <div className="absolute top-24 left-24 w-180 h-120 bg-gray-800 rounded-xl border border-white/15 shadow-2xl flex flex-col animate-fadeIn">
      <TerminalHeader onClose={onClose} />
      <TerminalContext.Provider value={undefined}>
        <TerminalView />
        <TerminalContent />
      </TerminalContext.Provider>
    </div>
  );
}
