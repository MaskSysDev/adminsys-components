import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeThemeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        /* Color */
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        muted: "bg-muted text-muted-foreground",
        accent: "bg-accent text-accent-foreground",

        /* Color System */
        info: "bg-blue-700 text-blue-50",
        positive: "bg-green-700 text-green-50",
        negative: "bg-red-700 text-red-50",
        warning: "bg-yellow-700 text-yellow-50",
      },
      theme: {
        solid: "border-transparent",
        outline: "bg-transparent",
        soft: "border-transparent",
      },
      size: {
        default: "h-6 gap-1 px-3 py-1 text-sm",
        sm: "h-4 gap-0.5 px-2 py-1 text-[10px]",
        lg: "h-8 gap-2 px-3 py-1 text-sm",
        xl: "h-10 gap-4 px-4 py-1 text-base",
      },
    },
    compoundVariants: [
      /*
       * Outline Compound
       */
      {
        variant: "primary",
        theme: "outline",
        className: "border-primary/30 text-primary/90",
      },
      {
        variant: "secondary",
        theme: "outline",
        className: "border-secondary text-secondary-foreground/90",
      },
      {
        variant: "muted",
        theme: "outline",
        className: "border-muted text-muted-foreground/90",
      },
      {
        variant: "accent",
        theme: "outline",
        className: "border-accent text-accent-foreground/90",
      },
      {
        variant: "info",
        theme: "outline",
        className: "border-blue-600/30 text-blue-600",
      },
      {
        variant: "positive",
        theme: "outline",
        className: "border-green-600/30 text-green-600",
      },
      {
        variant: "negative",
        theme: "outline",
        className: "border-red-600/30 text-red-600",
      },
      {
        variant: "warning",
        theme: "outline",
        className: "border-yellow-600/30 text-yellow-600",
      },

      /**
       * * Soft Compound
       */
      {
        variant: "primary",
        theme: "soft",
        className: "border-primary/0 bg-primary/20 text-primary ",
      },
      {
        variant: "secondary",
        theme: "soft",
        className:
          "border-secondary/0 bg-secondary/20 text-secondary-foreground",
      },
      {
        variant: "muted",
        theme: "soft",
        className: "border-muted/0 bg-muted/20 text-muted-foreground",
      },
      {
        variant: "accent",
        theme: "soft",
        className: "border-accent/0 bg-accent/20 text-accent-foreground",
      },
      {
        variant: "info",
        theme: "soft",
        className: "border-blue-600/0 bg-blue-600/20 text-blue-600",
      },
      {
        variant: "positive",
        theme: "soft",
        className: "border-green-600/0 bg-green-600/20 text-green-600",
      },
      {
        variant: "negative",
        theme: "soft",
        className: "border-red-600/0 bg-red-600/20 text-red-600",
      },
      {
        variant: "warning",
        theme: "soft",
        className: "border-yellow-600/0 bg-yellow-600/20 text-yellow-600",
      },
    ],
    defaultVariants: {
      variant: "secondary",
      theme: "solid",
      size: "default",
    },
  },
);

export interface BadgeThemeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeThemeVariants> {}

function BadgeTheme({
  className,
  variant,
  size,
  theme,
  ...props
}: BadgeThemeProps) {
  return (
    <div
      className={cn(badgeThemeVariants({ variant, size, theme }), className)}
      {...props}
    />
  );
}

export { BadgeTheme, badgeThemeVariants };
