import Link from "next/link";

import { cn } from "@/lib/utils";

import { Container } from "@/components/layout/container/container";
import { Logo } from "@/components/layout/logo/logo";
import { NavMain } from "@/components/layout/navbar/inc/nav-main";
import { NavMobile } from "@/components/layout/navbar/nav-mobile";
import { ToggleTheme } from "@/components/layout/toggle/toggle-theme";

import { Button, buttonVariants } from "@/components/ui/button";

type SiteHeaderProps = {
  siteHeader: {
    name: string;
    position?: string;
    links: {
      id: string;
      label: string;
      href: string;
      disabled: boolean;
    }[];
  };
};

export const SiteHeader = ({ siteHeader }: SiteHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95">
      <Container className="flex h-14 items-center justify-center">
        <div className="relative flex w-full items-center justify-between">
          {/* Left */}
          <div className="flex items-center space-x-2">
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "flex items-center space-x-2 px-0 hover:bg-transparent",
              )}
            >
              <Logo />
            </Link>
          </div>

          {/* Center */}
          <div
            className={cn("flex w-full items-center justify-start px-4", {
              "justify-start":
                siteHeader.position === "start" ||
                siteHeader.position === "left",
              "justify-center": siteHeader.position === "center",
              "justify-end":
                siteHeader.position === "end" ||
                siteHeader.position === "right",
            })}
          >
            <NavMain navbar={siteHeader} className="hidden md:flex" />
          </div>

          {/* Right */}
          <div className="flex flex-1 items-center justify-end space-x-2">
            <Button size="sm" asChild>
              <Link href="/auth/sign-in">Sign in</Link>
            </Button>
            <ToggleTheme className="hidden md:flex" />
            <NavMobile className="flex md:hidden" />
          </div>
        </div>
      </Container>
    </header>
  );
};
