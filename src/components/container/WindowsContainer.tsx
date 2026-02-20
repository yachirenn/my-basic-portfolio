"use client";

import { useWindows } from "./WindowsContext";
import Windows from "@/components/desktop/Windows";

export default function WindowsContainer() {
  const { windows } = useWindows();

  return (
    <>
      {windows.map((win) => (
        <Windows key={win.id} window={win} />
      ))}
    </>
  );
}
