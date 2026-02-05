"use client";

import { useState } from "react";

import AboutContent from "@/components/common/FolderWindows/AboutModal";
import SkillModal from "@/components/common/FolderWindows/SkillModal";
import ProjectsContent from "@/components/common/FolderWindows/AboutModal";
import CertificatesContent from "@/components/common/FolderWindows/AboutModal";
import ContactContent from "@/components/common/FolderWindows/AboutModal";

type TabType =
  | "about"
  | "skills"
  | "projects"
  | "certificates"
  | "contact";

export default function MobileLayout() {

  const [activeTab, setActiveTab] = useState<TabType>("about");

  const renderContent = () => {

    switch (activeTab) {

      case "about":
        return <AboutContent />;

      case "skills":
        return <SkillModal open={true} onClose={() => {}} />;

      case "projects":
        return <ProjectsContent />;

      case "certificates":
        return <CertificatesContent />;

      case "contact":
        return <ContactContent />;

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto p-4">

        {renderContent()}

      </div>

      {/* BOTTOM NAVIGATION */}
      <div className="grid grid-cols-5 border-t border-gray-700 bg-gray-800">

        <NavItem label="About" onClick={() => setActiveTab("about")} />
        <NavItem label="Skills" onClick={() => setActiveTab("skills")} />
        <NavItem label="Projects" onClick={() => setActiveTab("projects")} />
        <NavItem label="Cert" onClick={() => setActiveTab("certificates")} />
        <NavItem label="Contact" onClick={() => setActiveTab("contact")} />

      </div>

    </div>
  );
}

function NavItem({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {

  return (
    <button
      onClick={onClick}
      className="py-3 text-sm hover:bg-gray-700 transition"
    >
      {label}
    </button>
  );
}
