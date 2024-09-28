"use client";

import Link from "next/link";

import { toast } from "@/hooks/use-toast-theme";

import { Container } from "@/components/layout/container/container";
import { CodeBlockWrapper } from "@/components/layout/wrapper/code-block-wrapper";

import { Button } from "@/components/ui/button";
import { CardTheme } from "@/components/ui/card-theme";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";

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
            <Typography.H1>Toast</Typography.H1>
            <Typography.Lead>
              A succinct message that is displayed temporarily.
            </Typography.Lead>
          </section>

          <section id="badge-theme" className="pt-16">
            <Typography.H2>ToastTheme</Typography.H2>
            <Typography.P>
              Displays a toast or a component that looks like a toast.
            </Typography.P>
            <Tabs defaultValue="preview">
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="usage">Usage</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <CardTheme.Root>
                  <CardTheme.Content className="flex min-h-64 items-center justify-center gap-4">
                    <Button
                      variant="outline"
                      onClick={() => {
                        toast({
                          title: "Toast Title ",
                          description: "Description Toast.",
                          variant: "positive",
                        });
                      }}
                    >
                      Toaster
                    </Button>
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
    </Container>
  );
}
