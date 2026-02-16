"use client";

import { useEffect } from "react";

export default function DesktopLayout({ children, openWindow }: { children: React.ReactNode, openWindow: (window: string) => void }) {

  useEffect(() => {

  const handler = () => {
    openWindow("terminal") // atau fungsi kamu
  }

  window.addEventListener("open-terminal", handler)

  return () => window.removeEventListener("open-terminal", handler)

}, [])

  return (
    <div
      className="relative w-full h-screen bg-center overflow-hidden"
    >
      {children}
    </div>
  );
}