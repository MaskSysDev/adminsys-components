import { Metadata } from "next";

import { Container } from "@/components/layout/container/container";

import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Get Starter",
  description: "Description Get Starter.",
};

export default function GetStarterPage() {
  return (
    <Container className="py-4">
      <Typography.H1>Get Starter</Typography.H1>
    </Container>
  );
}
