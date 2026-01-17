import { TerminalProvider } from "@/components/TerminalWindow/TerminalContent"
import TerminalView from "@/components/TerminalWindow/TerminalView"
import TerminalHeader from "./TerminalHeader"

export default function TerminalWindows() {
  return (
    <TerminalProvider>
      <TerminalHeader onClose={() => {}} />
      <TerminalView />
    </TerminalProvider>
  )
}