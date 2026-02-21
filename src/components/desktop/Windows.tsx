"use client";

import { motion } from "framer-motion";
import { useWindows } from "@/components/container/WindowsContext";

import TerminalModal from "@/components/TerminalWindow/TerminalModal";
import AboutContent from "@/components/common/FolderWindows/AboutModal";
import SkillModal from "@/components/common/FolderWindows/SkillModal";
import FolderModal from "@/components/common/FolderModals";

interface WindowProps {
  window: {
    id: string;
    type: string;
    zIndex: number;
  };
}

export default function Windows({ window }: WindowProps) {
  const { closeWindow } = useWindows();

  const renderContent = () => {
    switch (window.type) {
      case "terminal":
        return <TerminalModal windowId={window.id} />;
      case "about":
        return (
          <FolderModal title="About" open={true} onClose={() => closeWindow(window.id)}>
            <AboutContent />
          </FolderModal>
        );
      case "skills":
        return <SkillModal open={true} onClose={() => closeWindow(window.id)} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      key={window.id}
      className="absolute"
      style={{ zIndex: window.zIndex }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      {renderContent()}
    </motion.div>
  );
}
