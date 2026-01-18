"use client"
import { createContext, useContext, useState } from "react";

type WindowsContextType = {
  activeWindow: string | null;
  openWindow: (id: string) => void;
  closeWindow: () => void;
};
const WindowsContext = createContext<WindowsContextType | undefined>(undefined);

export const WindowsProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const openWindow = (id: string) => setActiveWindow(id);
  const closeWindow = () => setActiveWindow(null);
  return (
    <WindowsContext.Provider value={{ activeWindow, openWindow, closeWindow }}>
      {children}
    </WindowsContext.Provider>
  );
}