"use client"

import { useWindows } from "./WindowsContext"
import TerminalModal from "../TerminalWindow/TerminalModal"
import FolderModal from "@/components/common/FolderModals"
import AboutContent from "@/components/common/FolderWindows/AboutModal"
import SkillModal from "@/components/common/FolderWindows/SkillModal"
import { TerminalProvider } from "../TerminalWindow/TerminalContext"

export default function WindowsContainer() {

  const { activeWindow, closeWindow } = useWindows()

  const windowsMap : Record<string, React.ReactNode> = {
    terminal: (
      <TerminalProvider>
        <TerminalModal open onClose={closeWindow} />
      </TerminalProvider>
    ),
    about: (
      <FolderModal open onClose={closeWindow} title="About">
        <AboutContent />
      </FolderModal>
    ),
    skills: <SkillModal open onClose={closeWindow} />
  }


  return (
    <div className="absolute inset-0 pointer-events-none">
      {activeWindow && windowsMap[activeWindow]}
    </div>
  )
}
