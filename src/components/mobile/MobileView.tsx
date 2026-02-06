"use client";

import { useState } from "react";

import AboutContent from "@/components/content/AboutContent";
import SkillsContent from "@/components/content/SkillsContent";
import ProjectsContent from "@/components/content/ProjectContent";
import CertificatesContent from "@/components/content/CertificatesContent";
import ContactContent from "@/components/content/ContactContent";

import BottomNavbar from "@/components/mobile/BottomNavbar";

export default function MobileView() {

  const [activeTab, setActiveTabs] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutContent />;

      case "skills":
        return <SkillsContent />;

      case "projects":
        return <ProjectsContent />;

      case "certificates":
        return <CertificatesContent />;

      case "contact":
        return <ContactContent />;

      default:
        return <AboutContent />;
    }
  };

  return (
    <div className="bg-gray-950 text-white pb-32 min-h-screen flex flex-col">

      {/* CONTENT */}
      <div className="flex-1 p-6">
        {renderContent()}
      </div>

      {/* NAVBAR */}
      <BottomNavbar
        active={activeTab}
        onChange={(tab) => setActiveTabs(tab)}
      />

    </div>
  );
}
