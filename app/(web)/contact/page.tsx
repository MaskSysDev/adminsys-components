import { Metadata } from "next";

import { Container } from "@/components/layout/container/container";
import { ContactForm } from "@/components/layout/form/contact-form";

import { CardAuthWrapper } from "@/components/auth/wrapper/card-auth-wrapper";
import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Contact",
  description: "Description Contact.",
};

export default function ContactPage() {
  return (
    <Container>
      <Typography.H1 className="text-center">Contact</Typography.H1>
      <CardAuthWrapper headerLabel="Contact Us">
        <ContactForm />
      </CardAuthWrapper>
    </Container>
  );
}
