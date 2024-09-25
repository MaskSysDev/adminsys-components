"use client";

import { MenuIcon, X } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";
import { DrawerMenu } from "@/components/ui/drawer-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

import { LogoLink } from "../logo/logo-link";
import { ToggleTheme } from "../toggle/toggle-theme";
import { NavMain } from "./inc/nav-main";

type NavMobileProps = {
  className?: string;
};
export const NavMobile = ({ className }: NavMobileProps) => {
  return (
    <DrawerMenu.Root direction={"right"}>
      <DrawerMenu.Trigger
        className={cn(
          buttonVariants({
            variant: "ghost",
            size: "icon",
          }),
          "text-muted-foreground",
          className,
        )}
      >
        <MenuIcon />
        <span className="sr-only">Menu</span>
      </DrawerMenu.Trigger>
      <DrawerMenu.Content className="ring-offset-background  focus-visible:outline-none">
        <DrawerMenu.Header className="flex h-16 items-start border-b">
          <DrawerMenu.Title className="flex w-full justify-between gap-2">
            <LogoLink />
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
          >
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </DrawerMenu.Close>
        </DrawerMenu.Header>
        <DrawerMenu.Description />
        <ScrollArea className="overflow-auto break-all p-4">
          <NavMain
            className="flex size-full flex-col items-start space-x-0 space-y-1 p-1"
            navbar={siteConfig.siteHeader}
          />
        </ScrollArea>
      </DrawerMenu.Content>
    </DrawerMenu.Root>
  );
};
