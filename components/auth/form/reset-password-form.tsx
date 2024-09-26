"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import {
  ResetPasswordFormValues,
  resetPasswordSchema,
} from "@/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "@/hooks/use-toast";

import { AlertError } from "@/components/layout/alert/alert-error";
import { AlertSuccess } from "@/components/layout/alert/alert-success";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PasswordInput } from "@/components/ui/password-input";

export const ResetPasswordForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const resetPasswordForm = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const onResetPasswordSubmit = (values: ResetPasswordFormValues) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      toast({
        title: "Reset Password Successful",
        description: `Signed in as ${values.password}`,
      });
      setSuccess("Success");
    });
  };

  return (
    <Form {...resetPasswordForm}>
      <form
        onSubmit={resetPasswordForm.handleSubmit(onResetPasswordSubmit)}
        className="space-y-6"
      >
        <div className="space-y-4">
          <FormField
            control={resetPasswordForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    {...field}
                    disabled={isPending}
                    placeholder="******"
                    autoFocus
                  />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
        </div>
        <AlertError message={error} />
        <AlertSuccess message={success} />
        <Button disabled={isPending} type="submit" className="w-full">
          Reset password
        </Button>
      </form>
    </Form>
  );
};
