"use client";

import { useWindows } from "../container/WindowsContext";
import { IconData } from "./DesktopIconType";
import { useRouter } from "next/navigation";

interface DesktopIconsProps {
  icons: IconData[];
}

export const DesktopIcons: React.FC<DesktopIconsProps> = ({ icons }) => {
  const { openWindow } = useWindows();
  const router = useRouter();

  const handleClick = (windowId: string) => {
    if (windowId === "certificates") {
      router.push("/certificates");
      return;
    } else if (windowId === "projects") {
      router.push("/projects");
      return;
    }
    openWindow(windowId);
  };

  return (
    <div className="grid grid-cols-4 gap-8 relative z-50 pointer-events-auto">
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