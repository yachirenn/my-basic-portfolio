"use client";

import { WindowsProvider } from "@/components/container/WindowsContext";
import Desktop from "./Desktop";
import Taskbar from "@/components/layout/Taskbar";
import WindowsContainer from "@/components/container/WindowsContainer";
import { usePathname } from "next/navigation";

export default function DesktopLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // cek apakah sedang di halaman root (desktop)
  const isDesktop = pathname === "/";

  return (
    <WindowsProvider>
      <div className="w-screen h-screen relative bg-cover bg-center">
        {isDesktop ? (
          <>
            {/* Konten utama desktop */}
            <Desktop />

            {/* WindowsContainer untuk render window aktif */}
            <WindowsContainer />

            {/* Taskbar di bawah */}
            <Taskbar />
          </>
        ) : (
          // kalau bukan di "/", render children (halaman lain)
          <div className="p-8">{children}</div>
        )}
      </div>
    </WindowsProvider>
  );
}