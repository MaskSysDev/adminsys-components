import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Logo } from "@/components/layout/logo/logo";
import { SidebarNavItem } from "@/components/layout/sidebar/inc/sidebar-nav-item";
import { SidebarNavUser } from "@/components/layout/sidebar/inc/sidebar-nav-user";

import { buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
} from "@/components/ui/sidebar";

export function AdminSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="min-h-14">
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
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="pb-8">
          <nav className="flex-1 space-y-2 pb-8">
            {siteConfig.adminSidebar.content.map((item) => (
              <SidebarItem key={item.id} className="mb-10">
                {item.contentTitle && (
                  <div className="px-1.5 text-sm font-medium text-muted-foreground/60">
                    {item.contentTitle}
                  </div>
                )}
                {item.linksSection.map((subitem) => (
                  <SidebarNavItem key={subitem.id} item={subitem} />
                ))}
              </SidebarItem>
            ))}
          </nav>
        </ScrollArea>
        <SidebarItem className="mt-auto gap-0">
          <SidebarLabel className="mb-2 text-muted-foreground/60">
            Help
          </SidebarLabel>
          {siteConfig.adminSidebar.support.map((item) => (
            <SidebarNavItem key={item.id} item={item} />
          ))}
        </SidebarItem>
      </SidebarContent>
      <SidebarFooter>
        <SidebarNavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
