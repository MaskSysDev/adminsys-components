import { Metadata } from "next";

import { Container } from "@/components/layout/container/container";

import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Terms",
  description: "Description Terms.",
};

export default function TermsPage() {
  return (
    <Container className="py-4">
      <Typography.H1>Terms</Typography.H1>
    </Container>
  );
}
