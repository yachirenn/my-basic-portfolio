"use client";
import { useWindows } from "../container/WindowsContext";
import { IconData } from "./DesktopIconType";

interface DesktopIconsProps {
  icons: IconData[];
}

export const DesktopIcons: React.FC<DesktopIconsProps> = ({ icons }) => {
  const { openWindow } = useWindows();

  const handleClick = (windowId: string) => {
    if(windowId === "certificates") {
      window.location.href = "/certificate";
      return;
    } else if (windowId === "projects") {
      window.location.href = "/projects";
      return;
    }

    openWindow(windowId);
  }

  return (
    <div className="grid grid-cols-4 gap-8">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
          onClick={() => handleClick(icon.windowId)}
        >
          <span className="text-4xl">{icon.icon}</span>
          <span className="mt-2 text-sm text-white">{icon.label}</span>
        </div>
      ))}
    </div>
  );
};

export default DesktopIcons;