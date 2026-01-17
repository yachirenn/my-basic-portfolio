"use client";
import { useWindows } from "./WindowsContext";
import TerminalWindow from "../TerminalWindow/TerminalWindows";

export default function WindowsContainer() {
  const { windows, closeWindow } = useWindows();

  return (
    <>
      {windows.map((app) => {
        if (app === "terminal") {
          return (
            <TerminalWindow
              key="terminal"
              onClose={() => closeWindow("terminal")}
            />
          );
        }
        return null;
      })}
    </>
  );
}
