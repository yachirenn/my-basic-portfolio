import DesktopIcon from "./DesktopIcon";
import { navigationItems } from "@/constants/navigation";

type DesktopGridProps ={
  children?: React.ReactNode;
}

export default function DesktopGrid({children} : DesktopGridProps) {
  return (
    <div className="desktop-grid">
      {navigationItems.map((item) => (
        <DesktopIcon
          key={item.id}
          label={item.label}
          app={item.app}
        />
      ))}
      {children}
    </div>
  );
}