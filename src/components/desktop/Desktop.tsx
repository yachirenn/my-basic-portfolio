"use client"
import DesktopGrid from "./DesktopGrid";
import WindowsContainer from "../container/WindowsContainer";
import DesktopIcons from "@/components/desktop/DesktopIcons";
import Taskbar from "../layout/Taskbar";

export default function Desktop() {
  return (
    <div className="w-screen h-screen relative bg-cover bg-center">
      <DesktopIcons icons={[]} />
      <WindowsContainer />
      <DesktopGrid />
      <Taskbar />
    </div>
  );
}
