"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SocialLogin } from "../form/social-login";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel?: string;
  headerDescription?: string;
  showSocial?: boolean;
  className?: string;
  terms?: boolean;
}

export const CardAuthWrapper = ({
  children,
  headerLabel,
  headerDescription,
  showSocial,
  className,
  terms,
}: CardWrapperProps) => {
  return (
    <Card className={cn("mx-auto w-full max-w-lg overflow-hidden", className)}>
      <CardHeader>
        {headerLabel && (
          <CardTitle className="text-center text-2xl font-bold">
            {headerLabel}
          </CardTitle>
        )}
        {headerDescription && (
          <CardDescription className="text-center">
            {headerDescription}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <div>
          <div className="flex items-center p-6 before:mt-0.5 before:flex-1 before:border-t before:border-muted after:mt-0.5 after:flex-1 after:border-t after:border-muted">
            <p className="mx-4 mb-0 text-center text-sm text-muted-foreground">
              or continue with
            </p>
          </div>
          <CardFooter className="border-t-0 bg-card">
            <SocialLogin />
          </CardFooter>
        </div>
      )}
      <CardFooter className="flex flex-col flex-wrap items-center gap-4 border-t-0 bg-card">
        <div className="block w-full space-y-8">
          {terms && (
            <p className=" text-center text-sm text-muted-foreground">
              By signing in, you agree to our{" "}
              <Link
                href="/terms"
                className={cn(
                  buttonVariants({
                    size: "sm",
                    variant: "link",
                    className: "p-0",
                  }),
                )}
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy-policy"
                className={cn(
                  buttonVariants({
                    size: "sm",
                    variant: "link",
                    className: "p-0",
                  }),
                )}
              >
                Privacy Policy
              </Link>
            </p>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
