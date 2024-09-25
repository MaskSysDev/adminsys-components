import { Metadata } from "next";

import { CardTheme } from "@/components/ui/card-theme";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Typography",
  description: "Description Typography.",
};

export default function TypographyPage() {
  return (
    <div className="container mx-auto p-6">
      <Typography.H1 className="text-2xl font-semibold lg:text-3xl">
        Typography
      </Typography.H1>
      <Typography.Lead>
        The Typography component provides consistent text styles across your
        application.
      </Typography.Lead>
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
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
      </Tabs>
    </div>
  );
}
