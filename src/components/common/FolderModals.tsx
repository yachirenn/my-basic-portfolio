import TerminalHeader from "../TerminalWindow/TerminalHeader";
import { Rnd } from "react-rnd";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
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
              className='fixed z-50 pointer-events-auto'
              initial={{ opacity: 0, scale: .83, y: -20}}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: .85, y: 20 }}
            >
              <Rnd
              style={{overflow: "hidden"}}
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
                  top: {cursor: "ns-resize"},
                  right: {cursor: "ew-resize"},
                  bottom: {cursor: "ns-resize"},
                  left: {cursor: "ew-resize"},
                  topRight: {cursor: "nesw-resize"},
                  topLeft: {cursor: "nwse-resize"},
                  bottomLeft: {cursor: "nesw-resize"},
                  bottomRight: {cursor: "nwse-resize"},
                }}
              >
                {open && (
                  <div className="flex flex-col w-full h-full bg-linear-to-br from-[#0b1020] to-[#050812] rounded-xl shadow-2xl overflow-hidden">
                    <TerminalHeader onClose={onClose} />
                      <div className="flex-1 overflow-y-auto overscroll-contain font-mono text-base text-gray-200 leading-tight scroll-smooth">
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