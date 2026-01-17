"use client"

import { useContext, KeyboardEvent } from "react"
import { TerminalContext } from "./TerminalContent" // pastikan path sesuai
import { personalInfo } from "@/constants/personalInfo"

export default function TerminalView() {
  const terminal = useContext(TerminalContext)
  if (!terminal) return null

  const {
    history,
    currentInput,
    setCurrentInput,
    executeCommand,
    isTerminalFocused,
    setTerminalFocused,
    navigateHistory
  } = terminal

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(currentInput)
      setCurrentInput("")
    } else if (e.key === "ArrowUp") {
      navigateHistory("up")
    } else if (e.key === "ArrowDown") {
      navigateHistory("down")
    }
  }

  return (
    <div className="bg-black text-green-400 font-mono p-4 rounded-md h-full overflow-y-auto">
      {history.map(line => (
        <div key={line.id} className={`mb-1 text-${line.type}`}>
          {line.output}
        </div>
      ))}

      <div className="flex items-center mt-2">
        <span className="mr-2">{personalInfo.name.toLowerCase().replace(' ', '')}@portfolio:~$</span>
        <input
          type="text"
          value={currentInput}
          onChange={e => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-none outline-none text-green-300 w-full"
          autoFocus={isTerminalFocused}
          onFocus={() => setTerminalFocused(true)}
          onBlur={() => setTerminalFocused(false)}
        />
      </div>
    </div>
  )
}