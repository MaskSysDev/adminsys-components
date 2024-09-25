import { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { CardTheme } from "@/components/ui/card-theme";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CodeBlockWrapper } from "../../code-block-wrapper";

export const metadata: Metadata = {
  title: "Typography",
  description: "Description Typography.",
};

export default function TypographyPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-4 text-3xl font-bold">Button Component</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        The Button component is used to trigger an action or event, such as
        submitting a form, opening a dialog, canceling an action, or performing
        a delete operation.
      </p>
      <Tabs defaultValue="preview">
        <TabsList className="mb-4">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="props">Props</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
          <CardTheme.Root>
            <CardTheme.Content className="flex min-h-64 items-center justify-center gap-4">
              <Button>Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </CardTheme.Content>
          </CardTheme.Root>
        </TabsContent>
        <TabsContent value="usage">
          <CodeBlockWrapper>
            <pre className="mb-4 rounded-md bg-muted p-4">
              <code>{`import { Button } from "@/components/ui/button"
              import { Button } from "@/components/ui/button"
              import { Button } from "@/components/ui/button"
              import { Button } from "@/components/ui/button"
              import { Button } from "@/components/ui/button"
              import { Button } from "@/components/ui/button"
              import { Button } from "@/components/ui/button"

export function MyComponent() {
  return <Button>Click me</Button>
}`}</code>
            </pre>
          </CodeBlockWrapper>
        </TabsContent>
        <TabsContent value="props">
          <h2 className="mb-4 text-2xl font-semibold">Props</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <code>variant</code>:{" "}
              {`"default" | "destructive" | "outline" |
              "secondary" | "ghost" | "link"`}
            </li>
            <li>
              <code>size</code>: {`"default" | "sm" | "lg" | "icon"`}
            </li>
            <li>
              <code>asChild</code>: boolean
            </li>
            <li>...HTML button attributes</li>
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  );
}
