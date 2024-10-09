"use client";

import { NavItemProps } from "@/types/sidebar";

import { cn } from "@/lib/utils";

import { SidebarNavItem } from "@/components/layout/sidebar/inc/sidebar-nav-item";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: NavItemProps[];
}

export function SidebarSettings({
  className,
  items,
  ...props
}: SidebarNavProps) {
  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className,
      )}
      {...props}
    >
      {items.map((subitem) => (
        <SidebarNavItem key={subitem.href} item={subitem} />
      ))}
    </nav>
  );
}
