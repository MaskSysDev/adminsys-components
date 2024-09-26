import { Registry } from "@/registry/schema";

export const ui: Registry = [
  {
    name: "badge-theme",
    type: "registry:ui",
    dependencies: ["class-variance-authority"],
    files: ["ui/badge-theme.tsx"],
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
    name: "typography",
    type: "registry:ui",
    files: ["ui/typography.tsx"],
  },
];
