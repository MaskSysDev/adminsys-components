import { Metadata } from "next";

import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Docs",
  description: "Description Docs.",
};

export default function DocsPage() {
  return (
    <div className="container mx-auto p-6">
      <Typography.H1 className="text-2xl font-semibold lg:text-3xl">
        Docs
      </Typography.H1>
    </div>
  );
}
