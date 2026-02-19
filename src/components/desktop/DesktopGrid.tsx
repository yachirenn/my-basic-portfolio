"use client";

import DesktopIcons from "./DesktopIcons";

export default function DesktopGrid() {
  const icons = [
    { id: "1", label: "About", icon: "📁", windowId: "about" },
    { id: "2", label: "Skills", icon: "📁", windowId: "skills" },
    { id: "3", label: "Certificates", icon: "📁", windowId: "certificates" },
    { id: "4", label: "Projects", icon: "📁", windowId: "projects" },
    { id: "5", label: "Terminal", icon: "📁", windowId: "terminal" },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <DesktopIcons icons={icons} />
    </div>
  );
}