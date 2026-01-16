import React from 'react';
import folderIconSrc from '../../assets/icons/folder.png'
import fileIconSrc from '../../assets/icons/file.png'
import exeIconSrc from '../../assets/icons/exeIcon.png'
import mdIconSrc from '../../assets/icons/mdIcon.png'
import linkIconSrc from '../../assets/icons/linkIcon.png'
import FileExplorerIcons from '../../assets/icons/file-explorer.png'
import '../../assets/css/animation.css'
import './DesktopIcons.css';

interface DesktopIcon {
  id: string;
  label: string;
  icon: string;
  onClick?: () => void;
}

interface DesktopIconsProps {
  icons: DesktopIcon[];
}

const DesktopIcons: React.FC<DesktopIconsProps> = ({ icons }) => {
  return (
    <div className="desktop-icons-container">
      {icons.map((icon) => (
        <div key={icon.id} className="desktop-icon" onClick={icon.onClick}>
          <img src={icon.icon} alt={icon.label} className="desktop-icon-image" />
          <span className="desktop-icon-label">{icon.label}</span>
        </div>
      ))}
    </div>
  );
};

export default DesktopIcons;