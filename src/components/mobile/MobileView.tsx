"use client";

import { useRef, useState } from "react";

import AboutSection from "./sections/AboutSection";

import SkillSection from "./sections/SkillSection";
import ProjectSection from "./sections/ProjectSection";
// import CertificatesSection from "./sections/CertificatesSection";
import ContactSection from "./sections/ContactSection";

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
    <div className="relative flex flex-col gap-16 px-6 py-10">
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      {/* <CertificatesSection /> */}
      <ContactSection />

      <BottomNavbar />

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
