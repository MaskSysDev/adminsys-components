import { Metadata } from "next";

import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Button",
  description: "Description Button.",
};

export default function ButtonPage() {
  return (
    <div className="flex flex-1 justify-center">
      <section className="container p-2">
        <Typography.H1 className="text-2xl font-semibold lg:text-3xl">
          Button
        </Typography.H1>
      </section>
    </div>
  );
}
