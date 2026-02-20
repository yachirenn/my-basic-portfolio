"use client";
import { createContext, useContext, useState } from "react";

interface WindowsContextType {
  activeWindow: string | null;
  openWindow: (name: string) => void;
  closeWindow: () => void;
  windows: string[];
}

const WindowsContext = createContext<WindowsContextType | undefined>(undefined);

export const WindowsProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [windows, setWindows] = useState<string[]>([]);

  const openWindow = (name: string) => {
    console.log("Opening window:", name);
    setActiveWindow(name);

    setWindows((prev) => (prev.includes(name) ? prev : [...prev, name]));
  };

  const closeWindow = () => {
    setActiveWindow(null);
  };

  return (
    <WindowsContext.Provider value={{ activeWindow, openWindow, closeWindow, windows }}>
      {children}
    </WindowsContext.Provider>
  );
};

export const useWindows = () => {
  const ctx = useContext(WindowsContext);
  if (!ctx) throw new Error("useWindows must be used within WindowsProvider");
  return ctx;
};