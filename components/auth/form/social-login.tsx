"use client";

import { toast } from "@/hooks/use-toast";

import { Icon } from "@/components/layout/icon/icon";

import { Button } from "@/components/ui/button";

export const SocialLogin = () => {
  const onClick = (provider: "google" | "github") => {
    toast({
      title: "Sign In Successful",
      description: `Signed in as ${provider}`,
    });
  };

  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        size="lg"
        className="w-full bg-background"
        variant="outline"
        onClick={() => onClick("google")}
      >
        <Icon.Google className="size-5" />
      </Button>
      <Button
        size="lg"
        className="w-full bg-background"
        variant="outline"
        onClick={() => onClick("github")}
      >
        <Icon.Github className="size-5" />
      </Button>
    </div>
  );
};
