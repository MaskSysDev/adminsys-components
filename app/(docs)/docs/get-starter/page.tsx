import { Metadata } from "next";

import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Get Starter",
  description: "Description Get Starter.",
};

export default function GetStarterPage() {
  return (
    <div className="container mx-auto p-6">
      <Typography.H1 className="text-2xl font-semibold lg:text-3xl">
        Get Starter
      </Typography.H1>
    </div>
  );
}
