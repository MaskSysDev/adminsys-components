import { Metadata } from "next";

import { MoreVerticalIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CardTheme } from "@/components/ui/card-theme";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "CardTheme",
  description: "Description CardTheme.",
};

export default function CardThemePage() {
  return (
    <div className="container mx-auto p-6">
      <Typography.H1 className="text-2xl font-semibold lg:text-3xl">
        CardTheme
      </Typography.H1>
      <Typography.Lead>
        The CardTheme component provides a flexible and customizable card layout
        with header, content, and footer sections.
      </Typography.Lead>
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
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
      </Tabs>
    </div>
  );
}
