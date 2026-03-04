"use client";

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
        return <TerminalModal windowId={window.id} open={false} onClose={function (): void {
          throw new Error("Function not implemented.");
        } } content={undefined} />;
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
  <div
    key={window.id}
    className="absolute"
    style={{ zIndex: window.zIndex }}
  >
    {renderContent()}
  </div>
  );
}
