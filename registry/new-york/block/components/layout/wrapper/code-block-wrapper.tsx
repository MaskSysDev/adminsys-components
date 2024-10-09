"use client";

import { useEffect, useState } from "react";

import { Check, Copy } from "lucide-react";
import Prism from "prismjs";

import { cn } from "@/lib/utils";

import { CodeBlock } from "@/components/layout/code/code-block";

import { Button } from "@/components/ui/button";
import { CardTheme } from "@/components/ui/card-theme";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface CodeBlockWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  expandButtonLabel?: string;
  hideButtonLabel?: string;
  collapsible?: boolean;
  code: string;
  language: string;
}

export function CodeBlockWrapper({
  expandButtonLabel = "View Code",
  hideButtonLabel = "Hide Code",
  className,
  title,
  collapsible,
  code,
  language,
  ...props
}: Readonly<CodeBlockWrapperProps>) {
  const [isOpened, setIsOpened] = useState(false);

  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  const copyToTitleClipboard = async () => {
    try {
      await navigator.clipboard.writeText(title!);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Collapsible open={isOpened} onOpenChange={setIsOpened}>
      <CardTheme.Root
        className={cn("relative overflow-hidden rounded-lg", className)}
        {...props}
      >
        {title && (
          <CardTheme.Header className="group h-12">
            <CardTheme.HeaderContent>
              <CardTheme.Description>{title}</CardTheme.Description>
            </CardTheme.HeaderContent>
            <CardTheme.HeaderActions>
              <Button
                onClick={copyToTitleClipboard}
                className="z-10 hidden size-8 p-0 text-muted-foreground group-hover:flex"
                size="icon"
                variant="outline"
                aria-label={isCopied ? "Copied code" : "Copy code"}
              >
                {isCopied ? (
                  <Check className="size-4" />
                ) : (
                  <Copy className="size-4" />
                )}
              </Button>
            </CardTheme.HeaderActions>
          </CardTheme.Header>
        )}
        <CardTheme.Content className="flex p-0">
          {collapsible ? (
            <>
              <CollapsibleContent
                forceMount
                className={cn(
                  "w-full overflow-hidden",
                  !isOpened && "max-h-56",
                )}
              >
                <div
                  className={cn(
                    "[&_pre]:h-auto",
                    !isOpened
                      ? "[&_pre]:overflow-hidden"
                      : "[&_pre]:overflow-auto]",
                  )}
                >
                  <CodeBlock code={code} language={language} />
                </div>
              </CollapsibleContent>
              <div
                className={cn(
                  "absolute flex items-center justify-center bg-gradient-to-b from-background/20 to-muted/80",
                  isOpened ? "inset-x-0 bottom-0 h-12" : "inset-0",
                )}
              >
                <CollapsibleTrigger asChild>
                  <Button variant="outline" size="sm" className=" text-xs">
                    {isOpened ? hideButtonLabel : expandButtonLabel}
                  </Button>
                </CollapsibleTrigger>
              </div>
            </>
          ) : (
            <CodeBlock code={code} language={language} />
          )}
        </CardTheme.Content>
      </CardTheme.Root>
    </Collapsible>
  );
}
