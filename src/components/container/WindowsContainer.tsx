"use client"

import { useState, useEffect } from "react";
import { useWindows } from "./WindowsContext";
import TerminalModal from "../TerminalWindow/TerminalModal";
import FolderModal from "@/components/common/FolderModals";
import { bioCode } from "@/constants/About";
import AboutContent from "@/components/common/FolderWindows/AboutModal";
import { TerminalProvider } from "../TerminalWindow/TerminalContext";
import TerminalHeader from "../TerminalWindow/TerminalHeader";

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
    </>
  );
}