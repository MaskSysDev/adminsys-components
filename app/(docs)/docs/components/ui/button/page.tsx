import { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container/container";
import { CodeBlockWrapper } from "@/components/layout/wrapper/code-block-wrapper";

import { Button } from "@/components/ui/button";
import { ButtonTheme } from "@/components/ui/button-theme";
import { CardTheme } from "@/components/ui/card-theme";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Button",
  description: "Description Button.",
};

export default function BadgeThemePage() {
  const buttonThemeCode = `import { ButtonTheme } from "@/components/ui/button-theme";

export function Page() {
  return <ButtonTheme>Button</ButtonTheme>
}`;

  return (
    <Container className="py-4">
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3 lg:gap-8">
        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
          <section className="mb-16">
            <span className="text-primary">UI</span>
            <Typography.H1>Button</Typography.H1>
            <Typography.Lead>
              Displays a button or a component that looks like a button.
            </Typography.Lead>
          </section>

          <section id="button-theme" className="pt-16">
            <Typography.H2>ButtonTheme</Typography.H2>
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
                  <CardTheme.Content className="flex min-h-64 flex-wrap items-center justify-center gap-4">
                    <ButtonTheme variant="primary">Button</ButtonTheme>
                    <ButtonTheme variant="primary" theme="outline">
                      Button
                    </ButtonTheme>
                    <ButtonTheme variant="primary" theme="soft">
                      Button
                    </ButtonTheme>
                    <ButtonTheme variant="primary" theme="ghost">
                      Button
                    </ButtonTheme>
                    <ButtonTheme variant="primary" theme="link">
                      Button
                    </ButtonTheme>
                    <ButtonTheme isLoading variant="primary">
                      Button
                    </ButtonTheme>
                    <ButtonTheme asChild variant="primary" theme="link">
                      <Link href="/">Button</Link>
                    </ButtonTheme>
                  </CardTheme.Content>
                </CardTheme.Root>
              </TabsContent>
              <TabsContent value="usage">
                <CodeBlockWrapper
                  title="page.tsx"
                  code={buttonThemeCode}
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
                <Link href="#button-theme">ButtonTheme</Link>
              </Button>
            </CardTheme.Content>
          </CardTheme.Root>
        </div>
      </div>
    </Container>
  );
}
