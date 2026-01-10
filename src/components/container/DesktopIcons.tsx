import React from 'react';
import folderIconSrc from '../../assets/icons/folder.png'
import fileIconSrc from '../../assets/icons/file.png'
import exeIconSrc from '../../assets/icons/exeIcon.png'
import mdIconSrc from '../../assets/icons/mdIcon.png'
import linkIconSrc from '../../assets/icons/linkIcon.png'
import FileExplorerIcons from '../../assets/icons/file-explorer.png'
import DesktopIconSrc from '../icon/Desktopicon'
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
    <div className="desktop-container">
      <DesktopIcon 
        className="desktop-icons-appear transition05" 
        name="The Journey" iconSrc={FileExplorerIcons} 
        onDoubleClick={() => openWindows("The Journey", 1, null, [1], true)} 
        delay={.1}
      />
      {FileSystem.map((item, index) => (
        <DesktopIcon
          key={item.id}
          className="desktop-icon-appear transition05"
          name={item.name}
          iconSrc={getIconSrc(item)}
          onDoubleClick={() => onFileClick(item.id)}
          delay={(index + 1) * 50 }
        />
      ))}
    </div>
  );
};

export default DesktopIcons;