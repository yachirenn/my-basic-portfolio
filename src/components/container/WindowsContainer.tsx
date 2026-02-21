"use client";

import { useWindows } from "./WindowsContext";
import Windows from "@/components/desktop/Windows";

export default function WindowsContainer() {
  const { windows } = useWindows();

  return (
    <div className="fixed inset-0 z-1000 pointer-events-none">
      {windows.map((win) => (
        <div key={win.id} className="pointer-events-auto">
          <Windows window={win} />
        </div>
      ))}
    </div>
  );
}
