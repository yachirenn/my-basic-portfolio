'use client'

import { useState } from "react";
import { motion } from "motion/react";
import { certificates } from "@/constants/certificates";
import CertfModal from "@/components/common/FolderWindows/certfModal"

export default function CertifPages() {

  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <>
      <div className="min-h-screen px-10 py-8 text-gray-200 overscroll-contain scroll-smooth">

        {/* Header */}
        <div className="pb-10">
          <h1 className="text-3xl font-semibold text-green-400">Certificate Achivement</h1>
          <p className="text-gray-200 mt-1">Collection of Learning achivement</p>
        </div>

        {/* Grid Layout Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              onClick={() => setSelectedCertificate(cert)}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y:0}}
              transition={{delay: index * .08}}
              className="group relative rounded-xl bg-gray-800 border border-gray-400/10 hover:border-green-400/15 transition-all overflow-hidden"
            >

              {/* Image/assets Picture */}
              <div className="aspect-video bg-black/25">
                <img src={cert.imageUrl} alt={cert.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              
              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold text-green-400">
                  {cert.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {cert.issuer}
                </p>
              </div>

              {/* Hover Glowed */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ring-1 ring-green-400/25 rounded-xl" />

              {/* Modal Detail */}
              {selectedCertificate && (
                <CertfModal
                  certificate={selectedCertificate}
                  onClose={() => setSelectedCertificate(null)}
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}