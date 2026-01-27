"use client";
import { useState } from "react";
import FolderModal from "@/components/common/FolderModals";
import { skillCategories } from "@/constants/skills";

export default function SkillModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <FolderModal open={open} onClose={onClose} title="Skills">
      {/* === INI CHILDREN === */}
      <div className="max-h-[70vh] overflow-y-auto px-4 pb-4 scroll-smooth space-y-6">
        {skillCategories.map((category) => (
          <div key={category.name}>
            <button
              onClick={() =>
                setActiveCategory(activeCategory === category.name ? null : category.name)
              }
              className="w-full text-left text-blue-400 font-semibold text-lg mb-2 hover:underline flex items-center justify-between"
            >
              <span>{category.name}</span>
              <span className={`transition-transform ${activeCategory === category.name ? "rotate-90" : ""}`}>
                ▶
              </span>
            </button>

            {activeCategory === category.name && (
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm text-gray-200">
                      <span>{skill.name}</span>
                      <span>
                        {skill.level}%{skill.yearsOfExperience ? ` • ${skill.yearsOfExperience} yr` : ""}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full">
                      <div
                        className="h-2 bg-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </FolderModal>
  );
}