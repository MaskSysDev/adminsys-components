import Link from "next/link";

import { ToggleTheme } from "@/components/layout/toggle/toggle-theme";

import { Button } from "@/components/ui/button";

import { LogoLink } from "../logo/logo-link";
import { NavMain } from "../navbar/inc/nav-main";
import { NavMobile } from "../navbar/nav-mobile";

type SiteHeaderProps = {
  siteHeader: {
    name: string;
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
      <div className="mx-auto flex h-14 items-center justify-center px-2">
        <div className="container relative flex w-full items-center justify-between">
          {/* Left */}
          <div className="flex items-center space-x-2">
            <LogoLink />
            <NavMain navbar={siteHeader} className="hidden md:flex" />
          </div>

          {/* Right */}
          <div className="flex flex-1 items-center justify-end space-x-2">
            <Button asChild size="sm">
              <Link href="/auth/sign-in">Sign-in</Link>
            </Button>
            <ToggleTheme className="hidden md:flex" />
            <NavMobile className="flex md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
