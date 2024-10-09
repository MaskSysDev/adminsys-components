import Link from "next/link";

import { LogOut, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const DropdownUser = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar className="size-9">
            <AvatarImage
              src="/assets/images/avatar/avatar.jpg"
              alt="Avatar Image"
            />
            <AvatarFallback>
              <User className="size-6" />
            </AvatarFallback>
          </Avatar>
          <span className="sr-only">User Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm transition-all">
            <Avatar className="size-7 rounded-md">
              <AvatarImage
                src="/assets/images/avatar/avatar.jpg"
                alt="Avatar User"
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
        <DropdownMenuItem asChild>
          <Link href="/settings/account">Account</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/admin/dashboard">Admin Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2">
          <LogOut className="size-4 text-muted-foreground" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
