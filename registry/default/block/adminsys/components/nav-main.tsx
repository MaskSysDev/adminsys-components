"use client";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { NavLink } from "./nav-link";

interface NavMainProps {
  className?: string;
  navbar: {
    name: string;
    links: {
      id: string;
      label: string;
      href: string;
    }[];
  };
}

export const NavMain = ({ className, navbar }: NavMainProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList className={cn("flex items-center", className)}>
        {navbar.links.map((item) => (
          <NavigationMenuItem
            className="flex items-center text-lg font-medium text-muted-foreground md:block"
            key={item.id}
          >
            <NavLink href={item.href}>{item.label}</NavLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
