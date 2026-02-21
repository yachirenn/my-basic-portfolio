type Props = {
  onClose: () => void;
};

export default function TerminalHeader({ onClose }: Props) {
  return (
    <div className="terminal-drag-handle flex items-center justify-between h-10 px-4 cursor-move select-none bg-gray-900 rounded-t-xl">
      <div className="flex gap-2">
        <button
          onClick={onClose}
          className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600"
        />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      <span className="text-sm text-gray-300">
        rendysulistyawan@portfolio:~
      </span>

      <div className="w-10" />
    </div>
  );
}
