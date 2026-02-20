"use client";

import DesktopIcons from "./DesktopIcons";
import { icons } from "@/constants/icons";

export default function DesktopGrid() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <DesktopIcons icons={icons} />
    </div>
  );
}