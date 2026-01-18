import DesktopIcons from "@/components/container/DesktopIcons";
import { useWindows } from "../container/WindowsContext";

export default function DesktopIconsContainer() {
  const { openWindow } = useWindows();

  const icons = [
    { id: "terminal", label: "command.exe", icon: "⌘", onClick: () => openWindow("terminal") },
    { id: "mem", label: "mem.exe", icon: "🧠", onClick: () => openWindow("mem") },
    { id: "kotakpesan", label: "kotakpesan.exe", icon: "✉️", onClick: () => openWindow("kotakpesan") },
  ];

  return <DesktopIcons icons={icons} />;
}