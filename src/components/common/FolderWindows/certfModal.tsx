"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, X, Eye } from "lucide-react";
import { Certificate, certificateCategories } from "@/constants/certificates";

type Props = {
  certificate: Certificate;
  onClose: () => void;
};

export default function CertfModal({ certificate, onClose }: Props) {
  if (!certificate) return null;

  const [selectedCertificate, setSelectedCertificate] = useState<Certificate| null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const [imageZoom, setImageZoom] = useState<number>(1);
  const [imagePan, setImagePan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

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

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    handleImageZoom(delta);
  };

  // Handle ESC key for closing modals
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (enlargedImage) {
          setEnlargedImage(null);
          resetImageControls();
        } else if (selectedCertificate) {
          setSelectedCertificate(null);
        }
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [enlargedImage, selectedCertificate]);

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

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        className="fixed inset-0 z-9999 bg-black/80 flex items-center justify-center p-4 pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* MODAL BOX */}
        <motion.div
          key="modal"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="bg-gray-900 border border-gray-400/10 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-400/10">
            <h2 className="text-lg font-semibold text-green-400">
              🏆 {certificate.name}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* CONTENT */}
          <div className="p-6 overflow-y-auto space-y-6">
            {/* IMAGE */}
            <div className="relative rounded-lg overflow-hidden bg-black/30">
              {certificate.imageUrl ? (
                <>
                  <img
                    src={certificate.imageUrl}
                    alt={certificate.name}
                    className="w-full h-64 object-contain cursor-pointer hover:opacity-90"
                    onClick={(e) => {
                      if(!certificate.imageUrl) return;
                      e.stopPropagation();
                      setEnlargedImage(certificate.imageUrl);
                      resetImageControls();
                    }}
                  />
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    Click to enlarge
                  </div>
                </>
              ) : (
                <div className="h-64 flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
            </div>

            {/* INFO GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Issuer</span>
                  <span className="text-blue-300">{certificate.issuer}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Issue Date</span>
                  <span>{certificate.issueDate}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Status</span>
                  <span className="text-green-400 capitalize">
                    {certificate.status}
                  </span>
                </div>
              </div>

              {certificate.credentialId && (
                <div>
                  <p className="text-gray-400 mb-1">Credential ID</p>
                  <div className="bg-gray-800 rounded px-3 py-2 font-mono text-xs break-all">
                    {certificate.credentialId}
                  </div>
                </div>
              )}
            </div>

            {/* DESCRIPTION */}
            <div>
              <h4 className="text-yellow-300 font-semibold mb-2">
                Description
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {certificate.description || "No description available"}
              </p>
            </div>

            {/* CATEGORIES */}
            <div>
              <h4 className="text-yellow-300 font-semibold mb-2">
                Categories
              </h4>
              <div className="flex flex-wrap gap-2">
                {certificate.categories.map((cat) => {
                  const info = certificateCategories.find(
                    (c) => c.id === cat
                  );
                  return (
                    <span
                      key={cat}
                      className="px-3 py-1 bg-gray-800 rounded text-xs flex items-center gap-1"
                    >
                      {info?.icon} {info?.name}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* SKILLS */}
            <div>
              <h4 className="text-yellow-300 font-semibold mb-2">
                Skills Covered
              </h4>
              <div className="flex flex-wrap gap-2">
                {certificate.skills?.length ? (
                  certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-700 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500 text-xs">
                    No skills listed
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
