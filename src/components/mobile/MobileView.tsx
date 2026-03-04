"use client";

import { useRef, useState } from "react";

import AboutSection from "./sections/AboutSection";

import EduSection from "./sections/EduSection";
import SkillSection from "./sections/SkillSection";
import ProjectSection from "./sections/ProjectSection";
import ContactSection from "./sections/ContactSection";

import BottomNavbar from "./BottomNavbar";
import TerminalModal from "@/components/TerminalWindow/TerminalModal";
import { on } from "node:cluster";

type Tab =
  | "about"
  | "skills"
  | "projects"
  | "certificates"
  | "contact"
  | "terminal";

export default function MobileView({ open, on }: { open: boolean; on: (open: boolean) => void }) {

  const [active, setActive] = useState<Tab>("about");
  const [openTerminal, setOpenTerminal] = useState(false);

  const refs = {
    about: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    certificates: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const scrollTo = (tab: Tab) => {

    if (tab === "terminal") {
      setOpenTerminal(true);
      return;
    }

    setActive(tab);

    refs[tab]?.current?.scrollIntoView({
      behavior: "smooth"
    });

  };

  return (
    <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
      <div className="min-h-dvh flex flex-col gap-14 relative">
        <AboutSection />
        <EduSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />

        <BottomNavbar />

        {openTerminal && (
          <TerminalModal
            windowId="terminal"
            open={openTerminal}
            onClose={() => setOpenTerminal(false)}
            content="Welcome to terminal"
          />
        )}

      </div>
    </div>
  );
}
