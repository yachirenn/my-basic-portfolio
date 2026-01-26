"use client";
import { useContext, KeyboardEvent } from "react";
import { TerminalContext } from "@/components/TerminalWindow/TerminalContext";
import { useState, useEffect } from "react";

const fulltext = `
Hello I'm Rendy Sulistyawan, commonly known as Rendy.
I am a student majoring in System Information, Network, and Application at SMKN 2 YOGYAKARTA
with a particular interest in Web Development.
I enjoy creating...!
`;

export default function TerminalContent() {
  const terminal = useContext(TerminalContext);
  if (!terminal) return null;

  const { history, currentInput, setCurrentInput, executeCommand, navigateHistory } = terminal;

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && currentInput.trim()) {
      executeCommand(currentInput);
      setCurrentInput("");
    } else if (e.key === "ArrowUp") {
      navigateHistory("up");
    } else if (e.key === "ArrowDown") {
      navigateHistory("down");
    }
  };

  // mapping warna berdasarkan type
  const getLineClass = (type: string) => {
    switch (type) {
      case "error":
        return "text-red-400";
      case "success":
        return "text-green-400";
      case "info":
        return "text-blue-400";
      default:
        return "text-gray-200";
    }
  };

  return (
    <div className="font-mono text-sm text-gray-200 w-full h-full">
      <div className="flex items-center">
        <span className="text-green-400">yachirenn@portfolio:~$&nbsp;</span>
        <input
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-gray-200 caret-green-400"
          autoFocus
        />
      </div>
    </div>
  );
}