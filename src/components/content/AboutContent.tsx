import CodeBlock from "@/components/hooks/useCodeBlock";
import { bioCode } from "@/constants/About";

export default function AboutModal() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <CodeBlock code={bioCode} language="javascript" autoTyping={true} typingSpeed={10} />
    </div>
  );
}