import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

type SidebarLinkSubmenuProps = {
  id?: string;
  label: string;
  href: string;
  className?: string;
};

export const SidebarLinkSubmenu = ({
  id,
  label,
  href,
  className,
}: SidebarLinkSubmenuProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      id={id}
      href={href}
      className={cn(
        "group inline-block h-10 w-full items-center justify-center rounded px-4 py-2 ps-8 text-base font-semibold text-muted-foreground ring-offset-background transition-colors duration-300 ease-in-out hover:bg-transparent hover:text-foreground focus:text-foreground focus:outline-none focus-visible:text-foreground focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/5 data-[state=open]:bg-primary/5",
        isActive && "text-primary",
        className,
      )}
    >
      {label}
    </Link>
  );
};
