"use client";
import { useContext, KeyboardEvent } from "react";
import { TerminalContext } from "@/components/TerminalWindow/TerminalContext";

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
      case "clear":
        return ""; // clear tidak perlu output
      case "/about":
        return "text-yellow-400";
      case "/projects":
        return "text-purple-400";
      default:
        return "text-gray-200";
    }
  };

  return (
    <div className="font-mono text-sm text-gray-200 w-full h-full p-2 overflow-y-auto">
      {/* Output history */}
      {history.map((line) =>
        line.type === "clear" ? null : (
          <div key={line.id} className={getLineClass(line.type)}>
            {line.output}
          </div>
        )
      )}

      {/* Input bar */}
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