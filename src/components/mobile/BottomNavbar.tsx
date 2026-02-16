"use client"

import { useEffect, useRef, useState } from "react"
import { Home, Github, Mail, Instagram, Linkedin, Terminal } from "lucide-react"
import { motion } from "framer-motion"

export default function BottomNavbar() {

  const [visible, setVisible] = useState(true)
  const lastScroll = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      const diff = current - lastScroll.current

      // threshold supaya tidak flicker
      if (Math.abs(diff) < 10) return

      if (diff > 0 && current > 80) {
        setVisible(false)
      } else {
        setVisible(true)
      }

      lastScroll.current = current
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: visible ? 0 : 120, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 350, damping: 30 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="
        flex gap-3
        backdrop-blur-xl
        bg-white/10
        border border-white/20
        shadow-2xl
        rounded-full
        px-4 py-2
      ">

        <NavButton onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Home size={20}/>
        </NavButton>

        <Divider />

        <NavButton onClick={() => window.open("https://github.com/yachirenn","_blank")}>
          <Github size={20}/>
        </NavButton>

        <NavButton onClick={() => window.open("mailto:rendysulistyawan11@gmail.com","_blank")}>
          <Mail size={20}/>
        </NavButton>

        <NavButton onClick={() => window.open("https://instagram.com/yachirennn","_blank")}>
          <Instagram size={20}/>
        </NavButton>

        <NavButton onClick={() => window.open("https://linkedin.com/in/rendy-sulistyawan-179b12335","_blank")}>
          <Linkedin size={20}/>
        </NavButton>

        <NavButton onClick={() => window.dispatchEvent(new Event("open-terminal"))}>
          <Terminal size={20}/>
        </NavButton>

      </div>
    </motion.div>
  )
}

function Divider() {
  return (
    <div className="w-px h-6 bg-white/20 self-center" />
  )
}

function NavButton({
  children,
  onClick
}: {
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="
        p-3 rounded-full
        transition-all
      "
    >
      {children}
    </motion.button>
  )
}
