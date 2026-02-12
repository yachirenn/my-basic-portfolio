"use client"

import { Dorsa } from "next/font/google";
import { useEffect, useRef } from "react"

export default function HeroCanvas() {

  const canvasRaf = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRaf.current!;
    const ctx = canvas.getContext("2d");
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 180;
    };

    resize();

    window.addEventListener("resize", resize);

    const dots = Array.from({ length: 200}).map(() => ({
      x: Math.random() * canvas.height,
      y: Math.random() * canvas.height,
      speed: Math.random() * 0.6 + 0.2,
    }));

    function animate() {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      dots.forEach(d => {
        d.y += d.speed;
        if(d.y > canvas.height) {
          d.y = 0;
          d.x = Math.random()*canvas.width;
        }
        ctx.fillStyle = "rgba(255,255,255,0.15)";
        ctx.fillRect(d.x,d.y,1,1);
      });
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <canvas
      ref={canvasRaf}
      className="absolute top-5 left-0 w-full"
    />
  )
}