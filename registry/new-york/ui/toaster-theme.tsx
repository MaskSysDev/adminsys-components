"use client";

import { useToastTheme } from "@/hooks/use-toast-theme";

import {
  ToastTheme,
  ToastThemeClose,
  ToastThemeDescription,
  ToastThemeProvider,
  ToastThemeTitle,
  ToastThemeViewport,
} from "@/components/ui/toast-theme";

export function ToasterTheme() {
  const { toasts } = useToastTheme();

  return (
    <ToastThemeProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <ToastTheme key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastThemeTitle>{title}</ToastThemeTitle>}
              {description && (
                <ToastThemeDescription>{description}</ToastThemeDescription>
              )}
            </div>
            {action}
            <ToastThemeClose />
          </ToastTheme>
        );
      })}
      <ToastThemeViewport />
    </ToastThemeProvider>
  );
}
