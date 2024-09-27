import { Metadata } from "next";

import { Container } from "@/components/layout/container/container";

import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "About",
  description: "Description About.",
};

export default function AboutPage() {
  return (
    <Container>
      <Typography.H1>About</Typography.H1>
    </Container>
  );
}
