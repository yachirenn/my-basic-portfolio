"use client";

import DesktopIcon from "@/components/desktop/DesktopIcon";

export default function DesktopGrid() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="grid grid-cols-3 grid-rows-2 gap-12 text-black">
        <DesktopIcon label="Projects" />
        <DesktopIcon label="Skills" />
        <DesktopIcon label="Certificates" />
        <DesktopIcon label="About" />
        <DesktopIcon label="Contact" />
        <DesktopIcon label="Terminal" />
      </div>
    </div>
  );
}
