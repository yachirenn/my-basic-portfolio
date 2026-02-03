"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projects } from "@/constants/Project"
import { Project } from "next/dist/build/swc/types";
import { eventNames } from "process";

export default function ProjectModal() {
  if(!projects) return null;

  const [selectedProject, setSelectedProject] = useState<Project| null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const [imageZoom, setImageZoom] = useState<number>(1);
  const [imagePan, setImagePan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handleImageZoom = (delta: number) => {
    setImageZoom(prev => {
      const newZoom = prev + delta;
      const clampedZoom = Math.max(0.5, Math.min(2.5, newZoom));

      if(clampedZoom !== prev) {
        setImagePan({ x: 0, y:0 });
      }

      return clampedZoom;
    });
  };

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    handleImageZoom(delta);
  };

  const resetImageControls = () => {
    setImageZoom(1);
    setImagePan({ x: 0, y: 0 });
    setIsDragging(false);
  }

  // Handle ESC key for closing modals
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if(event.key === 'Escape') {
        if(enlargedImage) {
          setEnlargedImage(null);
          resetImageControls();
        } else if (selectedProject) {
          setSelectedProject(null);
        }
      };
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [enlargedImage, selectedProject]);

  return (
    <>

    </>
  )
}