import { Metadata } from "next";

import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "PrivacyPolicy",
  description: "Description PrivacyPolicy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-1 justify-center">
      <section className="container p-2">
        <Typography.H1 className="text-2xl font-semibold lg:text-3xl">
          PrivacyPolicy
        </Typography.H1>
      </section>
    </div>
  );
}
