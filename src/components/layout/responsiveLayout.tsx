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

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);

    const resize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  if(width < 768) return <>{mobile}</>;
  if(width < 1024) return <>{tablet}</>;

  return <>{desktop}</>;
}
