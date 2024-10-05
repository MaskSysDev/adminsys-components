import { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container/container";
import { CodeBlockWrapper } from "@/components/layout/wrapper/code-block-wrapper";

import { BadgeTheme } from "@/components/ui/badge-theme";
import { Button } from "@/components/ui/button";
import { CardTheme } from "@/components/ui/card-theme";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "BadgeTheme",
  description: "Description BadgeTheme.",
};

export default function BadgeThemePage() {
  const badgeThemeCode = `import { BadgeTheme } from "@/components/ui/badge-theme";

export function Page() {
  return <BadgeTheme>Badge</BadgeTheme>
}`;

  return (
    <Container className="py-4">
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3 lg:gap-8">
        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
          <section className="mb-16">
            <span className="text-primary">UI</span>
            <Typography.H1>Badge</Typography.H1>
            <Typography.Lead>
              Displays a badge or a component that looks like a badge.
            </Typography.Lead>
          </section>

          <section id="badge-theme" className="pt-16">
            <Typography.H2>BadgeTheme</Typography.H2>
            <Typography.P>
              Displays a badge or a component that looks like a badge.
            </Typography.P>
            <Tabs defaultValue="preview">
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="usage">Usage</TabsTrigger>
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
                  </CardTheme.Content>
                </CardTheme.Root>
              </TabsContent>
              <TabsContent value="usage">
                <CodeBlockWrapper
                  title="page.tsx"
                  code={badgeThemeCode}
                  language="tsx"
                />
              </TabsContent>
            </Tabs>
          </section>
        </div>

        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
          <div className="sticky top-20 lg:block">
            <CardTheme.Root>
              <CardTheme.Content className="flex flex-wrap items-center text-muted-foreground lg:flex-col lg:items-start">
                <p>On this page:</p>
                <Button asChild variant="link" className="h-7 px-2">
                  <Link href="#badge-theme">BadgeTheme</Link>
                </Button>
              </CardTheme.Content>
            </CardTheme.Root>
          </div>
        </div>
      </div>
    </Container>
  );
}
