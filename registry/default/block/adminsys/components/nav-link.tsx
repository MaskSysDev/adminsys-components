"use client";

import type { ReactNode } from "react";
import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}
export const NavLink = ({
  href,
  children,
}: NavLinkProps): React.JSX.Element => {
  const pathname = usePathname();

  return (
    <Button
      asChild
      variant="ghost"
      size="sm"
      className="text-lg hover:bg-transparent"
    >
      <Link
        className={cn(pathname === href ? "text-primary" : null)}
        href={href}
      >
        {children}
      </Link>
    </Button>
  );
};
