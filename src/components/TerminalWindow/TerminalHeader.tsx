type Props = {
  onClose: () => void;
}

export default function TerminalHeader({onClose}: Props) {
  return (
    <div className="terminal-drag-handle flex items-center justify-between px-4 h-10terminal-drag-handle py-2 cursor-move border-b border-white/10 bg-gray-900/80">
      <div className="flex gap-2">
        <button
          tabIndex={-1} 
          onMouseDown={(e) => e.preventDefault()} 
          onClick={() => {
            console.log("Terminal CLosed");
            onClose();
          }} className="w-3 h-3 rounded-full bg-red-600"/>
        <button tabIndex={-1} onMouseDown={(e) => e.preventDefault()} className="w-3 h-3 rounded-full bg-yellow-600"/>
        <button tabIndex={-1} onMouseDown={(e) => e.preventDefault()} className="w-3 h-3 rounded-full bg-green-600"/>
      </div>

      <span className="ml-4 text-sm text-white/80">rendysulistyawan@portfolio:~root#</span>
      <div className="w-20"></div>
    </div>
  )
}