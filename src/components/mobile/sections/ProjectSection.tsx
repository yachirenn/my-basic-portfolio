"use client"

import { motion } from "framer-motion"
import { projects } from "@/constants/Project"

export default function ProjectSection() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">Project</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}

            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}

            whileHover={{
              y: -6,
              scale: 1.02
            }}

            className="
              group
              bg-white
              rounded-xl
              shadow-md
              overflow-hidden
              border border-gray-200
              transition-all
            "
          >

            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {project.description}
              </p>

              {/* TECH BADGE */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies?.map((tech, i) => (
                  <span
                    key={i}
                    className="
                      text-xs font-medium
                      px-3 py-1
                      rounded-full
                      bg-black
                      border border-gray-400/50
                      transition-all
                      group-hover:scale-105
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
