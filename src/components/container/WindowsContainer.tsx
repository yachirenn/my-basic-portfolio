"use client"

import { useWindows } from "./WindowsContext";
import TerminalModal from "../TerminalWindow/TerminalModal";
import FolderModal from "@/components/common/FolderModals";
import AboutContent from "@/components/common/FolderWindows/AboutModal";
import SkillsContent from "@/components/common/FolderWindows/SkillModal";
import ProjectsContent from "@/components/common/FolderWindows/AboutModal";
import CertificatesContent from "@/components/common/FolderWindows/AboutModal";
import ContactContent from "@/components/common/FolderWindows/AboutModal";
import TerminalContent from "@/components/common/FolderWindows/AboutModal";
import { TerminalProvider } from "../TerminalWindow/TerminalContext";
import TerminalHeader from "../TerminalWindow/TerminalHeader";
import SkillModal from "@/components/common/FolderWindows/SkillModal";

export default function WindowsContainer() {
  const { activeWindow, closeWindow } = useWindows();

  return (
    <>
      {/* Terminal tetap pakai TerminalModal */}
      {activeWindow === "terminal" && (
        <TerminalProvider>
          <TerminalHeader onClose={closeWindow} />
          <TerminalModal
            open={true}
            onClose={closeWindow}
            content="Welcome to the terminal!"
          />
        </TerminalProvider>
      )}

      {/* Folder About */}
      {activeWindow === "about" && (
        <FolderModal open={activeWindow === "about"} onClose={closeWindow} title="About">
          <AboutContent />
        </FolderModal>
      )}
      {activeWindow === "skills" && (
        <SkillModal open={true} onClose={closeWindow} />
      )}
      {activeWindow === "projects" && (
        <FolderModal open={activeWindow === "projects"} onClose={closeWindow} title="Projects">
          <ProjectsContent />
        </FolderModal>
      )}
      {activeWindow === "certificates" && (
        <FolderModal open={activeWindow === "certificates"} onClose={closeWindow} title="Certificates">
          <CertificatesContent />
        </FolderModal>
      )}
      {activeWindow === "contact" && (
        <FolderModal open={activeWindow === "contact"} onClose={closeWindow} title="Contact">
          <ContactContent />
        </FolderModal>
      )}
    </>
  );
}