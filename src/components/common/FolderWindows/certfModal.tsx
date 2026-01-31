"use client";

import { useEffect, useState } from "react";
import FolderModal from "@/components/common/FolderModals";
import {  } from "@/constants/skills";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

export default function CertfModal() {
  return 
  <>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-8 max-w-7xl"
    >
      <AnimatePresence
        {selectCertificates && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bo-opacity-80 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: .885, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: .885, opacity: 0 }}
              className="bg-gray-900 border border-gray-400/10 rounded-lg max-w-4xl w-full overflow-y-auto"
              onClick={() => stopPropagation()}
            >
              {/* Modal Header for Detail */}
              <div className="sticky top-0 bg-gray-800 p-4 border border-gray-400/10 flex items-center justify-between">
                <h2 className="text-xl font-bold text-green-500 flex items-center gap-2">
                  🏆 {selectedCertificate.name}
                </h2>
                <button onClick={() =>  setSelectedCertificate(null)} className="text-gray-400 hover:text-white text-2xl">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Detail Modal Content */}
              <div className="p-6 space-y-6">
                {/* Certificate Images */}
                <div className="bg-gray-400 border border-gray-400/10 rounded-lg overflow-hidden">
                  {selectedCertificate.imageUrl ? (
                    <div className="relative">
                      <img 
                        src={selectedCertificate.imageUrl} 
                        alt={selectedCertificate.name} 
                        className="w-full h-64 object-contaim bg-gray-400 cursor-pointer hover:opacity-80 transition-opacity" 
                        onClick={(e) => {
                          e.stopPropagation();
                          setEnLargedImage(selectedCertificate.imageUrl!);
                          resetImageControls();
                        }}

                        onError={(e) => {
                          // feedback if image not being reloaded
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="h-64 flex flex-col items-center justify-center bg-gray-900">
                                <div class="text-6xl mb-4">🎓</div>
                                <p class="text-gray-400">Certificate Image</p>
                                <p class="text-sm text-gray-500 mt-1">${selectedCertificate.imageUrl}</p>
                              </div>
                            `;
                          }
                        }}
                      />

                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white py-2 px-1 rounded text-xs flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        CLick to enlarge
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </motion.div>

          </motion.div>
        )}
      >

      </AnimatePresence>
    </motion.div>
  </>
}

function setSelectedCertificate(arg0: null): void {
  throw new Error("Function not implemented.");
}
