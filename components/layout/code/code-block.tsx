"use client";

import { useEffect, useState } from "react";

import { Check, Copy } from "lucide-react";
import Prism from "prismjs";

import { Button } from "@/components/ui/button";

import "prismjs/components/prism-bash";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-powershell";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-typescript";

import "@/styles/code-block.css";

interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="group relative w-full overflow-auto bg-muted/60">
      <Button
        onClick={copyToClipboard}
        className="absolute right-4 top-2 z-10 hidden size-8 text-muted-foreground group-hover:flex"
        size="icon"
        variant="outline"
        aria-label={isCopied ? "Código copiado" : "Copiar código"}
      >
        {isCopied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </Button>
      <pre className="mt-4 max-h-96 w-full">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
