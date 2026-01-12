export default function TerminalWindow() {
  const span = ">"
  return(
    <div className="terminal-window">
      <div className="terminal-header">
        Terminal
      </div>

      <div className="terminal-body">
        <p> {span} Welcome to my portfolio</p>
        <p> {span} type <span className="terminal-command">/help</span></p>
      </div>
    </div>
  );
}