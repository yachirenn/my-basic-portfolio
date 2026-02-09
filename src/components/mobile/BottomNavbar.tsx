"use client"

import { motion } from 'framer-motion';

type Tabs = 
  | "about"
  | "skills"
  | "projects"
  | "certificates"
  | "contact"
  | "terminal"

interface Props {
  active: Tabs | string;
  onChange: (tab: Tabs) => void;
}

const tabs: Tabs[] = [
  "about",
  "skills",
  "projects",
  "certificates",
  "contact",
  "terminal",
]

export default function BottomNavbars({ active, onChange} : Props) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex gap-1 px-2.5 py-2 bg-gray-900/35 backdrop-blur-lg border border-gray-400 rounded-full shadow-xl">
        {tabs.map((tabs) => (
          <button
            key={tabs}
            onClick={() => onChange(tabs)}
            className="relative px-4 py-2 text-sm capitalize"
          >
            {/* Active Indicator */}
            {active === tabs && (
              <motion.div
                layoutId="ios-nav-bottom"
                className="absolute inset-0 bg-green-400 rounded-full pointer-events-none"
                transition={{type: "spring", stiffness: 400, damping: 30}}
              />
            )}

            <span className="relative z-40">
              {tabs}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}