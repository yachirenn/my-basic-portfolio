"use client";

export interface DesktopIconsProps {
  label: string;
  onClick?: () => void;
}

export default function DesktopIcon({ label, onClick }: DesktopIconsProps) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform"
    >
      <div className="w-16 h-16 bg-gray-700 rounded-md flex items-center justify-center text-white">
        📁
      </div>
      <span className="mt-2 text-sm text-white">{label}</span>
    </div>
  );
}