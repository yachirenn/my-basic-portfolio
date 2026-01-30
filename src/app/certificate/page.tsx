'use client'

import { motion } from "motion/react";
import { certificates } from "@/constants/certificates";

export default function CertifPages() {
  
  return (
    <>
      <div className="min-h-screen px-10 py-8 text-gray-200 overscroll-contain scroll-smooth">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold text-green-400">Certificate Achivement</h1>
          <p className="text-gray-200 mt-1">Collection of Learning achivement</p>
        </div>

        {/* Grid Layout Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.tags}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y:0}}
              transition={{delay: index * .08}}
              className="group relative rounded-xl bg-gray-800 border border-gray-400/10 hover:border-green-400/15 transition-all overflow-hidden"
            >

              {/* Image/assets Picture */}
              <div className="aspect-square bg-black/25">
                <img src={cert.link} alt={cert.name} className="w-full h-full object-cover group-hover:scale-125 transition-transform" />
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}