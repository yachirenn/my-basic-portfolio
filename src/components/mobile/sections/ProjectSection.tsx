"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { projects } from "@/constants/Project"

export default function ProjectSection() {
  return (
    <section className="min-h-0 flex flex-col gap-8">
      <h1 className="text-4xl font-bold">Project</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className=" relative p-4">
              <div className="mx-4 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>

                <div className="flex w-fit h-5 py-3 bg-amber-300 border border-gray-700 rounded-2xl px-4 items-center justify-center">
                  <span className="text-sm font-mono">Tech</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}