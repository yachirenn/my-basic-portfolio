import DesktopGrid from "./DesktopGrid";
import TerminalWindow from "./TerminalWindows";

export default function DesktopLayout() {
  return (
    <section className="desktop-window">
      <div className="desktop-content">
        <DesktopGrid />
        <TerminalWindow />
      </div>
    </section>
  );
}
