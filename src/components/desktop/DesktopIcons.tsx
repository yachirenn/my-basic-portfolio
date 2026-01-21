"use client";
import { useWindows } from "../container/WindowsContext";

interface IconData {
  id: string;
  label: string | React.ReactNode;
  icon: string;
  windowId: string;
}

interface DesktopIconsProps {
  icons: IconData[];
}

const DesktopIcons: React.FC<DesktopIconsProps> = ({ icons }) => {
  const { openWindow } = useWindows();

  return (
    <div className="grid grid-cols-4 gap-8">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
          onClick={() => openWindow(icon.windowId)}
        >
          <span className="text-4xl">{icon.icon}</span>
          <span className="mt-2 text-sm text-white">{icon.label}</span>
        </div>
      ))}
    </div>
  );
};

export default DesktopIcons;