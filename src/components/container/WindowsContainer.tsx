"use client"

import { useState } from "react"
import TerminalWindow from "@/components/TerminalWindow/TerminalWindows"
import { AppType } from "@/app/lib/app"
import DesktopIcon from "../desktop/DesktopIcon"

type Props = {
  activeWindow?: AppType | null
}

type WindowItem = {
  app: AppType
  onClose: () => void
}

let openFn: (app: AppType) => void

export function openWindow(app: AppType) {
  openFn?.(app)
}

export default function WindowsContainer({ activeWindow }: Props) {
  const [windows, setWindows] = useState<AppType[]>([])
  

  openFn = (app) => {
    setWindows((prev) =>
      prev.includes(app) ? prev : [...prev, app]
    )
  }

  const closeWindow = (app: AppType) => {
    setWindows((prev) => prev.filter((w) => w !== app))
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      {windows.includes("terminal") && (
        <div className="pointer-events-auto">
          <TerminalWindow onClose={() => closeWindow("terminal")} />
        </div>
      )}
    </div>
  );
}
