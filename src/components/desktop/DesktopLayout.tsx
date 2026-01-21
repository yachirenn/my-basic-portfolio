"use client";

export default function DesktopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative w-full h-screen bg-center overflow-hidden"
    >
      {children}
    </div>
  );
}