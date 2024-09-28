import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonThemeVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md border border-border text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        /* Color */
        primary:
          "bg-primary text-primary-foreground/90 hover:bg-primary/90 hover:text-primary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground/90 hover:bg-secondary/80 hover:text-secondary-foreground",
        muted:
          "bg-muted text-muted-foreground/90 hover:bg-muted/80 hover:text-muted-foreground",
        accent:
          "bg-accent text-accent-foreground/90 hover:bg-accent/80 hover:text-accent-foreground",

        /* Color System */
        info: "bg-blue-600 text-zinc-200 hover:bg-blue-700 hover:text-white focus-visible:ring-blue-600",
        positive:
          "bg-green-600 text-zinc-200 hover:bg-green-700 hover:text-white focus-visible:ring-green-600",
        negative:
          "bg-red-600 text-zinc-200 hover:bg-red-700 hover:text-white focus-visible:ring-red-600",
        warning:
          "bg-yellow-600 text-zinc-200 hover:bg-yellow-700 hover:text-white focus-visible:ring-yellow-600",
      },
      theme: {
        solid: "border-border/0",
        outline: "bg-transparent",
        ghost:
          "bg-opacity/0 hover:bg-opacity/20 border-border/0 bg-transparent",
        soft: "",
        link: "border/0 bg-opacity/0 hover:bg-opacity/0 h-auto bg-transparent p-0 text-base text-blue-600 underline-offset-4 hover:bg-transparent hover:text-blue-700 hover:underline",
      },
      size: {
        default: "h-10 gap-1 px-4 py-2 text-base",
        sm: "h-8 gap-0.5 px-3 py-2 text-sm",
        lg: "h-12 gap-2 px-6 py-2 text-lg",
        xl: "h-14 gap-4 px-8 py-2 text-2xl",
      },
      icon: {
        true: "aspect-square p-2",
      },
    },
    compoundVariants: [
      /*
       * Icon Compound
       */
      {
        icon: true,
        size: "sm",
        className: "p-1",
      },
      /*
       * Outline Compound
       */
      {
        variant: "primary",
        theme: "outline",
        className: "border-primary/30 text-primary/90 hover:text-white",
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
        className:
          "border-blue-600/30 text-blue-600 hover:border-blue-600 hover:bg-blue-600",
      },
      {
        variant: "positive",
        theme: "outline",
        className:
          "border-green-600/30 text-green-600 hover:border-green-600 hover:bg-green-600",
      },
      {
        variant: "negative",
        theme: "outline",
        className:
          "border-red-600/30 text-red-600 hover:border-red-600 hover:bg-red-600",
      },
      {
        variant: "warning",
        theme: "outline",
        className:
          "border-yellow-600/30 text-yellow-600 hover:border-yellow-600 hover:bg-yellow-600",
      },

      /**
       * * Ghost Compound
       */
      {
        variant: "primary",
        theme: "ghost",
        className: "text-primary hover:bg-primary/20 hover:text-primary",
      },
      {
        variant: "secondary",
        theme: "ghost",
        className:
          "text-secondary-/90 hover:bg-secondary/20 hover:text-secondary-foreground",
      },
      {
        variant: "muted",
        theme: "ghost",
        className:
          "text-muted-foreground/90 hover:bg-muted/20 hover:text-muted-foreground",
      },
      {
        variant: "accent",
        theme: "ghost",
        className:
          "text-accent-foreground/90 hover:bg-accent/20 hover:text-accent-foreground",
      },
      {
        variant: "info",
        theme: "ghost",
        className: "text-blue-600 hover:bg-blue-600/20 hover:text-blue-600",
      },
      {
        variant: "positive",
        theme: "ghost",
        className: "text-green-600 hover:bg-green-600/20 hover:text-green-600",
      },
      {
        variant: "negative",
        theme: "ghost",
        className: "text-red-600 hover:bg-red-600/20 hover:text-red-600",
      },
      {
        variant: "warning",
        theme: "ghost",
        className:
          "text-yellow-600 hover:bg-yellow-600/20 hover:text-yellow-600",
      },

      /**
       * * Soft Compound
       */
      {
        variant: "primary",
        theme: "soft",
        className:
          "border-primary/0 bg-primary/20 text-primary hover:text-white",
      },
      {
        variant: "secondary",
        theme: "soft",
        className:
          "border-secondary/0 bg-secondary/20 text-secondary-foreground hover:text-secondary-foreground",
      },
      {
        variant: "muted",
        theme: "soft",
        className:
          "border-muted/0 bg-muted/20 text-muted-foreground hover:text-muted-foreground",
      },
      {
        variant: "accent",
        theme: "soft",
        className:
          "border-accent/0 bg-accent/20 text-accent-foreground hover:text-accent-foreground",
      },
      {
        variant: "info",
        theme: "soft",
        className:
          "border-blue-600/0 bg-blue-600/20 text-blue-600 hover:bg-blue-600",
      },
      {
        variant: "positive",
        theme: "soft",
        className:
          "border-green-600/0 bg-green-600/20 text-green-600 hover:bg-green-600",
      },
      {
        variant: "negative",
        theme: "soft",
        className:
          "border-red-600/0 bg-red-600/20 text-red-600 hover:bg-red-600",
      },
      {
        variant: "warning",
        theme: "soft",
        className:
          "border-yellow-600/0 bg-yellow-600/20 text-yellow-600 hover:bg-yellow-600",
      },

      /**
       * * Link Compound
       */
      {
        variant: "primary",
        theme: "link",
        className: "h-fit p-0 text-primary hover:text-primary/80",
      },
      {
        variant: "secondary",
        theme: "link",
        className:
          "h-fit p-0 text-secondary-foreground hover:text-secondary-foreground/80",
      },
      {
        variant: "muted",
        theme: "link",
        className:
          "h-fit p-0 text-muted-foreground hover:text-muted-foreground/80",
      },
      {
        variant: "accent",
        theme: "link",
        className:
          "h-fit p-0 text-accent-foreground hover:text-accent-foreground/80",
      },
      {
        variant: "info",
        theme: "link",
        className: "h-fit p-0 text-blue-600 hover:text-blue-700",
      },
      {
        variant: "positive",
        theme: "link",
        className: "h-fit p-0 text-green-600 hover:text-green-700",
      },
      {
        variant: "negative",
        theme: "link",
        className: "h-fit p-0 text-red-600 hover:text-red-700",
      },
      {
        variant: "warning",
        theme: "link",
        className: "h-fit p-0 text-yellow-600 hover:text-yellow-700",
      },
    ],
    defaultVariants: {
      variant: "primary",
      theme: "solid",
      size: "default",
    },
  },
);

