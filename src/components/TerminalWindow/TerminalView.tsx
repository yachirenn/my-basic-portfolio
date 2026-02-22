"use client"

import { useContext, KeyboardEvent, useEffect, useRef } from "react"
import { TerminalContext } from "@/components/TerminalWindow/TerminalContext"
import { personalInfo } from "@/constants/personalInfo"
import { TerminalLineType } from "@/components/lib/types/terminal"

export default function TerminalView() {
  const terminal = useContext(TerminalContext)
  const bottomRef = useRef<HTMLDivElement | null>(null)

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
    if (e.key === "Enter" && currentInput.trim()) {
      executeCommand(currentInput)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      navigateHistory("up")
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      navigateHistory("down")
    }
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [history])

  const getLineClass = (type: TerminalLineType) => {
    switch (type) {
      case "input":
        return "text-green-400"
      case "error":
        return "text-red-400"
      case "success":
        return "text-green-300"
      case "info":
        return "text-blue-400"
      default:
        return "text-gray-200"
    }
  }

  const prompt = `${personalInfo.name.toLowerCase().replace(' ', '')}@portfolio:~$`

  return (
    <div className="w-full h-full overflow-y-auto font-mono text-sm text-gray-200" onClick={() => setTerminalFocused(true)}>
      {/* Output history */}
      {history.map((line) => (
        <div key={line.id} className={`whitespace-pre-wrap ${getLineClass(line.type)}`}>
          {line.type === "input" ? (
            <span>
              <span className="text-green-400">yachirenn@portfolio:~$ </span>
              {line.output}
            </span>
          ) : (
            line.output
          )}
        </div>
      ))}

      {/* Input bar */}
      <form className="flex items-center" onSubmit={(e) => { e.preventDefault(); executeCommand(currentInput) }}>
        <span className="text-green-400">yachirenn@portfolio:~$&nbsp;</span>
        <input
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-gray-200 caret-green-400"
          autoFocus
          spellCheck={false}
          autoComplete="off"
        />
      </form>

      {/* <div ref={bottomRef} /> */}
    </div>
  )
}
