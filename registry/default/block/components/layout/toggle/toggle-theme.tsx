"use client";
import { useTheme } from "next-themes";

import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

type ToggleThemeProps = {
  className?: string;
};

export function ToggleTheme({ className }: ToggleThemeProps) {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      type="button"
      className={cn("size-9 text-muted-foreground", className)}
    >
      <Sun className="h-6 w-[1.3rem] dark:hidden" />
      <Moon className="hidden size-5 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
