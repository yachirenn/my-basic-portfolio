"use client";

import { WindowsProvider } from "@/components/container/WindowsContext";
import Desktop from "./Desktop";
import Taskbar from "@/components/layout/Taskbar";
import WindowsContainer from "@/components/container/WindowsContainer";

export default function DesktopLayout({ children }: { children: React.ReactNode }) {
  return (
    <WindowsProvider>
      <div className="w-screen h-screen relative bg-cover bg-center">
        {/* Konten utama desktop */}
        <Desktop />

        {/* WindowsContainer untuk render window aktif */}
        <WindowsContainer />

        {/* Taskbar di bawah */}
        <Taskbar />

        {/* Children tambahan (opsional) */}
        {children}
      </div>
    </WindowsProvider>
  );
}