"use client";

export default function DesktopGrid() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Optional: grid background pattern */}
      <div className="w-full h-full bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[20px_20px]" />
    </div>
  );
}
