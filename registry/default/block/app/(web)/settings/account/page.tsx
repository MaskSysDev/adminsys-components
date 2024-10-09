import { Metadata } from "next";

import { AccountForm } from "@/components/auth/form/account-form";
import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Account",
  description: "Description Account.",
};

export default function AccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <Typography.H3>Account</Typography.H3>
        <Typography.Muted>Update your account settings.</Typography.Muted>
      </div>
      <Separator />
      <AccountForm />
    </div>
  );
}
