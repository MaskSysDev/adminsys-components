"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MenuIcon, X } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Logo } from "@/components/layout/logo/logo";
import { ToggleTheme } from "@/components/layout/toggle/toggle-theme";

import { Button, buttonVariants } from "@/components/ui/button";
import { DrawerMenu } from "@/components/ui/drawer-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

type NavMobileProps = {
  className?: string;
};
export const NavMobile = ({ className }: NavMobileProps) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <DrawerMenu.Root
      onClose={() => setIsOpen(!isOpen)}
      open={isOpen}
      direction={"right"}
    >
      <DrawerMenu.Trigger
        className={cn(
          buttonVariants({
            variant: "ghost",
            size: "icon",
          }),
          "text-muted-foreground",
          className,
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuIcon />
        <span className="sr-only">Menu</span>
      </DrawerMenu.Trigger>
      <DrawerMenu.Content className="ring-offset-background  focus-visible:outline-none">
        <DrawerMenu.Header className="flex h-16 items-start border-b">
          <DrawerMenu.Title className="flex w-full justify-between gap-2">
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "flex items-center space-x-2 px-0 hover:bg-transparent",
              )}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Logo />
            </Link>
            <ToggleTheme className="me-6" />
          </DrawerMenu.Title>
          <DrawerMenu.Close
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "icon",
              }),
              "absolute right-4 top-4 size-6 text-muted-foreground",
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </DrawerMenu.Close>
        </DrawerMenu.Header>
        <DrawerMenu.Description />
        <ScrollArea className="overflow-auto break-all p-4">
          <NavigationMenu>
            <NavigationMenuList className="flex size-full flex-col items-start space-x-0 space-y-1 p-1">
              {siteConfig.siteHeader.links.map((item) => (
                <NavigationMenuItem
                  className="flex items-center text-lg font-medium text-muted-foreground md:block"
                  key={item.id}
                >
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-lg hover:bg-transparent"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <Link
                      className={cn(
                        pathname === item.href ? "text-primary" : null,
                      )}
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </Button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </ScrollArea>
      </DrawerMenu.Content>
    </DrawerMenu.Root>
  );
};
