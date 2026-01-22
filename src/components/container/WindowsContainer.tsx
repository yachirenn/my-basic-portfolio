"use client"

import { useState, useEffect } from "react";
import { useWindows } from "./WindowsContext";
import TerminalModal from "../TerminalWindow/TerminalModal";
import FolderModal from "@/components/common/FolderModals";
import { aboutText } from "@/components/common/FolderWindows/AboutModal";
import AboutContent from "@/components/common/FolderWindows/AboutModal";
import { TerminalProvider } from "../TerminalWindow/TerminalContext";
import TerminalHeader from "../TerminalWindow/TerminalHeader";

export default function WindowsContainer() {
  const { activeWindow, closeWindow } = useWindows();
  const [typedText, setTypedText] = useState("");
  const [doneTyping, setDoneTyping] = useState(false);

  // terminal mengetik otomatis
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + aboutText[index]);
      index++;
      if(index > aboutText.length) {
        clearInterval(interval);
        setDoneTyping(true);
      }
    }, 30); // => kecepatan ketikannya
    return () => clearInterval(interval);
  },[aboutText]);
  

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
        <FolderModal open={true} onClose={closeWindow}>
          <AboutContent />
        </FolderModal>
      )}
    </>
  );
}