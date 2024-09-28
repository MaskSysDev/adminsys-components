import { Metadata } from "next";

import { CodeBlock } from "@/components/layout/code/code-block";
import { Container } from "@/components/layout/container/container";

import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Get Starter",
  description: "Description Get Starter.",
};

export default function GetStarterPage() {
  return (
    <Container className="py-4">
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3 lg:gap-8">
        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
          <section className="mb-16">
            <span className="text-primary">Starter</span>
            <Typography.H1>Get Starter</Typography.H1>
            <Typography.Lead>Start project Nextjs.</Typography.Lead>
          </section>

          <section className="pt-16">
            <Typography.H2>Install Nextjs</Typography.H2>

            <Typography.P>
              Nextjs is a React framework for building full-stack web
              applications. You use React Components to build user interfaces,
              and Nextjs for additional features and optimizations.
            </Typography.P>
            <CodeBlock code={"pnpm dlx create-next-app@latest"} language="sh" />
          </section>

          <section className="pt-16">
            <Typography.H2>Shadcn</Typography.H2>

            <Typography.P>
              The init command installs dependencies, adds the cn util,
              configures tailwind.config.js, and CSS variables for the project.
            </Typography.P>
            <CodeBlock code={"pnpm dlx shadcn@latest init"} language="sh" />
          </section>
        </div>

        <div className="grid auto-rows-max items-start gap-4 lg:gap-8"></div>
      </div>
    </Container>
  );
}
