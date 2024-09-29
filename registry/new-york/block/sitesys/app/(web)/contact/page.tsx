import { Metadata } from "next";

import { Container } from "@/components/layout/container/container";

import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Contact",
  description: "Description Contact.",
};

export default function ContactPage() {
  return (
    <Container className="py-4">
      <Typography.H1 className="text-center">Contact</Typography.H1>
    </Container>
  );
}
