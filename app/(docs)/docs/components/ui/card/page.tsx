import { Metadata } from "next";
import Link from "next/link";

import { MoreVerticalIcon } from "lucide-react";

import { Container } from "@/components/layout/container/container";
import { CodeBlockWrapper } from "@/components/layout/wrapper/code-block-wrapper";

import { Button } from "@/components/ui/button";
import { CardTheme } from "@/components/ui/card-theme";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Card",
  description: "Description Card.",
};

export default function CardThemePage() {
  const cardThemeCode = `import { CardTheme } from "@/components/ui/card-theme";

export function Page() {
  return (
    <CardTheme.Root>
      <CardTheme.Content className="flex min-h-64 items-center justify-center gap-4">
        <CardTheme.Root className="max-w-md">
          <CardTheme.Header>
            <CardTheme.HeaderContent>
              <CardTheme.Title>Card Title</CardTheme.Title>
              <CardTheme.Description>
                Card Description
              </CardTheme.Description>
            </CardTheme.HeaderContent>
            <CardTheme.HeaderActions>
              <Button variant="ghost" size="icon">
                <MoreVerticalIcon />
              </Button>
            </CardTheme.HeaderActions>
          </CardTheme.Header>
          <CardTheme.Content>
            <p>Card content goes here.</p>
          </CardTheme.Content>
          <CardTheme.Footer>
            <CardTheme.FooterContent>
              <p>Footer content</p>
            </CardTheme.FooterContent>
            <CardTheme.FooterActions>
              <Button>Submit</Button>
            </CardTheme.FooterActions>
          </CardTheme.Footer>
        </CardTheme.Root>
      </CardTheme.Content>
    </CardTheme.Root>
  )
}`;

  return (
    <Container className="py-4">
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3 lg:gap-8">
        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
          <section className="mb-16">
            <span className="text-primary">UI</span>
            <Typography.H1>Card</Typography.H1>
            <Typography.Lead>
              Displays a card with header, content, and footer.
            </Typography.Lead>
          </section>

          <section id="card-theme" className="pt-16">
            <Typography.H2>CardTheme</Typography.H2>
            <Typography.P>
              The CardTheme component provides a flexible and customizable card
              layout with header, content, and footer sections.
            </Typography.P>
            <Tabs defaultValue="preview">
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="usage">Usage</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                <CardTheme.Root>
                  <CardTheme.Content className="flex min-h-64 items-center justify-center gap-4">
                    <CardTheme.Root className="max-w-md">
                      <CardTheme.Header>
                        <CardTheme.HeaderContent>
                          <CardTheme.Title>Card Title</CardTheme.Title>
                          <CardTheme.Description>
                            Card Description
                          </CardTheme.Description>
                        </CardTheme.HeaderContent>
                        <CardTheme.HeaderActions>
                          <Button variant="ghost" size="icon">
                            <MoreVerticalIcon />
                          </Button>
                        </CardTheme.HeaderActions>
                      </CardTheme.Header>
                      <CardTheme.Content>
                        <p>Card content goes here.</p>
                      </CardTheme.Content>
                      <CardTheme.Footer>
                        <CardTheme.FooterContent>
                          <p>Footer content</p>
                        </CardTheme.FooterContent>
                        <CardTheme.FooterActions>
                          <Button>Submit</Button>
                        </CardTheme.FooterActions>
                      </CardTheme.Footer>
                    </CardTheme.Root>
                  </CardTheme.Content>
                </CardTheme.Root>
              </TabsContent>
              <TabsContent value="usage">
                <CodeBlockWrapper
                  collapsible
                  title="page.tsx"
                  code={cardThemeCode}
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
                <Link href="#card-theme">CardTheme</Link>
              </Button>
            </CardTheme.Content>
          </CardTheme.Root>
        </div>
      </div>
    </Container>
  );
}
