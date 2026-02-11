"use client";

import { useRef, useState } from "react";

import AboutSection from "./sections/AboutSection";

import SkillsContent from "@/components/content/SkillsContent";
import ProjectsContent from "@/components/content/ProjectContent";
import CertificatesContent from "@/components/content/CertificatesContent";
import ContactContent from "@/components/content/ContactContent";

import BottomNavbar from "./BottomNavbar";
import TerminalModal from "@/components/TerminalWindow/TerminalModal";

type Tab =
  | "about"
  | "skills"
  | "projects"
  | "certificates"
  | "contact"
  | "terminal";

export default function MobileView() {

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

    <div className="bg-gray-950 text-white">

      {/* ABOUT */}
      <section ref={refs.about} className="min-h-screen p-6">
        <AboutSection />
      </section>

      {/* SKILLS */}
      <section ref={refs.skills} className="min-h-screen p-6">
        <SkillsContent />
      </section>

      {/* PROJECTS */}
      <section ref={refs.projects} className="min-h-screen p-6">
        <ProjectsContent />
      </section>

      {/* CERTIFICATES */}
      <section ref={refs.certificates} className="min-h-screen p-6">
        <CertificatesContent />
      </section>

      {/* CONTACT */}
      <section ref={refs.contact} className="min-h-screen p-6">
        <ContactContent />
      </section>

      <BottomNavbar active={active} onChange={scrollTo} />

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
