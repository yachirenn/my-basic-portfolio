"use client"
import DesktopGrid from "./DesktopGrid";
import WindowsContainer from "../container/WindowsContainer";
import DesktopIcons from "../desktop/DesktopIcon";

export default function Desktop() {
  return (
    <div className="w-screen h-screen relative bg-cover bg-center">
      <DesktopIcons />
      <WindowsContainer />
      <DesktopGrid />
    </div>
  );
}
