import { Registry } from "@/registry/schema";

export const hooks: Registry = [
  {
    name: "use-mobile",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-mobile.tsx",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-toast-theme",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-toast-theme.ts",
        type: "registry:hook",
      },
    ],
  },
];
