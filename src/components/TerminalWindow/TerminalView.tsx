"use client";

import { useContext, useEffect, useRef } from "react";
import { TerminalContext } from "./TerminalContent";
import TerminalInput from "./TerminalInput";

export default function TerminalView() {
  const terminal = useContext(TerminalContext);
  console.log("TerminalView render", terminal);
  const bottomRef = useRef<HTMLDivElement>(null);

  if (!terminal) return null;

  const { history } = terminal;

  // auto scroll ke bawah
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="flex-1 p-4 font-mono text-sm text-white/90 overflow-y-auto">
      {history.map(line => (
        <div key={line.id} className="whitespace-pre-wrap mb-1">
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

      {/* INPUT BAR */}
      <TerminalInput />

      <div ref={bottomRef} />
    </div>
  );
}
