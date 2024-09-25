import { Metadata } from "next";

import { ForgotPasswordForm } from "@/components/auth/form/forgot-password-form";
import { CardAuthWrapper } from "@/components/auth/wrapper/card-auth-wrapper";

export const metadata: Metadata = {
  title: "ForgotPassword",
  description: "Description ForgotPassword.",
};

export default function ForgotPasswordPage() {
  return (
    <div className="container mx-auto flex items-center justify-center py-8 md:py-16">
      <CardAuthWrapper headerLabel="Forgot your password?">
        <ForgotPasswordForm />
      </CardAuthWrapper>
    </div>
  );
}
