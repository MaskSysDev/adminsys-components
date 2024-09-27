"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";

type SidebarLinkSingleProps = {
  id?: string;
  label: string;
  href: string;
  className?: string;
};

export const SidebarLinkSingle = ({
  id,
  label,
  href,
  className,
}: SidebarLinkSingleProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      id={id}
      href={href}
      className={cn(
        buttonVariants({
          variant: "ghost",
        }),
        "group inline-block h-10 w-full items-center justify-center text-base font-semibold text-muted-foreground transition-colors duration-300 ease-in-out hover:bg-primary/5 focus-visible:text-foreground data-[active]:bg-primary/5 data-[state=open]:bg-primary/5",
        isActive && "bg-primary/5 text-primary",
        className,
      )}
    >
      {label}
    </Link>
  );
};
