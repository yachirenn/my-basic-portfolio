"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { TerminalCommand } from "@/app/lib/TerminalCommand"

export default function TerminalContent() {
  const router = useRouter();

  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Portfolio OS@v.1.0 Demo",
    "Type '/help' to see avaliable commands.",
  ]);

  function handleCommand(commands: string) {
    const cmd = commands.trim().toLowerCase();

    // cleaning the terminal
    if (cmd === "clear" || cmd === "cls") {
      setHistory([]);
      return;
    }

    const found = TerminalCommand[cmd];

    if (!found) {
      setHistory((prev) => [...prev, `command not found: ${cmd}`]);
    return;
    }

    if (found.output) {
      setHistory((prev) => [...prev, found.output.trim()]);
    }

    if (found.route) {
      setTimeout(() => {
        router.push(found.route!);
      }, 300);
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!input.trim()) return;

    setHistory((prev) => [...prev, `>${input}`]);
    handleCommand(input);
    setInput("");
  }

  return (
    <div className="grid flex-row h-full p-4 font-mono text-sm text-green-400">
      {/* Output */}
      <div className="flex-1 space-y overflow-y-auto">
        {history.map((line, i) => (
          <pre key={i} className="whitespace-pre-wrap">
            {line}
          </pre>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={onSubmit} className="flex items-center gap-2">
        <span>&gt;</span>
        <input 
          autoFocus 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none text-green-400"
        />
      </form>
    </div>
  );
}