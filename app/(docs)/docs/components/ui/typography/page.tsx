import { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container/container";
import { CodeBlockWrapper } from "@/components/layout/wrapper/code-block-wrapper";

import { Button } from "@/components/ui/button";
import { CardTheme } from "@/components/ui/card-theme";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Typography",
  description: "Description Typography.",
};

export default function TypographyPage() {
  const typographyCode = `import { Typography } from "@/components/ui/typography";

export function Page() {
  return (
    <>
      <Typography.H1>This line is an H1</Typography.H1>

      <Typography.H2>This line is an H2</Typography.H2>

      <Typography.H3>This line is an H3</Typography.H3>

      <Typography.H4>This line is an H4</Typography.H4>

      <Typography.P>This line is an P</Typography.P>

      <Typography.Blockquote>
        This line is an Blockquote
      </Typography.Blockquote>

      <Typography.InlineCode>
        This line is an InlineCode
      </Typography.InlineCode>

      <Typography.Lead>This line is an Lead</Typography.Lead>

      <Typography.Large>This line is an Large</Typography.Large>

      <Typography.Small>This line is an Small</Typography.Small>

      <Typography.Muted>This line is an Muted</Typography.Muted>
    </>
  )
}`;

  return (
    <Container className="py-4">
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3 lg:gap-8">
        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
          <section className="mb-16">
            <span className="text-primary">UI</span>
            <Typography.H1>Typography</Typography.H1>
            <Typography.Lead>
              The Typography component provides consistent text styles across
              your application.
            </Typography.Lead>
          </section>

          <section id="typography" className="pt-16">
            <Typography.H2>Typography</Typography.H2>
            <Typography.P>Styles for headings and paragraphs.</Typography.P>
            <Tabs defaultValue="preview">
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="usage">Usage</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <CardTheme.Root>
                  <CardTheme.Content className="min-h-64">
                    <Typography.H1>This line is an H1</Typography.H1>

                    <Typography.H2>This line is an H2</Typography.H2>

                    <Typography.H3>This line is an H3</Typography.H3>

                    <Typography.H4>This line is an H4</Typography.H4>

                    <Typography.P>This line is an P</Typography.P>

                    <Typography.Blockquote>
                      This line is an Blockquote
                    </Typography.Blockquote>

                    <Typography.InlineCode>
                      This line is an InlineCode
                    </Typography.InlineCode>

                    <Typography.Lead>This line is an Lead</Typography.Lead>

                    <Typography.Large>This line is an Large</Typography.Large>

                    <Typography.Small>This line is an Small</Typography.Small>

                    <Typography.Muted>This line is an Muted</Typography.Muted>
                  </CardTheme.Content>
                </CardTheme.Root>
              </TabsContent>
              <TabsContent value="usage">
                <CodeBlockWrapper
                  collapsible
                  title="page.tsx"
                  code={typographyCode}
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
                  <Link href="#typography">Typography</Link>
                </Button>
              </CardTheme.Content>
            </CardTheme.Root>
          </div>
        </div>
      </div>
    </Container>
  );
}
