import { AppType } from "@/app/lib/app"
import App from "next/app"

export type NavigationItems = {
  id: number
  label: string
  command?: string
  description?: string
  app: AppType
}

export const navigationItems: NavigationItems[] = [
  {
    id: 1,
    label: "Home",
    command: "home",
    description: "Navigate to the home directory",
    app: "about",
  },
  {
    id: 2,
    label: "About",
    command: "about",
    description: "Learn more about this OS",
    app: "about",
  },
  {
    id: 3,
    label: "Terminal",
    command: "terminal",
    description: "Open the terminal",
    app: "terminal",
  },
  {
    id: 4,
    label: "Memory",
    command: "mem",
    description: "View system memory usage",
    app: "mem",
  },
]