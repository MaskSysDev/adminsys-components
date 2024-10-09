import { Metadata } from "next";

import { Container } from "@/components/layout/container/container";
import { ContactForm } from "@/components/layout/form/contact-form";

import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Contact",
  description: "Description Contact.",
};

export default function ContactPage() {
  return (
    <Container className="py-4">
      <Typography.H1 className="text-center">Contact</Typography.H1>
      <Card className="mx-auto max-w-xl pt-4">
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </Container>
  );
}
