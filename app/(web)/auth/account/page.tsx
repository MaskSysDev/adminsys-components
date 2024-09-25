import { Metadata } from "next";

import { AccountForm } from "@/components/auth/form/account-form";
import { CardAuthWrapper } from "@/components/auth/wrapper/card-auth-wrapper";

export const metadata: Metadata = {
  title: "Account",
  description: "Description Account.",
};

export default function AccountPage() {
  return (
    <div className="container mx-auto flex items-center justify-center py-8 md:py-16">
      <CardAuthWrapper headerLabel="Account">
        <AccountForm />
      </CardAuthWrapper>
    </div>
  );
}
