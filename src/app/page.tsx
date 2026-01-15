"use client"

import DesktopGrid from "@/components/desktop/DesktopGrid"
import DesktopIcon from "@/components/desktop/DesktopIcon"

export default function HomePage() {
  return (
    <DesktopGrid>
      <DesktopIcon app="terminal" label="command.exe" />
      <DesktopIcon app="mem" label="mem.exe" />
      <DesktopIcon app="about" label="about.exe" />
    </DesktopGrid>
  )
}
