type Props = {
  onClose: () => void;
}

export default function TerminalHeader({onClose}: Props) {
  return (
    <div className="flex items-center justify-between px-4 h-10 border-b border-white/10">
      <div className="flex gap-2">
        <button tabIndex={-1} onMouseDown={(e) => e.preventDefault()} onClick={onClose} className="w-3 h-3 rounded-full bg-red-600"/>
        <button tabIndex={-1} onMouseDown={(e) => e.preventDefault()} className="w-3 h-3 rounded-full bg-yellow-600"/>
        <button tabIndex={-1} onMouseDown={(e) => e.preventDefault()} className="w-3 h-3 rounded-full bg-green-600"/>
      </div>

      <span className="ml-4 text-sm text-white/80">yachirenn@portfolio:~root#</span>
    </div>
  )
}