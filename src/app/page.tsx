"use client";

import DesktopLayout from "@/components/desktop/DesktopLayout";
import DesktopGrid from "@/components/desktop/DesktopGrid";
import WindowsContainer from "@/components/container/WindowsContainer";
import { WindowsProvider } from "@/components/container/WindowsContext";

export default function HomePage() {
  return (
    <WindowsProvider>
      <DesktopLayout>
        <DesktopGrid />
        <WindowsContainer />
      </DesktopLayout>
    </WindowsProvider>
  );
}