import Link from "next/link";

import { cn } from "@/lib/utils";

import { LogoDark } from "@/components/layout/logo/logo-dark";
import { LogoLight } from "@/components/layout/logo/logo-light";
import { LogoTheme } from "@/components/layout/logo/logo-theme";

import { buttonVariants } from "@/components/ui/button";

interface LogoLinkProps {
  theme?: "theme" | "dark" | "light";
}
export const LogoLink = ({ theme = "theme" }: LogoLinkProps) => {
  return (
    <Link
      href="/"
      className={cn(
        buttonVariants({
          variant: "ghost",
        }),
        "flex items-center space-x-2 px-0 hover:bg-transparent",
      )}
    >
      {theme === "theme" && <LogoTheme className="h-[40px] w-full" />}
      {theme === "light" && <LogoLight className="h-[40px] w-full" />}
      {theme === "dark" && <LogoDark className="h-[40px] w-full" />}
    </Link>
  );
};
