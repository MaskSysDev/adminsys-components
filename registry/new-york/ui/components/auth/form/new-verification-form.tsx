"use client";

import { useCallback, useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";

import { LoaderCircle } from "lucide-react";

import { AlertError } from "@/components/layout/alert/alert-error";
import { AlertSuccess } from "@/components/layout/alert/alert-success";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onNewVerificationSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Missing token!");
      return;
    }
  }, [token, success, error]);

  useEffect(() => {
    onNewVerificationSubmit();
  }, [onNewVerificationSubmit]);

  return (
    <div className="flex w-full items-center justify-center">
      {!success && !error && <LoaderCircle className="size-5 animate-spin" />}
      <AlertSuccess message={success} />
      {!success && <AlertError message={error} />}
    </div>
  );
};
