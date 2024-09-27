import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva("px-4", {
  variants: {
    center: {
      true: "mx-auto",
    },
    size: {
      sm: "container max-w-screen-sm",
      md: "container max-w-screen-md",
      lg: "container max-w-screen-lg",
      xl: "container max-w-screen-xl",
      "2xl": "container max-w-screen-2xl",
      full: "w-full",
    },
  },
  defaultVariants: {
    size: "xl",
    center: true,
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

function Container({ className, size, center, ...props }: ContainerProps) {
  return (
    <div
      className={cn(containerVariants({ size, center }), className)}
      {...props}
    />
  );
}

export { Container, containerVariants };
