"use client"

import { motion, AnimatePresence } from 'motion/react'
import TerminalHeader from './TerminalHeader';
import TerminalContent from './TerminalContent';
import { TerminalProvider } from '@/components/TerminalWindow/TerminalContext';
import { Rnd } from 'react-rnd';

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
            className='fixed z-50 top-1/2 left-1/2 w-130 h-80 bg-linear-to-br from-[#0b1020] to-[#050812] rounded-xl shadow-2xl overflow-hidden'
            initial={{ opacity: 0, scale: .83, y: -20}}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: .85, y: 20 }}
            onClick={onClose}
          >
            <Rnd
              default={{
                x: window.innerWidth / 2 - 520 / 2,
                y: window.innerHeight / 2 - 500 / 2,
                width: 800,
                height: 500,
              }}
              minWidth={600}
              minHeight={300}
              bounds="window"
              className="terminal-drag-handle"
            >
              <div className="w-full h-full bg-linear-to-br from-[#0b1020] to-[#050812]">
                <TerminalProvider>
                  <TerminalHeader onClose={onClose} />
                  <TerminalContent />
                </TerminalProvider>
              </div>
            </Rnd>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}