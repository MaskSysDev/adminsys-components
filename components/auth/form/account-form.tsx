/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { AccountFormValues, accountSchema } from "@/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Switch } from "@/components/ui/switch";

export const AccountForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const accountForm = useForm<AccountFormValues>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "USER",
      password: "",
      newPassword: "",
      isTwoFactorEnabled: undefined,
    },
  });

  function onAccountSubmit(values: AccountFormValues) {
    setError("");
    setSuccess("");

    startTransition(() => {
      toast({
        title: "Updated Successful",
        description: `Account updated for ${values.name} (${values.email})`,
      });
      accountForm.reset();
      setSuccess("Success");
    });
  }

  return (
    <Form {...accountForm}>
      <form
        className="space-y-6"
        onSubmit={accountForm.handleSubmit(onAccountSubmit)}
      >
        <div className="space-y-4">
          <FormField
            control={accountForm.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="Enter your name"
                  />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />

          <FormField
            control={accountForm.control}
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
                  />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
          <FormField
            control={accountForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Password</FormLabel>
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
          <FormField
            control={accountForm.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">New Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    {...field}
                    placeholder="******"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />

          <FormField
            control={accountForm.control}
            name="isTwoFactorEnabled"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <div className="space-y-0.5">
                  <FormLabel className="text-foreground">
                    Two Factor Authentication
                  </FormLabel>
                  <FormDescription>
                    Enable two factor authentication for your account
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    className="data-[state=checked]:bg-green-600"
                    disabled={isPending}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button disabled={isPending} type="submit">
          Save
        </Button>
      </form>
    </Form>
  );
};
