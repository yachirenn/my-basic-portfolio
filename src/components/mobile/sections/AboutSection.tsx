"use client"

import HeroPixelGrid from "@/components/ui/pixelgrid";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div className="relative px-6 pt-18 pb-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <HeroPixelGrid />
      </div>

      {/* CONTENT */}
      <div className="relative z-40">

        <span className="relative flex shrink-0 overflow-hidden size-24 md:size-32 border rounded-full shadow-lg bottom-8">
          <img className="aspect-square w-full h-full object-cover" src="/images/acheroninfinity.png" alt="yachirenn's photo" />
        </span>

        <h1 className="text-4xl font-bold pb4">Hi! I'm Renn</h1>
        <p className="text-gray-400 text-lg font-mono pb-10">
          Student want to be a Web Developers. I love make a beautifull and functional websites. Currently I am learning about React and REST API.
        </p>

        <h1 className="text-4xl font-bold">About Me_</h1>
        <p className="text-gray-400 pt-4 text-lg font-mono">
          Hello, I am yachirenn. Rendy Sulistyawan, commonly known as Rendy. 
          I am a student majoring in System, Information, Network, and Application, 
          with a particular interest in web development. 
          I enjoy creating digital solutions that are simple yet effective, 
          particularly using JavaScript, and I am eager to continue learning about the latest technologies. 
          I am seeking opportunities to contribute in an environment that fosters creativity and innovation.
        </p>
      </div>
    </div>
  );
}
