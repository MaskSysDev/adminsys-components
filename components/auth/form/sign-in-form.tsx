"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import Link from "next/link";

import { SignInFormValues, signInSchema } from "@/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

import { AlertError } from "@/components/layout/alert/alert-error";
import { AlertSuccess } from "@/components/layout/alert/alert-success";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";

export const SignInForm = () => {
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const signInForm = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSignInSubmit(values: SignInFormValues) {
    setShowTwoFactor(false);
    setError("");
    setSuccess("");

    startTransition(() => {
      toast({
        title: "Sign In Successful",
        description: `Signed in as ${values.email}`,
      });
      signInForm.reset();
      setSuccess("Success");
    });
  }

  return (
    <Form {...signInForm}>
      <form
        onSubmit={signInForm.handleSubmit(onSignInSubmit)}
        className="space-y-6"
      >
        <div className="space-y-4">
          {showTwoFactor && (
            <FormField
              control={signInForm.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">
                    Two Factor Code
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="123456"
                    />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
          )}
          {!showTwoFactor && (
            <>
              <FormField
                control={signInForm.control}
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
              <FormField
                control={signInForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel className="text-foreground">
                        Password
                      </FormLabel>
                      <Link
                        href="/auth/forgot-password"
                        className={cn(
                          buttonVariants({
                            variant: "link",
                            size: "sm",
                            className: "ml-auto h-auto p-0 font-normal",
                          }),
                        )}
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <FormControl>
                      <PasswordInput
                        {...field}
                        disabled={isPending}
                        placeholder="******"
                      />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
            </>
          )}
        </div>
        <AlertError message={error} />
        <AlertSuccess message={success} />
        <Button disabled={isPending} type="submit" className="w-full">
          {showTwoFactor ? "Confirm" : "Login"}
        </Button>
      </form>
    </Form>
  );
};
