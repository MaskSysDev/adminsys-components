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
    name: "typography",
    type: "registry:ui",
    files: ["ui/typography.tsx"],
  },
];
