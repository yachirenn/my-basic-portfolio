"use client";

import AboutContent from "@/components/content/AboutContent";
import SkillsContent from "@/components/content/SkillsContent";
import ProjectsContent from "@/components/content/ProjectContent";
import CertificatesContent from "@/components/content/CertificatesContent";
import ContactContent from "@/components/content/ContactContent";

import BottomNavbar from "./BottomNavbar";
import { useState } from "react";

export default function MobileView() {

  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="bg-gray-950 text-white pb-24">

      <section className="min-h-screen p-6">
        <AboutContent />
      </section>

      <section className="min-h-screen p-6">
        <SkillsContent />
      </section>

      <section className="min-h-screen p-6">
        <ProjectsContent />
      </section>

      <section className="min-h-screen p-6">
        <CertificatesContent />
      </section>

      <section className="min-h-screen p-6">
        <ContactContent />
      </section>

      <BottomNavbar
        active={activeTab}
        onChange={(tab) => setActiveTab(tab)}
      />

    </div>
  );
}
