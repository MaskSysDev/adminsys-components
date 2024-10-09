import { Registry } from "@/registry/schema";

export const blocks: Registry = [
  // Auth
  {
    name: "components-auth",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: ["avatar", "card"],
    files: [
      {
        path: "block/components/auth/card/card-user-profile.tsx",
        type: "registry:component",
        target: "components/auth/card/card-user-profile.tsx",
      },
      {
        path: "block/components/auth/dropdown/dropdown-user.tsx",
        type: "registry:component",
        target: "components/auth/dropdown/dropdown-user.tsx",
      },
      {
        path: "block/components/auth/form/account-form.tsx",
        type: "registry:component",
        target: "components/auth/form/account-form.tsx",
      },
      {
        path: "block/components/auth/form/forgot-password-form.tsx",
        type: "registry:component",
        target: "components/auth/form/forgot-password-form.tsx",
      },
      {
        path: "block/components/auth/form/form-auth.tsx",
        type: "registry:component",
        target: "components/auth/form/form-auth.tsx",
      },
      {
        path: "block/components/auth/form/new-verification-form.tsx",
        type: "registry:component",
        target: "components/auth/form/new-verification-form.tsx",
      },
      {
        path: "block/components/auth/form/reset-password-form.tsx",
        type: "registry:component",
        target: "components/auth/form/reset-password-form.tsx",
      },
      {
        path: "block/components/auth/form/sign-in-form.tsx",
        type: "registry:component",
        target: "components/auth/form/sign-in-form.tsx",
      },
      {
        path: "block/components/auth/form/sign-up-form.tsx",
        type: "registry:component",
        target: "components/auth/form/sign-up-form.tsx",
      },
      {
        path: "block/components/auth/form/social-login.tsx",
        type: "registry:component",
        target: "components/auth/form/social-login.tsx",
      },
      {
        path: "block/components/auth/sidebar/sidebar-settings.tsx",
        type: "registry:component",
        target: "components/auth/sidebar/sidebar-settings.tsx",
      },
      {
        path: "block/components/auth/wrapper/card-auth-wrapper.tsx",
        type: "registry:component",
        target: "components/auth/wrapper/card-auth-wrapper.tsx",
      },
    ],
  },
];
