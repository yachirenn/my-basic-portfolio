"use client"
import { useWindows } from "./WindowsContext";
import TerminalWindow from "../TerminalWindow/TerminalWindows";

export default function WindowsContainer() {
  const { windows, closeWindow } = useWindows();

  return (
    <>
      {windows.map(app =>
        app === "terminal" ? (
          <TerminalWindow key="terminal" onClose={() => closeWindow("terminal")} />
        ) : null
      )}
    </>
  );
}
