import type { HTMLAttributes, JSX, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface FooterRootProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

const FooterRoot = ({
  className,
  children,
  ...props
}: FooterRootProps): JSX.Element => {
  return (
    <footer
      className={cn(
        "body-font static bottom-0 left-0 w-full border-t border-border/40 bg-background text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </footer>
  );
};
FooterRoot.displayName = "FooterRoot";

export { FooterRoot, type FooterRootProps };
