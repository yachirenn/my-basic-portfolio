"use client"

import { motion } from "framer-motion"
import { projects } from "@/constants/Project"
import { ArrowUpRight } from "lucide-react"

export default function ProjectSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-8">

      {/* HEADER */}
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-border to-transparent" />

          <div className="border bg-primary z-10 rounded-xl px-4 py-1">
            <span className="text-background text-xl font-medium">
              My Projects
            </span>
          </div>

          <div className="flex-1 h-px bg-linear-to-l from-transparent via-border to-transparent" />
        </div>

        <div className="flex flex-col gap-y-3 items-center justify-center text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Check out my latest work
          </h2>

          <p className="text-muted-foreground md:text-lg text-balance max-w-2xl">
            I've worked on a variety of projects, from simple websites to complex web applications.
          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-2xl mx-auto auto-rows-fr">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, filter: "blur(6px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="h-full"
          >

            <div className="flex flex-col h-full border border-card-foreground/30 rounded-xl overflow-hidden hover:ring-2 cursor-pointer hover:ring-muted transition-all duration-200">
              {/* IMAGE */}
              <div className="relative shrink-0">
                {project.imageUrls && (
                  <a href={project.liveUrl} target="_blank">
                    <img
                      src={project.imageUrls[0]}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </a>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col gap-3 flex-1 bg-accent-foreground">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold">
                      {project.title}
                    </h3>

                    {project.startDate && (
                      <time className="text-xs text-muted-foreground">
                        {project.startDate}
                      </time>
                    )}
                  </div>

                  {project.githubUrl && (
                    <a href={project.githubUrl}
                      target="_blank"
                      title="View project"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <ArrowUpRight className="h-4 w-4"/>
                    </a>
                  )}
                </div>

                <div className="text-xs leading-relaxed text-muted-foreground">
                  {project.description}
                </div>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-1 mt-auto">
                  {project.technologies?.map((tech, i) => (
                    <div
                      key={i}
                      className="border border-border text-[11px] px-2 py-0.5 rounded-md"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}