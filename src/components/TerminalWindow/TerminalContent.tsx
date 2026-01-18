import { useContext, KeyboardEvent } from "react";
import { TerminalContext } from "@/components/TerminalWindow/TerminalContext";
import { TerminalLine } from "@/components/lib/types/terimnal";
import { defaultCommands } from "@/constants/commands";

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

  return (
    <div className="p-4 font-mono text-sm">
      {history.map(line => (
        <div key={line.id} className={`mb-1 text-${line.type}`}>
          {line.output}
        </div>
      ))}
      <div className="flex items-center">
        <span className="text-green-400">user@portfolio:~$&nbsp;</span>
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