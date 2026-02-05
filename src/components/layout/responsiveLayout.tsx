"use client";

import React, { useEffect, useState } from "react";

interface ResponsiveLayoutProps {
  desktop: React.ReactNode;
  tablet?: React.ReactNode;
  mobile: React.ReactNode;
}

export default function ResponsiveLayout({
  desktop,
  tablet,
  mobile,
}: ResponsiveLayoutProps) {

  const [screen, setScreen] = useState<"desktop" | "tablet" | "mobile">("desktop");

  useEffect(() => {

    const checkSize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setScreen("mobile");
      } else if (width < 1024) {
        setScreen("tablet");
      } else {
        setScreen("desktop");
      }
    };

    checkSize();
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);

  }, []);

  if (screen === "mobile") return <>{mobile}</>;
  if (screen === "tablet") return <>{tablet ?? desktop}</>;

  return <>{desktop}</>;
}
