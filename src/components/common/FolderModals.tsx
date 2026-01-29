import TerminalHeader from "../TerminalWindow/TerminalHeader";
import { Rnd } from "react-rnd";
import { motion, AnimatePresence } from "motion/react";

export default function FolderModal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
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
                  x: window.innerWidth / 2 - 420,
                  y: window.innerHeight / 2 - 310,
                  width: 800,
                  height: 600,
                }}
                minWidth={600}
                minHeight={400}
                dragHandleClassName="terminal-drag-handle"

                enableResizing={{
                  top:true,
                  right:true,
                  bottom:true,
                  left:true,
                  topRight:true,
                  bottomRight:true,
                  bottomLeft:true,
                  topLeft:true
                }}
                resizeHandleWrapperClass="rnd-resize-wrapper"
                resizeHandleStyles={{
                  bottom: {
                    height: "8px",
                    cursor: "ns-resize",
                    bottom: "-4px",
                  },
                  top: {
                    height: "8px",
                    cursor: "ns-resize",
                    top: "-4px",
                  },
                }}
              >
                {open && (
                  <div className="flex flex-col w-full h-full bg-linear-to-br from-[#0b1020] to-[#050812] rounded-xl shadow-2xl overflow-hidden">
                    <TerminalHeader onClose={onClose} />
                      <div className="flex-1 overflow-y-auto font-mono text-base text-gray-200 leading-tight scroll-smooth">
                        {children}
                      </div>
                  </div>
                )}
              </Rnd>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}