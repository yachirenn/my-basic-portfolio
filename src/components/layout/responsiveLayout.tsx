"use client";

import { useEffect, useState } from "react";

interface Props {
  desktop: React.ReactNode;
  tablet: React.ReactNode;
  mobile: React.ReactNode;
}

export default function ResponsiveLayout({
  desktop,
  tablet,
  mobile
}: Props) {

  const [screen, setScreen] = useState<"desktop" | "tablet" | "mobile">("desktop");

  useEffect(() => {

    const updateScreen = () => {

      const width = window.innerWidth;

      if (width < 768) {
        setScreen("mobile");
      } else if (width < 1024) {
        setScreen("tablet");
      } else {
        setScreen("desktop");
      }

    };

    updateScreen();

    window.addEventListener("resize", updateScreen);

    return () => window.removeEventListener("resize", updateScreen);

  }, []);

  if (screen === "mobile") return <>{mobile}</>;
  if (screen === "tablet") return <>{tablet}</>;

  return <>{desktop}</>;
}
