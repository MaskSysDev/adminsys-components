"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "@/hooks/use-toast";
import {
  ForgotPasswordFormValues,
  forgotPasswordSchema,
} from "@/lib/validation/auth";

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
import { Input } from "@/components/ui/input";

export const ForgotPasswordForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const forgotPasswordForm = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  function onForgotPasswordSubmit(values: ForgotPasswordFormValues) {
    setError("");
    setSuccess("");

    startTransition(() => {
      toast({
        title: "Forgot Password",
        description: `Signed in as ${values.email}`,
      });
      forgotPasswordForm.reset();
      setSuccess("Success");
    });
  }

  return (
    <Form {...forgotPasswordForm}>
      <form
        onSubmit={forgotPasswordForm.handleSubmit(onForgotPasswordSubmit)}
        className="space-y-6"
      >
        <div className="space-y-4">
          <FormField
            control={forgotPasswordForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="Enter your email"
                    type="email"
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
          Send reset email
        </Button>
      </form>
    </Form>
  );
};
