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
    <div className="terminal-content">
      {history.map(line => (
        <pre key={line.id} className={`line ${line.type}`}>
          {line.output}
        </pre>
      ))}

      <div className="terminal-input">
        <span>$</span>
        <input
          value={currentInput}
          onChange={e => setCurrentInput(e.target.value)}
          onKeyDown={handleKey}
          autoFocus
        />
      </div>
    </div>
  )
}
