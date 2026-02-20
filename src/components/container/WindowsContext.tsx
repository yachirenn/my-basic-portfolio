"use client";

import { createContext, useContext, useState } from "react";

export interface WindowInstance {
  id: string;
  type: string;
  zIndex: number;
}

interface WindowsContextType {
  windows: WindowInstance[];
  openWindow: (type: string) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
}

const WindowsContext = createContext<WindowsContextType | null>(null);

export function WindowsProvider({ children }: { children: React.ReactNode }) {
  const [windows, setWindows] = useState<WindowInstance[]>([]);
  const [topZ, setTopZ] = useState(100);

  const openWindow = (type: string) => {
    const id = `${type}-${Date.now()}`;
    const newZ = topZ + 1;

    setWindows((prev) => [...prev, { id, type, zIndex: newZ }]);
    setTopZ(newZ);
  };

  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const focusWindow = (id: string) => {
    const newZ = topZ + 1;

    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, zIndex: newZ } : w
      )
    );

    setTopZ(newZ);
  };

  return (
    <WindowsContext.Provider
      value={{ windows, openWindow, closeWindow, focusWindow }}
    >
      {children}
    </WindowsContext.Provider>
  );
}

export function useWindows() {
  const context = useContext(WindowsContext);
  if (!context) {
    throw new Error("useWindows must be used within WindowsProvider");
  }
  return context;
}