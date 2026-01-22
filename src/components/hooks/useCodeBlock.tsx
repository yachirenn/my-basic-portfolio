"use client";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
});

interface CodeBlockProps {
  code: string;
  language?: string;
  autoTyping?: boolean;
  typingSpeed?: number;
}

export default function CodeBlock({
  code,
  language = "javascript",
  autoTyping = false,
  typingSpeed = 20,
}: CodeBlockProps) {
  const [typedText, setTypedText] = useState(autoTyping ? "" : code);

  useEffect(() => {
    if (!autoTyping) return;
    let index = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + code[index]);
      index++;
      if (index >= code.length) clearInterval(interval);
    }, typingSpeed);
    return () => clearInterval(interval);
  }, [autoTyping, code, typingSpeed]);

  return (
    <div className={`${robotoMono.className} leading-tight text-base`}>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        wrapLongLines={true}
        customStyle={{
          background: "transparent",
          padding: "0.75rem",
          margin: "0",
          fontSize: "1.175rem",
          fontFamily: "Roboto Mono, monospace",
        }}
      >
        {typedText}
      </SyntaxHighlighter>
    </div>
  );
}