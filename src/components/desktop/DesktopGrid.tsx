import DesktopIcon from "./DesktopIcon";
import { navigationItems } from "@/constants/navigation";

interface DesktopGridProps {
  onOpenTerminal: () => void;
}

export default function DesktopGrid({onOpenTerminal} : DesktopGridProps) {
  return (
    <div className="desktop-grid">
      {navigationItems.map((item) => (
        <DesktopIcon
          key={item.id}
          icon={item.icon}
          label={item.label}
          onClick={onOpenTerminal}
        />
      ))}
    </div>
  );
}