"use client";

import React, { useState, useMemo, useEffect, useRef } from 'react';
import FolderModal from "@/components/common/FolderModals";
import { certificateCategories, type certificates, Certificate } from '@/constants/certificates';
import { AnimatePresence, motion } from "framer-motion";
import { Copy, Check, X, Eye } from 'lucide-react';
import TechIcon from '@/components/ui/TechIcon';

export default function CertfModal({ certificate, onClose } : { certificate: Certificate; onClose: () => void}) {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const [imageZoom, setImageZoom] = useState<number>(1);
  const [imagePan, setImagePan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Handle ESC key for closing modals
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (enlargedImage) {
          setEnlargedImage(null);
          resetImageControls();
        } else if (certificate) {
          onClose();
        }
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [enlargedImage, certificate]);

  // Handle wheel event for image zoom with non-passive listener
  useEffect(() => {
    const container = imageContainerRef.current;
    if (container && enlargedImage) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        container.removeEventListener('wheel', handleWheel);
      };
    }
  }, [enlargedImage]);

  const resetImageControls = () => {
    setImageZoom(1);
    setImagePan({ x: 0, y: 0 });
    setIsDragging(false);
  };

  const handleImageZoom = (delta: number) => {
    setImageZoom(prev => {
      const newZoom = prev + delta;
      const clampedZoom = Math.max(0.5, Math.min(2.5, newZoom)); // Reduced max zoom
      
      // Reset pan when zooming to prevent overflow
      if (clampedZoom !== prev) {
        setImagePan({ x: 0, y: 0 });
      }
      
      return clampedZoom;
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400';
      case 'expired': return 'text-red-400';
      case 'lifetime': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return '✅';
      case 'expired': return '❌';
      case 'lifetime': return '♾️';
      default: return '❓';
    }
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-8 max-w-7xl"
      >
        <AnimatePresence>
          {certificate && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-999"
              onClick={() => onClose()}
            >
              <motion.div
                initial={{ scale: .885, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: .885, opacity: 0 }}
                className="bg-gray-900 border border-gray-400/10 rounded-lg max-w-4xl w-full overflow-y-auto"
                onClick={stopPropagation}
              >
                {/* Modal Header for Detail */}
                <div className="sticky top-0 bg-gray-800 p-4 border border-gray-400/10 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-green-500 flex items-center gap-2">
                    🏆 {certificate.name}
                  </h2>
                  <button onClick={() =>  onClose()} className="text-gray-400 hover:text-white text-2xl">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Detail Modal Content */}
                <div className="p-6 space-y-6">
                  {/* Certificate Images */}
                  <div className="bg-gray-400 border border-gray-400/10 rounded-lg overflow-hidden">
                    {certificate.imageUrl ? (
                      <div className="relative">
                        <img 
                          src={certificate.imageUrl} 
                          alt={certificate.name} 
                          className="w-full h-64 object-contain bg-gray-400 cursor-pointer hover:opacity-80 transition-opacity" 
                          onClick={(e) => {
                            e.stopPropagation();
                            setEnlargedImage(certificate.imageUrl!);
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
                                  <p class="text-sm text-gray-500 mt-1">${certificate.imageUrl}</p>
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
                    ) : (
                      <div className="h-64 flex flex-col items-center justify-center bg-gray-500">
                        <div className="text-6xl mb-4">🎓</div>
                        <p className="text-gray-400">Certificate Image</p>
                        <p className="text-sm text-gray-500 mt-1">No image available</p>
                      </div>
                    )}
                  </div>

                  {/* Certificates Info Grid  */}
                  <div className="grid grid-cols-1 md-grid-cols-2 gap-6">
                    {/* Basic Info */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-yellow-200 mb-2">Certificates Details</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Issuer:</span>
                          <span className="text-blue-300 font-medium">{certificate.issuer}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Issue Date:</span>
                          <span className="text-left font-medium">{certificate.issueDate}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Status:</span>
                          <span className={`flex text-center gap-1 ${getStatusColor(certificate.status)}`}>
                            {getStatusColor(certificate.status)} {certificate.status.charAt(0).toUpperCase() + certificate.status.slice(1)}
                          </span>
                        </div>

                        {certificate.expiryDate && (
                          <div className="flex items-center justify-between">
                            <span className="text-white"></span>
                            <span className="text-yellow-100">{formatDate(certificate.expiryDate)}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {certificate.credentialId && (
                      <div className="">
                        <h4 className="text-yellow-100 font-semibold mb-2">Credential ID:</h4>
                        <div className="flex items-center gap-2 p-3 bg-gray-400 rounded font-mono text-sm">
                          <span className="flex-1">{certificate.credentialId}</span>
                          <button
                            onClick={() => copyToClipboard(certificate.credentialId!, 'credential')}
                            className="p-1 hover:bg-gray-700 rounded transition-colors"
                          >
                            {copiedField === 'credential' ? (
                              <Check className="w-4 h-4 text-green-300" />
                            ) : (
                              <Copy className="w-4 h-4 text-gray-300" />
                            )}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Skill Descriptiion */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-terminal-yellow font-semibold mb-2">Description</h4>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {certificate.description || 'No description available'}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-terminal-yellow font-semibold mb-2">Categories</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {certificate.categories.map((category) => {
                          const categoryInfo = certificateCategories.find(c => c.id === category);
                          return (
                            <span
                              key={category}
                              className="px-3 py-1 bg-gray-800 text-sm rounded font-mono text-gray-300 flex items-center gap-1"
                            >
                              {categoryInfo?.icon} {categoryInfo?.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-terminal-yellow font-semibold mb-2">Skills Covered</h4>
                      <div className="flex flex-wrap gap-2">
                        {certificate.skills && certificate.skills.length > 0 ? (
                          certificate.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-terminal-border rounded-full text-sm font-mono text-terminal-blue"
                            >
                              {skill}
                            </span>
                          ))
                        ) : (
                          <span className="px-3 py-1 bg-gray-700 rounded-full text-sm font-mono text-gray-400">
                            No skills listed
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

        </AnimatePresence>
      </motion.div>
    </>
  )
}

function setSelectedCertificate(arg0: null): void {
  throw new Error("Function not implemented.");
}
function handleWheel(this: HTMLDivElement, ev: WheelEvent) {
  throw new Error('Function not implemented.');
}

