"use client";

import { useState } from "react";
import DesktopGrid from "./DesktopGrid";
import TerminalModal from "../terminal/TerminalModal";

export default function DesktopLayout() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <>
      <DesktopGrid
        onIconClick={(action) => {
          if (action === "terminal") {
            setIsTerminalOpen(true);
          }
        }}
      />

      <TerminalModal
        open={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </>
  );
}
