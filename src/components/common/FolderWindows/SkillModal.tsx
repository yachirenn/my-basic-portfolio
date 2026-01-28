"use client";
import { useEffect, useState } from "react";
import FolderModal from "@/components/common/FolderModals";
import { Skill, skillsData, skillCategories } from "@/constants/skills";
import { motion } from "motion/react";

interface SkillProps {
  skill: Skill;

}

export default function SkillModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [fillLevel, setFillLevel] = useState<Record<string, number>>({});

  useEffect(() => {
    const timer: NodeJS.Timeout[] = [];
    skillCategories.forEach((category) => {
      category.skills.forEach((skill) => {
        timer.push(
          setTimeout(() => {
            setFillLevel((prev) => ({...prev, [skill.name]: skill.level}))
          }, 200)
        );
      });
    });
    return () => timer.forEach(clearTimeout);
  }, []);

  return (
    <FolderModal open={open} onClose={onClose} title="Skills">
      {/* === INI CHILDREN === */}
      <div className="max-h-[70vh] overflow-y-auto px-4 pt-4 pb-4 scroll-smooth space-y-6">
        {skillCategories.map((category) => (
          <div key={category.name} className="border border-gray-500/30 rounded-lg overflow-hidden bg-gray-900">
            <button
              onClick={() =>
                setActiveCategory(activeCategory === category.name ? null : category.name)
              }
              className="w-full tw-full p-4 flex items-center justify-between hover:bg-gray-800 transition-colors text-left font-semibold text-lg mb-2 hover:underline"
            >
              <span className="flex items-center gap-3">
                <svg xmlns="http://wwww.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-green-400">{category.name}</h3>
                  <p className="text-sm text-gray-300">3 skills</p>
                </div>
                
              </span>
              <span className={`transition-transform ${activeCategory === category.name ? "rotate-180" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
              </span>
            </button>

            {activeCategory === category.name && (
              <div className="space-y-4 p-4">
                {category.skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800 border border-gray-300/10 p-4 hover:border-gray-400/65 group space-y-1 rounded-md hover:bg-gray-800 transform-none transition-colors duration-300"
                    onMouseEnter={() => setHovered(skill.name)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* label row */}
                    <div className="flex justify-between text-sm pb-2 text-gray-200">
                      <div className="flex item-center gap-2">
                        {/* <img src="" alt="" /> */}
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-yellow-200 font-mono text-sm">
                        {skill.level}%
                      </span>
                    </div>

                    {/* level bar row */}
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2 overflow-hidden">
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-2 overflow-hidden">
                        <motion.div
                          className="h-2 bg-linear-to-r from-green-300 to-blue-400 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${fillLevel[skill.name] || 0}%` }}
                          transition={{ delay: index * 0.2 + 0.5, duration: 0.95, ease: "easeOut" }}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between text-xs text-gray-400 pt-2">
                      <span>{skill.category} • [{skill.level}/100]</span>
                      {skill.yearsOfExperience && (
                        <span className="text-gray-300">{skill.yearsOfExperience} year</span>
                      )}
                    </div>

                    {/* hover info */}
                    <div className="pt-2 font-mono text-xs text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      {'█'.repeat(Math.floor(skill.level / 5))}          
                      {'+'.repeat(20 - Math.floor(skill.level / 5))}
                      <span className="pl-2 text-yellow-200">[{skill.level}/100]</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </FolderModal>
  );
}