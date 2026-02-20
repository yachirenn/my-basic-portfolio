"use client"

import { useWindows } from "./WindowsContext"
import TerminalModal from "../TerminalWindow/TerminalModal"
import FolderModal from "@/components/common/FolderModals"
import AboutContent from "@/components/common/FolderWindows/AboutModal"
import SkillModal from "@/components/common/FolderWindows/SkillModal"
import { TerminalProvider } from "../TerminalWindow/TerminalContext"

export default function WindowsContainer() {

  const { activeWindow, closeWindow } = useWindows()

  return (
    <div className="absolute inset-0 pointer-events-none">

      {/* TERMINAL */}
      {activeWindow === "terminal" && (
        <TerminalProvider>
          <TerminalModal
            open
            onClose={closeWindow}
          />
        </TerminalProvider>
      )}

      {/* ABOUT */}
      {activeWindow === "about" && (
        <FolderModal open onClose={closeWindow} title="About">
          <AboutContent />
        </FolderModal>
      )}

      {/* SKILLS */}
      {activeWindow === "skills" && (
        <SkillModal open onClose={closeWindow} />
      )}

    </div>
  )
}
