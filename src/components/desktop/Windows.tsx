import TerminalModal from "@/components/TerminalWindow/TerminalModal";
import AboutContent from "@/components/common/FolderWindows/AboutModal";
import SkillModal from "@/components/common/FolderWindows/SkillModal";
import FolderModal from "@/components/common/FolderModals";

export const windowsConfig = {
  terminal: (close: () => void) => <TerminalModal open onClose={close} />,
  about: (close: () => void) => (
    <FolderModal open onClose={close} title="About">
      <AboutContent />
    </FolderModal>
  ),
  skills: (close: () => void) => <SkillModal open onClose={close} />,
};
