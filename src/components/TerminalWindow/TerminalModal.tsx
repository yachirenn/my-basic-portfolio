"use client";

import { Rnd } from "react-rnd";
import { useEffect, useState } from "react";
import TerminalHeader from "./TerminalHeader";
import { useWindows } from "@/components/container/WindowsContext";

interface Props {
  windowId: string;
}

export default function TerminalModal({ windowId }: Props) {
  const { closeWindow, focusWindow } = useWindows();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={() => closeWindow(windowId)}
      />

      {/* Window */}
      <Rnd
        default={{
          x: window.innerWidth / 2 - 400,
          y: window.innerHeight / 2 - 300,
          width: 800,
          height: 500,
        }}
        minWidth={500}
        minHeight={300}
        bounds="window"
        dragHandleClassName="terminal-drag-handle"
        onMouseDown={() => focusWindow(windowId)}
        className="absolute z-50"
      >
        <div className="flex flex-col w-full h-full bg-[#0b1020] rounded-xl shadow-2xl overflow-hidden border border-gray-700">
          <TerminalHeader onClose={() => closeWindow(windowId)} />

          {/* Dummy body dulu */}
          <div className="flex-1 p-4 text-gray-300 font-mono text-sm">
            Terminal is ready...
          </div>
        </div>
      </Rnd>
    </>
  );
}