import { Metadata } from "next";

import { ContactForm } from "@/components/layout/form/contact-form";

import { CardAuthWrapper } from "@/components/auth/wrapper/card-auth-wrapper";
import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Contact",
  description: "Description Contact.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto space-y-4 py-8">
      <Typography.H1 className="text-center text-2xl font-semibold lg:text-3xl">
        Contact
      </Typography.H1>
      <CardAuthWrapper headerLabel="Contact Us">
        <ContactForm />
      </CardAuthWrapper>
    </div>
  );
}
