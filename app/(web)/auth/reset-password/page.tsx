import { Metadata } from "next";

import { ResetPasswordForm } from "@/components/auth/form/reset-password-form";
import { CardAuthWrapper } from "@/components/auth/wrapper/card-auth-wrapper";

export const metadata: Metadata = {
  title: "ResetPassword",
  description: "Description ResetPassword.",
};

export default function ResetPasswordPage() {
  return (
    <div className="container mx-auto flex items-center justify-center py-8 md:py-16">
      <CardAuthWrapper headerLabel="Enter a new password">
        <ResetPasswordForm />
      </CardAuthWrapper>
    </div>
  );
}
