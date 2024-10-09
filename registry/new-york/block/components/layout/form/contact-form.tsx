"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "@/hooks/use-toast";
import { ContactFormValues, contactSchema } from "@/lib/validation/contact";

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
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const contactForm = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onContactFormSubmit(data: ContactFormValues) {
    setError("");
    setSuccess("");

    startTransition(() => {
      toast({
        title: "Message sent!",
        description: `Thank ${data.name} you for contacting us. We'll get back to you soon.`,
      });
      contactForm.reset();
      setSuccess("Success");
    });
  }

  return (
    <Form {...contactForm}>
      <form
        onSubmit={contactForm.handleSubmit(onContactFormSubmit)}
        className="space-y-6"
      >
        <div className="space-y-4">
          <FormField
            control={contactForm.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
          <FormField
            control={contactForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
          <FormField
            control={contactForm.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter your message"
                    className="resize-none"
                    {...field}
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
          Send Message
        </Button>
      </form>
    </Form>
  );
};
