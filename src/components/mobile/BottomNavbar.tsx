"use client"

import { Home, Github, Mail, Instagram, Linkedin, Terminal } from "lucide-react"

export default function BottomNavbar() {

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="
      fixed bottom-4 left-1/2 -translate-x-1/2
      backdrop-blur-lg
      bg-transparent
      border border-white/30
      shadow-lg
      rounded-full
      px-4 py-2
      flex gap-4
      z-50
    ">
      
      {/* HOME */}
      <NavButton onClick={scrollTop}>
        <Home size={20}/>
      </NavButton>

      <div data-separator className="w-px h-8 bg-white/30 items-center self-center"></div>

      {/* GITHUB */}
      <NavButton onClick={() => window.open("https://github.com/yachirenn","_blank")}>
        <Github size={20}/>
      </NavButton>

      {/* EMAIL */}
      <NavButton onClick={() => window.open("mailto:rendysulistyawan11@gmail.com", "_blank")}>
        <Mail size={20}/>
      </NavButton>

      {/* INSTAGRAM */}
      <NavButton onClick={() => window.open("https://instagram.com/yachirennn","_blank")}>
        <Instagram size={20}/>
      </NavButton>

      {/* LINKEDIN */}
      <NavButton onClick={() => window.open("https://linkedin.com/in/rendy-sulistyawan-179b12335","_blank")}>
        <Linkedin size={20}/>
      </NavButton>

      {/* TERMINAL */}
      <NavButton onClick={() => window.dispatchEvent(new Event("open-terminal"))}>
        <Terminal size={20}/>
      </NavButton>

    </div>
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
    <button
      onClick={onClick}
      className="
        p-3 rounded-full
        hover:bg-gray-100
        active:scale-90
        transition-all
      "
    >
      {children}
    </button>
  )
}
