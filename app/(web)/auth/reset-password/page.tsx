import { Metadata } from "next";

import { Container } from "@/components/layout/container/container";

import { ResetPasswordForm } from "@/components/auth/form/reset-password-form";
import { CardAuthWrapper } from "@/components/auth/wrapper/card-auth-wrapper";

export const metadata: Metadata = {
  title: "ResetPassword",
  description: "Description ResetPassword.",
};

export default function ResetPasswordPage() {
  return (
    <Container className="flex items-center justify-center py-8 md:py-16">
      <CardAuthWrapper headerLabel="Enter a new password">
        <ResetPasswordForm />
      </CardAuthWrapper>
    </Container>
  );
}
