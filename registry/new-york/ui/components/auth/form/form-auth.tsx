"use client";

import { useState } from "react";

import { SignInForm } from "@/components/auth/form/sign-in-form";
import { SignUpForm } from "@/components/auth/form/sign-up-form";
import { CardAuthWrapper } from "@/components/auth/wrapper/card-auth-wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const FormAuth = () => {
  const [activeTab, setActiveTab] = useState("sign-in");

  return (
    <CardAuthWrapper
      headerLabel="Welcome"
      headerDescription="Sign in to your account or create a new one"
      showSocial
      terms
    >
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sign-in">Sign In</TabsTrigger>
          <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
          <SignInForm />
        </TabsContent>
        <TabsContent value="sign-up">
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </CardAuthWrapper>
  );
};
