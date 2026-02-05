"use client";

import { useRef, useState } from "react";
import BottomNavbars from "./BottomNavbar";

import AboutContent from "@/components/common/FolderWindows/AboutModal";
import SkillModal from "@/components/common/FolderWindows/SkillModal";
import ProjectsContent from "@/components/common/FolderWindows/AboutModal";
import CertificatesContent from "@/components/common/FolderWindows/AboutModal";
import ContactContent from "@/components/common/FolderWindows/AboutModal";

import TerminalModal from "@/components/TerminalWindow/TerminalModal";

type Tab =
  | "about"
  | "skills"
  | "projects"
  | "certificates"
  | "contact"
  | "terminal";

export default function MobileLayout() {

  const [activeTab, setActiveTab] = useState<Tab>("about");
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

    setActiveTab(tab);

    refs[tab]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="bg-gray-950 text-white">

      {/* LANDING SECTIONS */}

      <section ref={refs.about} className="min-h-screen p-6">
        <AboutContent />
      </section>

      <section ref={refs.skills} className="min-h-screen p-6">
        <SkillModal open={true} onClose={() => {}} />
      </section>

      <section ref={refs.projects} className="min-h-screen p-6">
        <ProjectsContent />
      </section>

      <section ref={refs.certificates} className="min-h-screen p-6">
        <CertificatesContent />
      </section>

      <section ref={refs.contact} className="min-h-screen p-6">
        <ContactContent />
      </section>

      {/* IOS NAV */}
      <BottomNavbars active={activeTab} onChange={scrollTo} />

      {/* TERMINAL FULLSCREEN */}
      {openTerminal && (
        <TerminalModal
          open={true}
          onClose={() => setOpenTerminal(false)}
          content="Welcome to terminal"
        />
      )}

    </div>
  );
}
