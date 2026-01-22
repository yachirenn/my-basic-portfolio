"use client"

import { motion, AnimatePresence } from 'motion/react'
import TerminalHeader from './TerminalHeader';
import TerminalContent from './TerminalContent';
import { TerminalProvider } from '@/components/TerminalWindow/TerminalContext';
import { Rnd } from 'react-rnd';

interface TerminalModal {
  open: boolean;
  onClose: () => void;
  content: string;
}

export default function TerminalModal({ open, onClose }: TerminalModal) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div 
            className='fixed inset-0 bg-black/50 z-50'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={onClose}
          />


          {/* Terminal Window */}
          <motion.div 
            className='fixed z-50'
            initial={{ opacity: 0, scale: .83, y: -20}}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: .85, y: 20 }}
          >
            <Rnd
              default={{
                x: window.innerWidth / 2 - 890 / 2,
                y: window.innerHeight / 2 - 550 / 2,
                width: 800,
                height: 500,
              }}
              minWidth={600}
              minHeight={300}
              bounds="window"
              dragHandleClassName="terminal-drag-handle"
            >
              <div className="flex flex-col w-full h-full bg-terminal-bg rounded-xl shadow-2xl">
                <TerminalProvider>
                  <TerminalHeader onClose={onClose} />
                  <div className="flex-1 p-4 overflow-y-auto">
                    <TerminalContent />
                  </div>
                </TerminalProvider>
              </div>
            </Rnd>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}