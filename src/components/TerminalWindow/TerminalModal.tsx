"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Rnd } from "react-rnd"
import TerminalHeader from "./TerminalHeader"
import TerminalContent from "./TerminalContent"
import { TerminalProvider } from "@/components/TerminalWindow/TerminalContext"

interface TerminalModalProps {
  open: boolean
  onClose: () => void
}

export default function TerminalModal({ open, onClose }: TerminalModalProps) {

  const [defaultPos, setDefaultPos] = useState({
    x: 100,
    y: 100,
    width: 800,
    height: 500
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDefaultPos({
        x: window.innerWidth / 2 - 400,
        y: window.innerHeight / 2 - 250,
        width: 800,
        height: 500
      })
    }
  }, [])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Center Wrapper */}
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <Rnd
                default={defaultPos}
                minWidth={600}
                minHeight={400}
                bounds="window"
                dragHandleClassName="terminal-drag-handle"
              >
                <div className="flex flex-col h-full bg-terminal-bg rounded-xl shadow-2xl overflow-hidden">
                  <TerminalProvider>
                    <TerminalHeader onClose={onClose} />
                    <div className="flex-1 overflow-y-auto font-mono text-base text-gray-200 leading-tight p-4">
                      <TerminalContent />
                    </div>
                  </TerminalProvider>
                </div>
              </Rnd>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
