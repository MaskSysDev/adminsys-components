import { Metadata } from "next";

import { Check } from "lucide-react";

import { CardAuthWrapper } from "@/components/auth/wrapper/card-auth-wrapper";

export const metadata: Metadata = {
  title: "Success",
  description: "Description Success",
};

export default function SuccessPage() {
  return (
    <div className="container mx-auto flex items-center justify-center py-8 md:py-16">
      <CardAuthWrapper headerLabel="Confirmation email sent!">
        <div className="flex w-full items-center justify-center">
          <Check className="size-16 text-green-600" />
        </div>
      </CardAuthWrapper>
    </div>
  );
}
