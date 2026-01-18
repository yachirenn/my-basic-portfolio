"use client"

import { useWindows } from "./WindowsContext";
import TerminalWindows from "@/components/TerminalWindow/TerminalWindows";

export default function WindowsContainer() {
  const { activeWindow, closeWindow } = useWindows();

  return (
    <>
      {activeWindow === "terminal" && (
        <TerminalWindows onClose={closeWindow} />
      )}
      {/* Tambahkan modal lain sesuai kebutuhan */}
    </>
  );
}