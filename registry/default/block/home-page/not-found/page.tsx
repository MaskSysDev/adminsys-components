import { Metadata } from "next";

import { NotFound } from "@/components/layout/not-found/not-found";

export const metadata: Metadata = {
  title: "NotFound",
  description: "Description NotFound.",
};

export default function NotFoundPage() {
  return (
    <div className="container mx-auto py-8">
      <NotFound />
    </div>
  );
}
