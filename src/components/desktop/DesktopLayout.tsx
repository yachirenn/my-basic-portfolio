// components/desktop/DesktopUI.tsx
"use client";

import { useState } from "react";
import TerminalModal from "@/components/TerminalWindow/TerminalModal";

export default function DesktopUI({ children }: { children: React.ReactNode }) {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <>
      {/* Icon di desktop */}
      <div >🖥️ Terminal Icon</div>

      {/* Terminal Modal */}
      <TerminalModal
        open={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Konten halaman */}
      {children}
    </>
  );
}