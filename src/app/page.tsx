"use client";

import DesktopLayout from "@/components/desktop/DesktopLayout";
import DesktopGrid from "@/components/desktop/DesktopGrid";
import WindowsContainer from "@/components/container/WindowsContainer";
import { WindowsProvider } from "@/components/container/WindowsContext";
import ResponsiveLayout from "@/components/layout/responsiveLayout";

export default function HomePage() {
  return (
    <ResponsiveLayout
      desktop={
        <WindowsProvider>
          <DesktopLayout>
            <DesktopGrid />
            <WindowsContainer />
          </DesktopLayout>
        </WindowsProvider>
      }

      tablet={
        <WindowsProvider>
          <DesktopLayout>
            <DesktopGrid />
            <WindowsContainer />
          </DesktopLayout>
        </WindowsProvider>
      }

      mobile={
        <div className="p-4">
          MOBILE VIEW (isi nanti sesuai desain mobile)
        </div>
      }
    />
  );
}
