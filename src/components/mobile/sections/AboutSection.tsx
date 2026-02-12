"use client"

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative min-h-screen px-6 pt-12 pb-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 0.5}}
          transition={{duration: .875}}
          className="absolute top-0 left-0 w-full h-40 bg-[radiant-gradient(circle, #ffffff22_1px, transparent_1px)] bg-size-[10px_10px] mask-image-gradient"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-40">

        <span className="relative flex shrink-0 overflow-hidden size-24 md:size-32 border rounded-full shadow-lg bottom-8">
          <img className="aspect-square w-full h-full object-cover" src="/images/acheroninfinity.png" alt="yachirenn's photo" />
        </span>

        <h1 className="text-4xl font-bold pb-6">Hi! I'm Renn</h1>
        <p className="text-gray-400 text-lg font-mono">
          Hello, I am yachirenn. Rendy Sulistyawan, commonly known as Rendy. 
          I am a student majoring in System, Information, Network, and Application, 
          with a particular interest in web development. 
          I enjoy creating digital solutions that are simple yet effective, 
          particularly using JavaScript, and I am eager to continue learning about the latest technologies. 
          I am seeking opportunities to contribute in an environment that fosters creativity and innovation.
        </p>
      </div>
    </section>
  );
}
