import { Metadata } from "next";

import { Container } from "@/components/layout/container/container";
import { NotFound } from "@/components/layout/not-found/not-found";

export const metadata: Metadata = {
  title: "NotFound",
  description: "Description NotFound.",
};

export default function NotFoundPage() {
  return (
    <Container>
      <NotFound labelAction="Go to Home" href="/" />
    </Container>
  );
}
