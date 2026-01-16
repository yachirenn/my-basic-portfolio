"use client"

import { openWindow } from "@/components/container/WindowsContainer";
import { AppType } from "@/app/lib/app"

type DesktopIconsProps = {
  label?: string
  app?: AppType
  icon?: React.ReactNode
  openWindow?: (app: AppType) => void
}

export default function DesktopIcons() {
  return (
    <div className="p-6">
      <button
        onClick={() => {
          console.log("ICON CLICKED");
          openWindow("terminal");
        }}
        className="flex flex-col items-center gap-2 text-white/80 hover:text-white"
      >
        <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
          ⌘
        </div>
        <span className="text-sm">command</span>
      </button>
    </div>
  )
}