"use client";

import { useWindows } from "../container/WindowsContext";
import { IconData } from "@/constants/icons";
import { useRouter } from "next/navigation";

interface DesktopIconsProps {
  icons: IconData[];
}

export const DesktopIcons: React.FC<DesktopIconsProps> = ({ icons }) => {
  const { openWindow } = useWindows();
  const router = useRouter();

  const handleClick = (icon: IconData) => {
    if (icon.route) {
      router.push(icon.route);
      return;
    }

    openWindow(icon.windowId);
  };

  return (
    <div className="absolute top-6 left-6 grid grid-flow-col grid-rows-6 gap-8 pointer-events-auto">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
          onClick={() => handleClick(icon)}
        >
          <span className="text-4xl">{icon.icon}</span>
          <span className="mt-2 text-sm text-white">{icon.label}</span>
        </div>
      ))}
    </div>
  );
};

export default DesktopIcons;