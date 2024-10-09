import { Metadata } from "next";

import { Container } from "@/components/layout/container/container";

import { FormAuth } from "@/components/auth/form/form-auth";

export const metadata: Metadata = {
  title: "SignIn",
  description: "Description SignIn.",
};

export default function SignInPage() {
  return (
    <Container className="flex items-center justify-center py-8 md:py-16">
      <FormAuth />
    </Container>
  );
}
