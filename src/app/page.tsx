"use client"

import WindowsContainer from "@/components/container/WindowsContainer"
import DesktopGrid from "@/components/desktop/DesktopGrid"
import DesktopIcon from "@/components/desktop/DesktopIcon"
import Taskbar from "@/components/layout/Taskbar"

export default function HomePage() {
  return (
    <main className="w-full h-full relative">
      <WindowsContainer />
      <DesktopGrid />
      <Taskbar />
    </main>
  )
}
