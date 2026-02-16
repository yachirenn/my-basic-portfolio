"use client"

import TerminalModal from "@/components/TerminalWindow/TerminalModal"
import { useState } from "react"

export default function DesktopLayout({ children }: { children: React.ReactNode }) {

  const [activeWindow,setActiveWindow] = useState<string | null>(null)

  const openWindow = (name:string) => {
    setActiveWindow(name)
  }

  return (
    <>
      {children}

      {activeWindow === "terminal" && (
        <TerminalModal 
          open={true} 
          onClose={() => setActiveWindow(null)}
          content="Welcome to terminal"
        />
      )}
    </>
  )
}
