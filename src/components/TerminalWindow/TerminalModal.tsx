"use client";

import TerminalHeader from "../TerminalWindow/TerminalHeader";
import TerminalContent from "../TerminalWindow/TerminalContent";
import { TerminalProvider } from "../TerminalWindow/TerminalContext";
import { Rnd } from "react-rnd";
import { useState, useEffect } from "react";
import { useWindows } from "@/components/container/WindowsContext";

interface Props {
  windowId: string;
}

export default function TerminalModal({ windowId }: Props) {
  const { closeWindow, focusWindow } = useWindows();

  const [mounted, setMounted] = useState(false);

  const [size, setSize] = useState({
    x: 100,
    y: 100,
    width: 800,
    height: 600,
  });

  useEffect(() => {
    setMounted(true);

    // center only once
    setSize({
      x: window.innerWidth / 2 - 400,
      y: window.innerHeight / 2 - 300,
      width: 800,
      height: 600,
    });
  }, []);

  if (!mounted) return null;

  return (
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
      className="absolute"
    >
      <div className="flex flex-col w-full h-full bg-linear-to-br from-[#0b1020] to-[#050812] rounded-xl shadow-2xl overflow-hidden">
        <TerminalProvider>
          <TerminalHeader onClose={() => closeWindow(windowId)} />
          <div className="flex-1 overflow-y-auto font-mono text-base text-gray-200 p-4">
            <TerminalContent />
          </div>
        </TerminalProvider>
      </div>
    </Rnd>
  );
}