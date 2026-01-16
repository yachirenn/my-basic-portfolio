import React from 'react';
import styles from '@/assets/css/Taskbar.module.css';

interface TaskbarButton {
  id: string;
  label: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

interface TaskbarProps {
  buttons?: TaskbarButton[];
  showClock?: boolean;
  showVolume?: boolean;
  showNetwork?: boolean;
}

export const Taskbar: React.FC<TaskbarProps> = ({
  buttons = [],
  showClock = true,
  showVolume = true,
  showNetwork = true,
}) => {
  const [time, setTime] = React.useState<string>(new Date().toLocaleTimeString());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.taskbar}>
      {/* Left Section - Start Button & Apps */}
      <div className={styles.leftSection}>
        <button className={styles.startButton}>Start</button>
        <div className={styles.appButtons}>
          {buttons.map((btn) => (
            <button
              key={btn.id}
              className={`${styles.appButton} ${btn.isActive ? styles.active : ''}`}
              onClick={btn.onClick}
              title={btn.label}
            >
              {btn.icon && <span className={styles.icon}>{btn.icon}</span>}
              <span className={styles.label}>{btn.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Section - System Tray */}
      <div className={styles.rightSection}>
        {showNetwork && <div className={styles.trayIcon}>📶</div>}
        {showVolume && <div className={styles.trayIcon}>🔊</div>}
      </div>
    </div>
  );
};

export default Taskbar;