import React, { useState, useEffect, use } from 'react';
import FileExplorer from '../windows/FileExplorer'
import  '../../assets/css/animation.css'; // Importing animation styles

const WindowsContainer = ({ windows, closeWindows, fileSystem, findItemById, onExeClick }: any) => {
  const [closingWindows, setClosingWindows] = useState(windows || []);

  const handleClose = (id: string) => {
    setClosingWindows([...closingWindows, id]);
    setTimeout(() => closeWindows(id), 300);      // Delay closing the window to allow animation to complete
  };

  useEffect(() => {
    // remove closed windows from the list after they are closed
    if (windows.length < closingWindows.length) {
      setClosingWindows(closingWindows.filter((id: string) => !windows.find((win: any) => win.id === id)));
    }
  }, [windows, closingWindows]);

  return (
    <>
      {windows.map((window: any) => (
        <div
          key={window.id}
          className={`window-container ${closingWindows.includes(window.id) ? 'fade-out' : 'fade-in'}`}
        >
          <div className="window-content">
            <FileExplorer
              isExeWindow={window.type === 'exe'}
              onExeClick={onExeClick}
              {...window}
              fileSystem={fileSystem}
              findItemById={findItemById}
              closeWindow={() => handleClose(window.id)}
            />
          </div>
        </div>
      ))}
    </>
  );
};