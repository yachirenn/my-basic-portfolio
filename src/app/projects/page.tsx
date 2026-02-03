'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { projects, projectCategories, type Project } from '@/constants/Project'
import ProjectModal from "@/components/common/FolderWindows/ProjectModal"

export default function ProjectPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <div className="min-h-screen p-8 overscrool-contain scroll-smooth">

        {/* Header */}
        <div className="pb-10">
          <h1 className=" text-3xl text-white font-semibold font-mono">As I've Typed</h1>
          <p className="text-green-400 mt-1">Collection of what i've done</p>
        </div>

        {/* Grid Layout Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map(( project, index) => (
            <motion.div
              key={project.id}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y:0}}
              transition={{delay: index * .08}}
              className="group relative rounded-xl bg-gray-800 border border-gray-400/10 hover:border-green-400/15 transition-all overflow-hidden"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image/assets Picture */}
              <div className="aspect-video bg-black/25">
                <img src={project.githubUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              
              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold text-green-400">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Detail */}
      {selectedProject && (
        <ProjectModal
          projects={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}