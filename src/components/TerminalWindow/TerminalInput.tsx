"use client";

import { useContext, useRef, useEffect, KeyboardEvent } from "react";
import { TerminalContext } from "./TerminalContext";

export default function TerminalInput() {
  const terminal = useContext(TerminalContext);
  const inputRef = useRef<HTMLInputElement>(null);

  if (!terminal) return null;

  const {
    currentInput,
    setCurrentInput,
    executeCommand,
    navigateHistory,
    isTerminalFocused,
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
        yachirenn@portfolio:~$ 
      </span>

      <input
        type="text"
        value={currentInput}
        onChange={e => setCurrentInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="bg-transparent border-none outline-none text-green-300 w-full blinking-cursor"
        autoFocus={isTerminalFocused}
        onFocus={() => setTerminalFocused(true)}
        onBlur={() => setTerminalFocused(false)}
      />
    </div>
  );
}
