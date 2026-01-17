"use client"

import Desktop from "@/components/desktop/Desktop"
import Taskbar from "@/components/layout/Taskbar"

export default function HomePage() {
  return (
    <main className="w-screen h-screen relative">
      <Desktop />
      <Taskbar />
    </main>
  )
}
