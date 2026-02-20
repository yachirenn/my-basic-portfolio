"use client";

import DesktopGrid from "./DesktopGrid";
import DesktopIcons from "./DesktopIcons";
import { icons } from "@/constants/icons";

export default function Desktop() {
  return (
    <div className="relative w-full h-full">
      <DesktopGrid />
      <DesktopIcons icons={icons} />
    </div>
  );
}
