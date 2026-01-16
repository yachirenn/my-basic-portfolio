"use client";
console.log("WindowsContainer loaded");

import { useState } from "react";
import TerminalWindow from "@/components/TerminalWindow/TerminalWindows";
import { AppType } from "@/app/lib/app";

let openFn: (app: AppType) => void;

export function openWindow(app: AppType) {
  openFn?.(app);
}

export default function WindowsContainer() {
  const [windows, setWindows] = useState<AppType[]>([]);

  openFn = (app) => {
    console.log("openWindow called for", app);
    setWindows((prev) =>
      prev.includes(app) ? prev : [...prev, app]
    );
  };

  const closeWindow = (app: AppType) => {
    setWindows((prev) => prev.filter((w) => w !== app));
  };

  return (
    <div className="absolute inset-0">
      {windows.includes("terminal") && (
        <div className="absolute inset-0">
          <TerminalWindow onClose={() => closeWindow("terminal")} />
        </div>
      )}
    </div>
  );
}
