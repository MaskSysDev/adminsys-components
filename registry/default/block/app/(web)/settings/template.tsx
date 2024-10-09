import { Metadata } from "next";

import { siteConfig } from "@/config/site";

import { Container } from "@/components/layout/container/container";

import { SidebarSettings } from "@/components/auth/sidebar/sidebar-settings";
import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <Container className="py-4">
      <Typography.H1>Account</Typography.H1>
      <Typography.Lead>Manage your account.</Typography.Lead>

      <Separator className="my-6" />

      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className=" space-y-4 lg:w-1/5">
          <SidebarSettings
            items={siteConfig.sidebarAccount.content[0].linksSection}
          />
        </aside>
        <div className="w-full flex-1">{children}</div>
      </div>
    </Container>
  );
}
