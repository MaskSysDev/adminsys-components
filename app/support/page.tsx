import { Metadata } from "next";

import { Container } from "@/components/layout/container/container";

import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Support",
  description: "Description Support.",
};

export default function SupportPage() {
  return (
    <Container>
      <Typography.H1>Support</Typography.H1>
    </Container>
  );
}
