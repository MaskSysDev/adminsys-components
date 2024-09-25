"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { CardTheme } from "@/components/ui/card-theme";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  expandButtonTitle?: string;
}

export function CodeBlockWrapper({
  expandButtonTitle = "View Code",
  className,
  children,
  ...props
}: Readonly<CodeBlockProps>) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Collapsible open={isOpened} onOpenChange={setIsOpened}>
      <CardTheme.Root
        className={cn("relative overflow-hidden rounded-lg", className)}
        {...props}
      >
        <CollapsibleContent
          forceMount
          className={cn(" overflow-hidden", !isOpened && "max-h-56")}
        >
          <div
            className={cn(
              "[&_pre]:my-0 [&_pre]:h-auto [&_pre]:max-h-[650px] [&_pre]:pb-[64px]",
              !isOpened ? "[&_pre]:overflow-hidden" : "[&_pre]:overflow-auto]",
            )}
          >
            {children}
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
              {isOpened ? "Collapse" : expandButtonTitle}
            </Button>
          </CollapsibleTrigger>
        </div>
      </CardTheme.Root>
    </Collapsible>
  );
}
