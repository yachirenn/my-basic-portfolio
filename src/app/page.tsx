"use client"

import DesktopIconsContainer from "@/components/container/DesktopIconContiner"
import WindowsContainer from "@/components/container/WindowsContainer"
import { WindowsProvider } from "@/components/container/WindowsContext";

export default function HomePage() {
  return (
    <WindowsProvider>
      <div className="relative w-full h-full">
        <DesktopIconsContainer />
        <WindowsContainer />
      </div>
    </WindowsProvider>
  );
}
