import { Metadata } from "next";

import { Container } from "@/components/layout/container/container";

import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Docs",
  description: "Description Docs.",
};

export default function DocsPage() {
  return (
    <Container className="py-4">
      <Typography.H1>Docs</Typography.H1>
    </Container>
  );
}
