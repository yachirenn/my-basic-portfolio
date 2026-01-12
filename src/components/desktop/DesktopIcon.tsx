interface DesktopIconsProps {
  icon: string;
  label: string;
  onClick: () => void;
}

export default function DesktopIconsProps({ icon, label, onClick }: DesktopIconsProps) {
  return (
    <div className="desktop-icon" onClick={onClick}>
      <div className="desktop-icon-box">{icon}</div>
      <span className="desktop-icon-label">{label}</span>
    </div>
  );
}