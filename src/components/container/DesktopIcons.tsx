"use client"
import { useWindows } from "../container/WindowsContext";

interface IconData {
  id: string;
  label: string;
  icon: string;
  onClick?: () => void;
}

interface DesktopIconsProps {
  icons: IconData[];
}

const DesktopIcons: React.FC<DesktopIconsProps> = ({ icons }) => {
  return (
    <div className="desktop-icons-container">
      {icons.map((icon) => (
        <div key={icon.id} className="desktop-icon" onClick={icon.onClick}>
          <span className="desktop-icon-image">{icon.icon}</span>
          <span className="desktop-icon-label">{icon.label}</span>
        </div>
      ))}
    </div>
  );
};

export default DesktopIcons;