import { Metadata } from "next";

import { FormAuth } from "@/components/auth/form/form-auth";

export const metadata: Metadata = {
  title: "SignIn",
  description: "Description SignIn.",
};

export default function SignInPage() {
  return (
    <div className="container mx-auto flex items-center justify-center py-8 md:py-16">
      <FormAuth />
    </div>
  );
}
