"use client";

import { siteConfig } from "@/config/site";

import { LogoLink } from "@/components/layout/logo/logo-link";
import { SidebarLinkSingle } from "@/components/layout/sidebar/inc/sidebar-link-single";
import { SidebarLinksSection } from "@/components/layout/sidebar/inc/sidebar-links-section";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
} from "@/components/ui/sidebar";

export function DocsSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="min-h-14">
        <LogoLink />
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea>
          {siteConfig.docsSidebar.content.map((item) => (
            <SidebarItem key={item.id} className="mb-10">
              {item.contentTitle && (
                <div className="px-1.5 text-sm font-medium text-muted-foreground/60">
                  {item.contentTitle}
                </div>
              )}
              <SidebarLinksSection linksSection={item.linksSection} />
            </SidebarItem>
          ))}
        </ScrollArea>
        <SidebarItem className="mt-auto gap-0">
          <SidebarLabel className="mb-2 text-muted-foreground/60">
            Help
          </SidebarLabel>
          {siteConfig.adminSidebar.support.map((item) => (
            <SidebarLinkSingle
              key={item.href}
              label={item.label}
              href={item.href}
              className="text-sm"
            />
          ))}
        </SidebarItem>
      </SidebarContent>
    </Sidebar>
  );
}
