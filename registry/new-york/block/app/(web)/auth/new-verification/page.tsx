import { Metadata } from "next";

import { Container } from "@/components/layout/container/container";

import { NewVerificationForm } from "@/components/auth/form/new-verification-form";
import { CardAuthWrapper } from "@/components/auth/wrapper/card-auth-wrapper";

export const metadata: Metadata = {
  title: "NewVerification",
  description: "Description NewVerification.",
};

export default function NewVerificationPage() {
  return (
    <Container className="flex items-center justify-center py-8 md:py-16">
      <CardAuthWrapper headerLabel="Confirming your verification">
        <NewVerificationForm />
      </CardAuthWrapper>
    </Container>
  );
}
