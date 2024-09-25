import { Metadata } from "next";

import { BadgeTheme } from "@/components/ui/badge-theme";
import { CardTheme } from "@/components/ui/card-theme";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "BadgeTheme",
  description: "Description BadgeTheme.",
};

export default function BadgeThemePage() {
  return (
    <div className="container mx-auto p-6">
      <Typography.H1 className="text-2xl font-semibold lg:text-3xl">
        BadgeTheme
      </Typography.H1>
      <Typography.Lead>
        Displays a badge or a component that looks like a badge.
      </Typography.Lead>
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <CardTheme.Root>
            <CardTheme.Content className="flex min-h-64 items-center justify-center gap-4">
              <BadgeTheme variant="primary">Badge</BadgeTheme>
              <BadgeTheme variant="primary" theme="outline">
                Badge
              </BadgeTheme>
              <BadgeTheme variant="primary" theme="soft">
                Badge
              </BadgeTheme>
              <BadgeTheme variant="primary" theme="link">
                Badge
              </BadgeTheme>
            </CardTheme.Content>
          </CardTheme.Root>
        </TabsContent>
      </Tabs>
    </div>
  );
}
