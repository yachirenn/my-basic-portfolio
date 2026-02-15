"use client";

import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  speed: number;
}

export default function HeroCanvas() {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {

    const canvasEl = canvasRef.current;
    if (!canvasEl) return;

    const context = canvasEl.getContext("2d");
    if (!context) return;

    // sekarang TS tahu ini NON NULL
    const canvas = canvasEl;
    const ctx = context;

    let animationId: number;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const dots: Dot[] = Array.from({ length: 120 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: Math.random() * 0.5 + 0.2,
    }));

    function animate() {

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach(d => {
        d.y += d.speed;

        if (d.y > canvas.height) {
          d.y = 0;
          d.x = Math.random() * canvas.width;
        }

        ctx.fillStyle = "rgba(255,255,255,0.15)";
        ctx.fillRect(d.x, d.y, 1, 1);
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };

  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
    />
  );
}
