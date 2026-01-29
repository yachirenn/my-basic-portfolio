type Props = {
  onClose: () => void;
}

export default function TerminalHeader({ onClose }: Props) {
  return (
    <div className="terminal-drag-handle flex items-center justify-between h-10 px-4 cursor-move select-none rounded-t-xl py-2 bg-gray-800 border-gray-400/10">
      <div className="flex gap-2">
        <button
          tabIndex={-1}
          onMouseDown={(e) => e.preventDefault()}
          onClick={onClose}
          className="w-3 h-3 rounded-full bg-red-600"
        />
        <button tabIndex={-1} onMouseDown={(e) => e.preventDefault()} className="w-3 h-3 rounded-full bg-yellow-600" />
        <button tabIndex={-1} onMouseDown={(e) => e.preventDefault()} className="w-3 h-3 rounded-full bg-green-600" />
      </div>

      <span className="ml-4 text-sm text-white/80">rendysulistyawan@portfolio:~</span>
      <div className="w-20"></div>
    </div>
  );
}