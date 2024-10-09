import * as React from "react";

import { cn } from "@/lib/utils";

const CardThemeRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex w-full flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm",
      className,
    )}
    {...props}
  />
));
CardThemeRoot.displayName = "CardThemeRoot";

const CardThemeHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex min-h-12 flex-col space-y-1.5 border-b bg-muted/60 px-4 py-2",
      className,
    )}
    {...props}
  >
    <div className="flex flex-1 items-center">{children}</div>
  </div>
));
CardThemeHeader.displayName = "CardThemeHeader";

const CardThemeHeaderContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("w-full", className)} {...props} />
));
CardThemeHeaderContent.displayName = "CardThemeHeaderContent";

const CardThemeHeaderActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("ml-auto flex items-center space-x-2", className)}
    {...props}
  />
));
CardThemeHeaderActions.displayName = "CardThemeHeaderActions";

const CardThemeTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  >
    {children}
  </h3>
));
CardThemeTitle.displayName = "CardThemeTitle";

const CardThemeDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardThemeDescription.displayName = "CardThemeDescription";

const CardThemeContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4 text-foreground", className)} {...props} />
));
CardThemeContent.displayName = "CardThemeContent";

const CardThemeFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div className="mt-auto">
    <div
      ref={ref}
      className={cn(
        "flex min-h-12 flex-col space-y-1.5 border-t bg-muted/60 px-4 py-2",
        className,
      )}
      {...props}
    >
      <div className="flex flex-1 items-center">{children}</div>
    </div>
  </div>
));
CardThemeFooter.displayName = "CardThemeFooter";

const CardThemeFooterContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("w-full", className)} {...props} />
));
CardThemeFooterContent.displayName = "CardThemeFooterContent";

const CardThemeFooterActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("ml-auto flex items-center space-x-2", className)}
    {...props}
  />
));
CardThemeFooterActions.displayName = "CardThemeFooterActions";

export const CardTheme = {
  Root: CardThemeRoot,
  Header: CardThemeHeader,
  HeaderContent: CardThemeHeaderContent,
  HeaderActions: CardThemeHeaderActions,
  Footer: CardThemeFooter,
  FooterContent: CardThemeFooterContent,
  FooterActions: CardThemeFooterActions,
  Title: CardThemeTitle,
  Description: CardThemeDescription,
  Content: CardThemeContent,
};
