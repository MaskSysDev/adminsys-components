import React from "react";

import { cn } from "@/lib/utils";

export const LinkFolderRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props}>
    {children}
  </div>
));
LinkFolderRoot.displayName = "LinkFolderRoot";

export const LinkFolder = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("group relative flex justify-between", className)}
    {...props}
  >
    {children}
  </div>
));
LinkFolder.displayName = "LinkFolder";
