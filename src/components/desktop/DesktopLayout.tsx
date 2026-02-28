"use client";

import { WindowsProvider } from "@/components/container/WindowsContext";
import Desktop from "./Desktop";
import Taskbar from "@/components/layout/Taskbar";
import WindowsContainer from "@/components/container/WindowsContainer";
import { usePathname } from "next/navigation";

interface DesktopLayoutProps {
  children: React.ReactNode;
  openWindow?: (windows: string) => void;
}

export default function DesktopLayout({ children, openWindow }: DesktopLayoutProps) {
  const pathname = usePathname();
  const isDesktop = pathname === "/";

  return (
    <WindowsProvider>
      <div className="relative w-screen h-screen overflow-hidden bg-cover bg-center">
        {isDesktop ? (
          <>
            <div className="absolute inset-0 z-0">
              <Desktop />
            </div>

            <div className="absolute inset-0 z-40 pointer-events-none">
              <WindowsContainer />
            </div>

            <Taskbar />
          </>
        ) : (
          <div className="p-8">{children}</div>
        )}
      </div>
    </WindowsProvider>
  );
}