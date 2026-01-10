import DesktopIcon from "./DesktopIcon";
import { navigationItems } from "@/constants/navigation";

export default function DesktopGrid() {
  return (
    <div className="desktop-grid">
      {navigationItems.map((item) => (
        <DesktopIcon
          key={item.id}
          icon={item.icon}
          label={item.label}
        />
      ))}
    </div>
  );
}