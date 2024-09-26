import { SidebarLinkFolder } from "@/components/layout/sidebar/inc/sidebar-link-folder";
import { SidebarLinkSingle } from "@/components/layout/sidebar/inc/sidebar-link-single";

type SidebarLinksSectionProps = {
  linksSection: {
    id: string;
    label: string;
    href: string;
    path: string;
    items: {
      id: string;
      label: string;
      href: string;
      path: string;
      items: never[];
    }[];
  }[];
};

export const SidebarLinksSection = ({
  linksSection,
}: SidebarLinksSectionProps) => {
  return (
    <ul className="flex max-h-screen flex-col">
      {linksSection.map((item) => (
        <li key={item.id} className="relative">
          {item.href && (
            <SidebarLinkSingle label={item.label} href={item.href} />
          )}
          {item.path && (
            <SidebarLinkFolder
              label={item.label}
              path={item.path}
              items={item.items}
            />
          )}
        </li>
      ))}
    </ul>
  );
};
