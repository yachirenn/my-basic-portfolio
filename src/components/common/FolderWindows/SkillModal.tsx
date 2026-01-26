import CodeBlock from "@/components/hooks/useCodeBlock";
import { skillsData } from "@/constants/skills";

export default function skillsModal () {
  return (
    <div className="overflow-y-auto">
      <CodeBlock code={JSON.stringify(skillsData, null, 2)} language="json" autoTyping={true} typingSpeed={10} />
    </div>
  ) 
}