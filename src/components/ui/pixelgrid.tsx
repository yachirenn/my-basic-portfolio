"use client"

import { useEffect, useState } from "react"

export default function HeroPixelGrid() {

  const rows = 7
  const cols = 52
  const [active, setActive] = useState<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const newActive = Array.from({ length: 65 }, () =>
        Math.floor(Math.random() * rows * cols)
      )
      setActive(newActive)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-full absolute inset-0 flex items-start justify-center opacity-55 pointer-events-none">
      <div className="grid gap-1 w-full" style={{ gridTemplateColumns: `repeat(${cols}, 10px)`}}>
        {Array.from({ length: rows * cols }).map((_, i) => {
          const isActive = active.includes(i)
          return (
            <div
              key={i}
              className={`
                w-2.5 h-2.5 
                transition-all duration-500
                ${isActive
                  ? "bg-green-500 shadow-[0_0_8px_rgba(65,195,10,0.7)] scale-110"
                  : "bg-green-900/30"}
              `}
            />
          )
        })}
      </div>
    </div>
  )
}
