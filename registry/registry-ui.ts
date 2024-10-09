import { Registry } from "@/registry/schema";

export const ui: Registry = [
  // Auth
  {
    name: "card-user-profile",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["avatar", "card"],
    files: ["ui/components/auth/card/card-user-profile.tsx"],
  },
  {
    name: "badge-theme",
    type: "registry:ui",
    dependencies: ["class-variance-authority"],
    files: ["ui/badge-theme.tsx"],
  },
  {
    name: "banner",
    type: "registry:ui",
    files: ["ui/banner.tsx"],
  },
  {
    name: "button-theme",
    type: "registry:ui",
    dependencies: ["class-variance-authority", "@radix-ui/react-slot"],
    files: ["ui/button-theme.tsx"],
  },
  {
    name: "card-theme",
    type: "registry:ui",
    files: ["ui/card-theme.tsx"],
  },
  {
    name: "drawer-menu",
    type: "registry:ui",
    dependencies: ["vaul"],
    files: ["ui/drawer-menu.tsx"],
  },
  {
    name: "password-input",
    type: "registry:ui",
    registryDependencies: ["input", "button"],
    files: ["ui/password-input.tsx"],
  },
  {
    name: "sidebar",
    type: "registry:ui",
    registryDependencies: [
      "button",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/drawer-menu.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/use-mobile.json",
    ],
    files: ["ui/sidebar.tsx"],
  },
  {
    name: "toast-theme",
    type: "registry:ui",
    dependencies: [
      "@radix-ui/react-toast",
      "class-variance-authority",
      "lucide-react",
    ],
    registryDependencies: [
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/use-toast-theme.json",
    ],
    files: ["ui/toast-theme.tsx", "ui/toaster-theme.tsx"],
  },
  {
    name: "typography",
    type: "registry:ui",
    files: ["ui/typography.tsx"],
  },
];
