// components/desktop/DesktopUI.tsx
"use client";

import { useState } from "react";
import TerminalModal from "@/components/TerminalWindow/TerminalModal";

export default function DesktopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {children}
    </div>
  );
}
