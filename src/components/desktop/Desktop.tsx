"use client"

import { useState } from "react";
import DesktopGrid from "./DesktopGrid";
import WindowsContainer from "../container/WindowsContainer";
import DesktopIcons from "../desktop/DesktopIcon";
import { AppType } from "@/app/lib/app";

export default function Desktop() {
  const [activeWindow, setActiveWindow] = useState<AppType | null>(null);

  return (
    <div className="w-screen h-screen relative bg-cover bg-center">
      <DesktopIcons onOpen={(app) => setActiveWindow(app)} />

      <WindowsContainer
        activeWindow={activeWindow}
        onClose={() => setActiveWindow(null)}
      />
    <DesktopGrid />
    </div>
  );
}

