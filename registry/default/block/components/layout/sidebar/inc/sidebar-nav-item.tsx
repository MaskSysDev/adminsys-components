"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ChevronLeft } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

export type NavProps = {
  label: string;
  href: string;
  path: string;
};

export type NavItemProps = {
  label: string;
  href: string;
  path: string;
  items: NavProps[];
};

export const SidebarNavItem = ({
  item,
  className,
}: {
  item: NavItemProps;
  className?: string;
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isActiveSubmenu = pathname.includes(item.path);

  const [isOpen, setIsOpen] = useState(isActiveSubmenu);
  const hasSubItems = item.items && item.items.length > 0;

  return (
    <div id="sidebar-nav-item" className="group">
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start text-base text-muted-foreground hover:bg-primary/5",
          {
            "bg-primary/5 text-primary": isActiveSubmenu && isActive(item.href),
            "rounded-b-none bg-primary/5 ": hasSubItems && isOpen,
          },
          className,
        )}
        onClick={() => {
          if (hasSubItems) {
            setIsOpen(!isOpen);
          }
        }}
        asChild={!hasSubItems}
      >
        {hasSubItems ? (
          <>
            {item.label}
            <ChevronLeft
              className={cn(
                "ml-auto size-4 transition-transform",
                isOpen ? "-rotate-90" : "",
              )}
            />
          </>
        ) : (
          <Link href={item.href}>{item.label}</Link>
        )}
      </Button>
      {isOpen && hasSubItems && (
        <div className="space-y-1 rounded-b-md bg-primary/5">
          {item.items!.map((subItem, index) => (
            <Button
              key={index}
              variant="ghost"
              className={cn(
                "w-full justify-start pl-8 text-base text-muted-foreground hover:bg-transparent",
                isActive(subItem.href) &&
                  subItem.href === pathname &&
                  "text-primary",
              )}
              asChild
            >
              <Link href={subItem.href}>{subItem.label}</Link>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
