"use client"

import { useContext, KeyboardEvent } from "react"
import { TerminalContext } from "./TerminalContext"

export default function TerminalView() {
  const terminal = useContext(TerminalContext)
  if (!terminal) return null

  const {
    history,
    currentInput,
    setCurrentInput,
    executeCommand,
    navigateHistory
  } = terminal

  function handleKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      executeCommand(currentInput)
      setCurrentInput("")
    }
    if (e.key === "ArrowUp") navigateHistory("up")
    if (e.key === "ArrowDown") navigateHistory("down")
  }

  return (
    <div className="flex-1 p-4 font-mono text-sm text-white/90 overflow-y-auto">
      {terminal.history.map(line => (
        <div key={line.id} className="whitespace-pre-wrap">
          {line.type === "command" && (
            <span className="text-green-400">{line.output}</span>
          )}
          {line.type === "output" && (
            <span className="text-white/80">{line.output}</span>
          )}
          {line.type === "error" && (
            <span className="text-red-400">{line.output}</span>
          )}
          {line.type === "success" && (
            <span className="text-emerald-400">{line.output}</span>
          )}
          {line.type === "info" && (
            <span className="text-sky-400">{line.output}</span>
          )}
        </div>
      ))}
    </div>
  );
}
