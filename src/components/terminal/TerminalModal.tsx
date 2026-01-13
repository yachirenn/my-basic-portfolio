"use client"

import { motion, AnimatePresence } from 'motion/react'

interface TerminalModal {
  open: boolean;
  onClose: () => void;
}

export default function TerminalModal({ open, onClose }: TerminalModal) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div 
            className='fixed inset-0 bg-black/50 z-40'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={onClose}
          />


          {/* Terminal Window */}
          <motion.div 
            className='fixed z-50 top-1/2 left-1/2 w-130 h-80 bg-linear-to-br from-[#0b1020] to-[#050812] rounded-xl shadow-2xl'
            initial={{
              opacity: 0,
              scale: .83,
              y: -20
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y:0
            }}
            exit={{
              opacity: 0,
              scale: .85,
              y: 20
            }}
            onClick={onClose}
          />
        </>
      )}
    </AnimatePresence>
  );
}