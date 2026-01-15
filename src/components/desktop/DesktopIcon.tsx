"use client"

import { openWindow } from "@/components/container/WindowsContainer"
import { AppType } from "@/app/lib/app"

type Props = {
  label: string
  app: AppType
  icon?: React.ReactNode
}

export default function DesktopIcon({ label, app, icon }: Props) {
  return (
    <div
      className="app-icon"
      onClick={() => openWindow(app)}
    >
      <div className="app-icon-image">
        {icon ?? "⌘"}
      </div>
      <div className="app-icon-label">{label}</div>
    </div>
  )
}
