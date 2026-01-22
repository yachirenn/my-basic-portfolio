import CodeBlock from "@/components/hooks/useCodeBlock";
import { bioCode } from "@/constants/About";

export default function AboutModal() {
  return (
    <div className="p-3 overflow-y-auto">
      <CodeBlock code={bioCode} language="javascript" autoTyping={true} typingSpeed={10} />
    </div>
  );
}