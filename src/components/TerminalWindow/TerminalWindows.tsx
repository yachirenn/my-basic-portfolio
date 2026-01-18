"use client"

import { useState } from "react"
import { TerminalProvider } from "@/components/TerminalWindow/TerminalContext"
import TerminalView from "@/components/TerminalWindow/TerminalView"
import TerminalHeader from "./TerminalHeader"

export default function TerminalWindows({onClose}: {onClose: () => void}) {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg shadow-lg w-[90%] max-w-3xl h-[80%] overflow-hidden border border-green-800">
        <TerminalProvider>
          <TerminalHeader onClose={onClose} />
          <TerminalView />
        </TerminalProvider>
      </div>
    </div>
  );
}