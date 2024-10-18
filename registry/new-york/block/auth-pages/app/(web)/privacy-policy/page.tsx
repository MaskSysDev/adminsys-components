import { Metadata } from "next";

import { Container } from "@/components/layout/container/container";

import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "PrivacyPolicy",
  description: "Description PrivacyPolicy.",
};

export default function PrivacyPolicyPage() {
  return (
    <Container className="py-4">
      <Typography.H1>PrivacyPolicy</Typography.H1>
    </Container>
  );
}