interface ButtonThemeLoadingProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  isLoading: boolean;
}

const ButtonThemeLoading = React.forwardRef<
  HTMLElement,
  ButtonThemeLoadingProps
>(({ isLoading, className, ...props }, ref) => {
  return (
    <>
      {isLoading ? (
        <span
          aria-label="loading"
          className={cn(
            "absolute inline-block size-4 min-w-max animate-spin rounded-full border-[3px] border-current border-t-transparent text-foreground",
            className,
          )}
          ref={ref}
          {...props}
        >
          <span className="sr-only">Loading...</span>
        </span>
      ) : null}
    </>
  );
});
ButtonThemeLoading.displayName = "ButtonThemeLoading";

export interface ButtonThemeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonThemeVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const ButtonTheme = React.forwardRef<HTMLButtonElement, ButtonThemeProps>(
  (
    {
      children,
      className,
      variant,
      theme,
      size,
      icon,
      isLoading = false,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonThemeVariants({ variant, theme, size, icon, className }),
          isLoading && "text-transparent opacity-50",
        )}
        ref={ref}
        {...props}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <ButtonThemeLoading isLoading={isLoading} />
            {children}
          </>
        ) : (
          children
        )}
      </Comp>
    );
  },
);
ButtonTheme.displayName = "ButtonTheme";

export { ButtonTheme, buttonThemeVariants };
