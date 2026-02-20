import { ReactNode } from "react";

export interface IconData {
  id: string;
  label: string | ReactNode;
  icon: string;
  windowId: string;
  route?: string; // optional kalau pakai routing
}

export const icons: IconData[] = [
  {
    id: "about",
    label: "About",
    icon: "💼",
    windowId: "about",
  },
  {
    id: "skills",
    label: "Skills",
    icon: "⚡",
    windowId: "skills",
  },
  {
    id: "certificates",
    label: "Certificates",
    icon: "📜",
    windowId: "certificates",
    route: "/certificates",
  },
  {
    id: "projects",
    label: "Projects",
    icon: "📂",
    windowId: "projects",
    route: "/projects",
  },
  {
    id: "terminal",
    label: "Terminal",
    icon: "🖥️",
    windowId: "terminal",
  },
];
