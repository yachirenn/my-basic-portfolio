interface DesktopIconsProps {
  icon: string;
  label: string;
}

export default function DesktopIconsProps() {
  return (
    <div className="desktop-icon">
      <div className="desktop-icon-box">{icon}</div>
      <span className="desktop-icon-label">{label}</span>
    </div>
  );
}