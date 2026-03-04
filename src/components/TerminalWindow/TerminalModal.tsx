"use client";

import { Rnd } from "react-rnd";
import React, { useEffect, useState } from "react";
import TerminalHeader from "./TerminalHeader";
import TerminalContent from "./TerminalView";
import { TerminalProvider } from "./TerminalContext";
import { useWindows } from "@/components/container/WindowsContext";

interface Props {
  windowId: string;
  open: boolean;
  onClose: () => void;
  content: React.ReactNode;
}

export default function TerminalModal({ windowId }: Props) {
  const { closeWindow, focusWindow } = useWindows();
  const [mounted, setMounted] = useState(false);

  const [size, setSize] = useState({
    x: 0,
    y: 0,
    width: 800,
    height: 500,
  });

  useEffect(() => {
    setMounted(true);

    // center window once
    setSize({
      x: window.innerWidth / 2 - 400,
      y: window.innerHeight / 2 - 250,
      width: 800,
      height: 500,
    });
  }, []);

  if (!mounted || !open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={() => closeWindow(windowId)}
      />

      {/* Window */}
      <Rnd
        position={{ x: size.x, y: size.y }}
        size={{ width: size.width, height: size.height }}
        onMouseDown={() => focusWindow(windowId)}
        onDragStop={(e, d) =>
          setSize((prev) => ({ ...prev, x: d.x, y: d.y }))
        }
        onResizeStop={(e, dir, ref, delta, pos) =>
          setSize({
            width: ref.offsetWidth,
            height: ref.offsetHeight,
            x: pos.x,
            y: pos.y,
          })
        }
        minWidth={600}
        minHeight={400}
        bounds="window"
        dragHandleClassName="terminal-drag-handle"
        className="absolute z-50"
      >
        <div className="flex flex-col w-full h-full bg-linear-to-br from-[#0b1020] to-[#050812] rounded-xl shadow-2xl overflow-hidden border border-gray-700/30">
          <TerminalProvider>
            <TerminalHeader onClose={() => closeWindow(windowId)} />
            <div className="flex-1 overflow-y-auto p-4">
              <TerminalContent />
            </div>
          </TerminalProvider>
        </div>
      </Rnd>
    </>
  );
}