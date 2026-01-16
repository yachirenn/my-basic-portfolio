"use client";

import { useContext, useRef, useEffect, KeyboardEvent } from "react";
import { TerminalContext } from "./TerminalContent";

export default function TerminalInput() {
  const terminal = useContext(TerminalContext);
  const inputRef = useRef<HTMLInputElement>(null);

  if (!terminal) return null;

  const {
    currentInput,
    setCurrentInput,
    executeCommand,
    navigateHistory,
    setTerminalFocused,
  } = terminal;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!currentInput.trim()) return;

      executeCommand(currentInput);
      setCurrentInput("");
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      navigateHistory("up");
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      navigateHistory("down");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-green-400">
        mugniadji@portfolio
      </span>
      <span className="text-sky-400">:~$</span>

      <input
        ref={inputRef}
        value={currentInput}
        autoFocus
        onChange={(e) => setCurrentInput(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setTerminalFocused(true)}
        onBlur={() => setTerminalFocused(false)}
        className="
          flex-1 bg-red-500 text-white/90 font-mono text-sm
        "
      />
    </div>
  );
}
