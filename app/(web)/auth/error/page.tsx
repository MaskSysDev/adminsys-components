import { Metadata } from "next";
import Link from "next/link";

import { TriangleAlertIcon } from "lucide-react";

import { CardAuthWrapper } from "@/components/auth/wrapper/card-auth-wrapper";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "AuthError",
  description: "Description AuthError.",
};

export default function AuthErrorPage() {
  return (
    <div className="container mx-auto flex items-center justify-center py-8 md:py-16">
      <CardAuthWrapper headerLabel="Oops! Something went wrong!">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <TriangleAlertIcon className="size-16 text-red-600" />

          <Button asChild variant="link">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </CardAuthWrapper>
    </div>
  );
}
