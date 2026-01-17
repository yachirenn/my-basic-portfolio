"use client"
import { useWindows } from "../container/WindowsContext";

export default function DesktopIcons() {
  const { openWindow } = useWindows();

  return (
    <div className="p-6">
      <button
        onClick={() => openWindow("terminal")}
        className="flex flex-col items-center gap-2 text-white/80 hover:text-white"
      >
        <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
          ⌘
        </div>
        <span className="text-sm">command</span>
      </button>
    </div>
  );
}
