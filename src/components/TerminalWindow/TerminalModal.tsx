"use client";

import { Rnd } from "react-rnd";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import TerminalHeader from "./TerminalHeader";
=======
import { useState, useEffect } from "react";
>>>>>>> 291c6b20b48eb38f5d73115375c139c9ff47071c
import { useWindows } from "@/components/container/WindowsContext";

interface Props {
  windowId: string;
}

export default function TerminalModal({ windowId }: Props) {
  const { closeWindow, focusWindow } = useWindows();
<<<<<<< HEAD
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
=======

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
>>>>>>> 291c6b20b48eb38f5d73115375c139c9ff47071c
  }, []);

  if (!mounted) return null;

  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> 291c6b20b48eb38f5d73115375c139c9ff47071c
  );
}