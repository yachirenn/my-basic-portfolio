import { AppType } from "@/app/lib/app"

export type NavigationItem = {
  id: number
  label: string
  app: AppType
}

export const navigationItems: NavigationItem[] = [
  {
    id: 1,
    label: "command.exe",
    app: "terminal",
  },
  {
    id: 2,
    label: "mem.exe",
    app: "mem",
  },
  {
    id: 3,
    label: "about.exe",
    app: "about",
  },
]
