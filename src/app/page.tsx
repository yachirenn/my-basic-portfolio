"use client";

import ResponsiveLayout from "@/components/layout/responsiveLayout";

import DesktopLayout from "@/components/desktop/DesktopLayout";
import DesktopGrid from "@/components/desktop/DesktopGrid";
import WindowsContainer from "@/components/container/WindowsContainer";
import { WindowsProvider } from "@/components/container/WindowsContext";

import MobileView from "@/components/mobile/MobileView";

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

      mobile={<MobileView />}

    />
  );
}
