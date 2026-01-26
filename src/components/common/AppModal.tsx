// components/common/AppModal.tsx
"use client";

interface AppModalProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export default function AppModal({ title, children, onClose }: AppModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-md shadow-lg border border-gray-300 w-125 max-w-full">
        {/* Header ala desktop window */}
        <div className="flex items-center justify-between bg-gray-200 px-4 py-2 rounded-t-md">
          <span className="font-semibold text-gray-800">{title}</span>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-red-500 font-bold text-lg"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className=" text-gray-700 rounded-b-md">
          {children}
        </div>
      </div>
    </div>
  );
}