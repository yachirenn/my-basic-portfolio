"use client"

import HeroPixelGrid from "@/components/ui/pixelgrid"
import { motion } from "framer-motion"

export default function ContactSection() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(6px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true }}
    >
      <div className="border rounded-xl p-10 relative overflow-hidden">

        {/* FLOAT LABEL */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 border bg-primary z-10 rounded-xl px-4 py-1">
          <span className="text-background text-sm font-medium">
            Contact
          </span>
        </div>

        {/* TOP BACKGROUND CANVAS */}
        <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
          <div
            className="h-full w-full"
            style={{
              maskImage: "linear-gradient(to bottom, black, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black, transparent)",
            }}
          >
            {/* background animation / canvas */}
            <HeroPixelGrid />
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter">
            Get in Touch
          </h2>

          <p className="mx-auto max-w-lg text-muted-foreground text-balance">
            Want to chat? Just shoot me a dm{" "}
            <a
              href="https://www.instagram.com/yachirennn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              with a direct question on Instagram
            </a>{" "}
            and I'll respond whenever I can. I will ignore all soliciting.
          </p>
        </div>
      </div>
    </motion.div>
  )
}