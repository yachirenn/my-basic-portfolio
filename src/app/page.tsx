"use client";

import { useState } from "react";
import DesktopIcon from "../components/desktop/DesktopIcon";
import TerminalWindow from "../components/TerminalWindow/TerminalWindows";

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <>
      <DesktopIcon
        label="credit.exe"
        onOpen={() => setTerminalOpen(true)}
      />

      {terminalOpen && (
        <TerminalWindow onClose={() => setTerminalOpen(false)} />
      )}
    </>
  );
}
