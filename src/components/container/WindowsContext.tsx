"use client";
import { createContext, useContext, useState } from "react";
import { AppType } from "@/app/lib/app";

type WindowContextType = {
  windows: AppType[];
  openWindow: (app: AppType) => void;
  closeWindow: (app: AppType) => void;
};

const WindowContext = createContext<WindowContextType | null>(null);

export function WindowProvider({ children }: { children: React.ReactNode }) {
  const [windows, setWindows] = useState<AppType[]>([]);

  const openWindow = (app: AppType) => {
    setWindows(prev => prev.includes(app) ? prev : [...prev, app]);
  };

  const closeWindow = (app: AppType) => {
    setWindows(prev => prev.filter(w => w !== app));
  };

  return (
    <WindowContext.Provider value={{ windows, openWindow, closeWindow }}>
      {children}
    </WindowContext.Provider>
  );
}

export function useWindows() {
  const ctx = useContext(WindowContext);
  if (!ctx) throw new Error("useWindows must be used inside WindowProvider");
  return ctx;
}
