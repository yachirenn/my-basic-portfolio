"use client";

import TerminalHeader from "../TerminalWindow/TerminalHeader";
import TerminalContent from "../TerminalWindow/TerminalContent";
import { TerminalProvider } from "../TerminalWindow/TerminalContext";
import { Rnd } from "react-rnd";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function TerminalModal({ open, onClose }: Props) {
  const [mounted, setMounted] = useState(false);

  // simpan default size/posisi hanya sekali
  const [size, setSize] = useState({
    x: typeof window !== "undefined" ? window.innerWidth / 2 - 420 : 100,
    y: typeof window !== "undefined" ? window.innerHeight / 2 - 310 : 100,
    width: 800,
    height: 600,
  });

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {open && (
        <Rnd
          position={{ x: size.x, y: size.y }}
          size={{ width: size.width, height: size.height }}
          onDragStop={(e, d) => setSize(prev => ({ ...prev, x: d.x, y: d.y }))}
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
        >
          <motion.div
            key="terminal-window"
            className="flex flex-col w-full h-full bg-linear-to-br from-[#0b1020] to-[#050812] rounded-xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
          >
            <TerminalProvider>
              <TerminalHeader onClose={onClose} />
              <div className="flex-1 overflow-y-auto font-mono text-base text-gray-200 p-4">
                <TerminalContent />
              </div>
            </TerminalProvider>
          </motion.div>
        </Rnd>
      )}
    </AnimatePresence>
  );
}