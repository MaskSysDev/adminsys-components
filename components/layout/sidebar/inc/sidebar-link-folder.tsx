"use client";

import { useState } from "react";

import { usePathname } from "next/navigation";

import { ChevronLeft } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  LinkFolder,
  LinkFolderRoot,
} from "@/components/layout/sidebar/inc/link-folder-root";
import { SidebarLinkSubmenu } from "@/components/layout/sidebar/inc/sidebar-link-submenu";

type SidebarLinkFolderProps = {
  id?: string;
  label: string;
  path: string;
  className?: string;
  items: {
    id: string;
    label: string;
    href: string;
    path: string;
    items: never[];
  }[];
};

export const SidebarLinkFolder = ({
  id,
  label,
  path,
  items,
  className,
}: SidebarLinkFolderProps) => {
  const pathname = usePathname();
  const isActive = pathname.includes(path);
  const [showSubmenu, setShowSubmenu] = useState(isActive);

  const toggleSidebar = () => {
    setShowSubmenu(!showSubmenu);
  };

  return (
    <LinkFolderRoot>
      <LinkFolder onClick={toggleSidebar}>
        <div className="group flex w-full items-center">
          <div
            className={cn(
              "inline-block w-full cursor-pointer rounded-md px-4 py-2 font-semibold text-muted-foreground transition-colors duration-300 focus:outline-none group-hover:bg-primary/5 group-hover:text-foreground group-focus:text-foreground",
              className,
              {
                "bg-primary/5  text-primary": isActive,
                "rounded-b-none bg-primary/5 ": showSubmenu,
              },
            )}
          >
            {label}
          </div>
        </div>

        <span
          className={`pointer-events-none absolute right-0 flex items-center p-2.5 text-muted-foreground duration-200 group-hover:text-foreground ${
            showSubmenu && "-rotate-90"
          } transition-all`}
        >
          <ChevronLeft className="size-5" />
        </span>
      </LinkFolder>

      <div
        className={`overflow-y-hidden rounded-b-md bg-primary/5  transition-all ${
          showSubmenu ? "h-full" : "h-0"
        } `}
      >
        <ul id={id} className="flex flex-col">
          {items.map((link) => (
            <li key={link.id} className="group">
              <SidebarLinkSubmenu {...link} />
            </li>
          ))}
        </ul>
      </div>
    </LinkFolderRoot>
  );
};
