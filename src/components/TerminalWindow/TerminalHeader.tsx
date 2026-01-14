interface Props {
  onClose: () => void;
}

export default function TerminalHeader({onClose}: Props) {
  return (
    <div className="flex items-center justify-between px-4 h-10 border-b border-white/10">
      <span className="text-sm text-white/80">Terminal</span>

      <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition">x</button>
    </div>
  )
}