import React from "react";
import { useWindows } from "../container/WindowsContext";
import { windowsMeta } from "@/constants/navigation";

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
  const [time, setTime] = React.useState<string>(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );
  const windowsContext = useWindows();
  const { windows, focusWindow } = useWindows();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 bg-white/55 flex items-center justify-between px-4 text-white z-50">
      {/* Left Section - Start Button & Apps */}
      <div className="flex items-center gap-2">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded">Start</button>
        <div className="flex items-center gap-1">
          {buttons.map((btn) => (
            <button
              key={btn.id}
              className={`px-3 py-1 rounded ${btn.isActive ? "bg-blue-600" : "bg-gray-600 hover:bg-gray-500"}`}
              onClick={btn.onClick}
              title={btn.label}
            >
              {btn.icon && <span className="mr-1">{btn.icon}</span>}
              <span>{btn.label}</span>
            </button>
          ))}

          {/* Active Window */}
          {windows.map((win) => (
            <button
              key={win.id}
              className="px-3 py-1 rounded bg-gray-600 hover:bg-gray-500"
              onClick={() => focusWindow(win.id)}
              title={win.type}
            >
              <span className="text-sm capitalize">{win.type}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Section - System Tray */}
      <div className="flex items-center space-x-2">
        {showNetwork && <div className="text-white">📶</div>}
        {showVolume && <div className="text-white">🔊</div>}
      </div>
    </div>
  );
};

export default Taskbar;