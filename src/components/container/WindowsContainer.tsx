import { useWindows } from "./WindowsContext";
import TerminalModal from "../TerminalWindow/TerminalModal";

// import data dari constants
import aboutme from "@/constants/About";
import projects from "@/constants/Project";
import skillsData from "@/constants/skills";
import certificatesData from "@/constants/certificates";
import contactData from "@/constants/Contact";

export default function WindowsContainer() {
  const { activeWindow, closeWindow } = useWindows();

  const terminalMap: Record<string, string> = {
    about: aboutme.description,
    projects: projects.title,
    skills: skillsData.title,
    certificates: certificatesData.title,
    contact: contactData.title,
  };


  return (
    <>
      {activeWindow && (
        <TerminalModal
          open={true}
          onClose={closeWindow}
          content={terminalMap[activeWindow] || "No Content" }
        />
      )}
    </>
  );
}