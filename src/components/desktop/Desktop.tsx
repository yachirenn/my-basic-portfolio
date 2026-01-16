"use client"

import { useState } from "react";
import DesktopGrid from "./DesktopGrid";
import TerminalWindow from "../TerminalWindow/TerminalWindows";
import WindowsContainer from "../container/WindowsContainer";
import DesktopIcons from "../container/DesktopIcons";
import app from "next/app";

interface DesktopIconsProps {
  onOpen: (app: "terminal") => void;
};

export default function Desktop() {
  const [activeWindow, setActiveWindow] = useState<null | "terminal">(null);

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

