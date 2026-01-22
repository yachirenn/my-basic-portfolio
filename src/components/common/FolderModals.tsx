"use client";
import { motion, AnimatePresence } from "framer-motion";

interface FolderModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function FolderModal({ open, onClose, children }: FolderModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="w-175 max-w-[90vw] bg-linear-to-br from-[#0b1020] to-[#050812] rounded-xl shadow-2xl p-6 text-gray-200 font-mono text-sm whitespace-pre-line">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
