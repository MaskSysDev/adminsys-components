import Link from "next/link";

import { ChevronsUpDown, LogOut, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SidebarNavUser() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full rounded-md outline-none ring-ring hover:bg-accent focus-visible:ring-2 data-[state=open]:bg-accent">
        <div className="flex items-center gap-2 px-2 py-1.5 text-left text-sm transition-all">
          <Avatar className="size-7 rounded-md border">
            <AvatarImage
              src="/assets/images/avatar/avatar.jpg"
              alt="Avatar Image"
              className="animate-in fade-in-50 zoom-in-90"
            />
            <AvatarFallback className="rounded-md">
              <User className="size-6" />
            </AvatarFallback>
          </Avatar>
          <div className="grid flex-1 leading-none">
            <div className="font-medium">User 01</div>
            <div className="overflow-hidden text-xs text-muted-foreground">
              <div className="line-clamp-1">user01@email.com</div>
            </div>
          </div>
          <ChevronsUpDown className="ml-auto mr-0.5 size-4 text-muted-foreground/50" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56"
        align="end"
        side="right"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm transition-all">
            <Avatar className="size-7 rounded-md">
              <AvatarImage
                src="/assets/images/avatar/avatar.jpg"
                alt="Avatar Image"
              />
              <AvatarFallback>
                <User className="size-6" />
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1">
              <div className="font-medium">User 01</div>
              <div className="overflow-hidden text-xs text-muted-foreground">
                <div className="line-clamp-1">user01@email.com</div>
              </div>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="gap-2">
            <Link href="/account">Account</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2">
          <LogOut className="size-4 text-muted-foreground" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
