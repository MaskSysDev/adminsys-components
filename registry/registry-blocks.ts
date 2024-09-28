import { Registry } from "@/registry/schema";

export const blocks: Registry = [
  {
    name: "hero-01",
    type: "registry:block",
    registryDependencies: ["button"],
    files: [
      {
        path: "block/hero-01/page.tsx",
        target: "app/hero-01/page.tsx",
        type: "registry:page",
      },
      {
        path: "block/hero-01/components/hero-01.tsx",
        target: "components/layout/hero/hero-01.tsx",
        type: "registry:component",
      },
    ],
    category: "Banner",
    subcategory: "Hero",
  },
  {
    name: "home-page",
    type: "registry:block",
    registryDependencies: [
      "button",
      "navigation-menu",
      "scroll-area",
      "sonner",
      "toast",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/typography.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/drawer-menu.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/theme-adminsys.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/next-themes.json",
    ],
    files: [
      {
        path: "block/home-page/layout.tsx",
        target: "app/(web)/layout.tsx",
        type: "registry:page",
      },
      {
        path: "block/home-page/loading.tsx",
        target: "app/(web)/loading.tsx",
        type: "registry:page",
      },
      {
        path: "block/home-page/components/loading-spinner.tsx",
        target: "components/layout/loading/loading-spinner.tsx",
        type: "registry:component",
      },
      {
        path: "block/home-page/page.tsx",
        target: "app/(web)/page.tsx",
        type: "registry:page",
      },
      {
        path: "block/home-page/about/page.tsx",
        target: "app/(web)/about/page.tsx",
        type: "registry:page",
      },
      {
        path: "block/home-page/contact/page.tsx",
        target: "app/(web)/contact/page.tsx",
        type: "registry:page",
      },
      {
        path: "block/home-page/not-found/page.tsx",
        target: "app/(web)/[...not-found]/page.tsx",
        type: "registry:page",
      },
      {
        path: "block/home-page/components/not-found.tsx",
        target: "components/layout/not-found/not-found.tsx",
        type: "registry:component",
      },
      {
        path: "block/home-page/components/site-header.tsx",
        target: "components/layout/header/site-header.tsx",
        type: "registry:component",
      },
      {
        path: "block/home-page/components/nav-main.tsx",
        target: "components/layout/navbar/inc/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "block/home-page/components/nav-link.tsx",
        target: "components/layout/navbar/inc/nav-link.tsx",
        type: "registry:component",
      },
      {
        path: "block/home-page/components/nav-mobile.tsx",
        target: "components/layout/navbar/nav-mobile.tsx",
        type: "registry:component",
      },
      {
        path: "block/home-page/components/site-footer.tsx",
        target: "components/layout/footer/site-footer.tsx",
        type: "registry:component",
      },
      {
        path: "block/home-page/components/site.ts",
        target: "config/site.ts",
        type: "registry:block",
      },
    ],
    category: "Web",
    subcategory: "Layout",
  },
  {
    name: "next-themes",
    type: "registry:block",
    dependencies: ["next-themes"],
    registryDependencies: ["button"],
    files: [
      {
        path: "block/components/provider/theme-provider.tsx",
        target: "components/provider/theme-provider.tsx",
        type: "registry:component",
      },
      {
        path: "block/components/layout/toggle/toggle-theme.tsx",
        target: "components/layout/toggle/toggle-theme.tsx",
        type: "registry:component",
      },
    ],
    category: "Themes",
    subcategory: "Setup",
  },
  {
    name: "adminsys",
    type: "registry:block",
    registryDependencies: [
      "avatar",
      "button",
      "dropdown-menu",
      "scroll-area",
      "sonner",
      "toast",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/typography.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/drawer-menu.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/theme-adminsys.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/next-themes.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/sidebar.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/use-mobile.json",
    ],
    files: [
      {
        path: "block/adminsys/app/(admin)/admin/layout.tsx",
        target: "app/(admin)/admin/layout.tsx",
        type: "registry:page",
      },
      {
        path: "block/adminsys/app/(admin)/admin/loading.tsx",
        target: "app/(admin)/admin/loading.tsx",
        type: "registry:page",
      },
      {
        path: "block/adminsys/app/(admin)/admin/[...not-found]/page.tsx",
        target: "app/(admin)/admin/[...not-found]/page.tsx",
        type: "registry:page",
      },
      {
        path: "block/adminsys/app/(admin)/admin/dashboard/page.tsx",
        target: "app/(admin)/admin/dashboard/page.tsx",
        type: "registry:page",
      },
      {
        path: "block/adminsys/app/(admin)/admin/users/list/page.tsx",
        target: "app/(admin)/admin/users/list/page.tsx",
        type: "registry:page",
      },
      {
        path: "block/components/auth/dropdown/dropdown-user.tsx",
        target: "components/auth/dropdown/dropdown-user.tsx",
        type: "registry:component",
      },
      {
        path: "block/components/layout/container/container.tsx",
        target: "components/layout/container/container.tsx",
        type: "registry:component",
      },
      {
        path: "block/components/layout/header/admin-header.tsx",
        target: "components/layout/header/admin-header.tsx",
        type: "registry:component",
      },
      {
        path: "block/components/layout/loading/loading-spinner.tsx",
        target: "components/layout/loading/loading-spinner.tsx",
        type: "registry:component",
      },
      {
        path: "block/components/layout/logo/logo.tsx",
        target: "components/layout/logo/logo.tsx",
        type: "registry:component",
      },
      {
        path: "block/components/layout/not-found/not-found.tsx",
        target: "components/layout/not-found/not-found.tsx",
        type: "registry:component",
      },
      {
        path: "block/components/layout/sidebar/admin-sidebar.tsx",
        target: "components/layout/sidebar/admin-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "block/components/layout/sidebar/inc/sidebar-menu-item.tsx",
        target: "components/layout/sidebar/inc/sidebar-menu-item.tsx",
        type: "registry:component",
      },
      {
        path: "block/components/layout/sidebar/inc/sidebar-nav-user.tsx",
        target: "components/layout/sidebar/inc/sidebar-nav-user.tsx",
        type: "registry:component",
      },
      {
        path: "block/adminsys/config/site.ts",
        target: "config/site.ts",
        type: "registry:component",
      },
    ],
    category: "Admin",
    subcategory: "Layout",
  },
  {
    name: "docsys",
    type: "registry:block",
    dependencies: ["prismjs"],
    devDependencies: ["@types/prismjs"],
    registryDependencies: [
      "button",
      "scroll-area",
      "sonner",
      "toast",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/typography.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/drawer-menu.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/theme-adminsys.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/next-themes.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/sidebar.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/use-mobile.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/badge-theme.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/card-theme.json",
    ],
    files: [
      {
        path: "block/docsys/app/(docs)/docs/layout.tsx",
        target: "app/(docs)/docs/layout.tsx",
        type: "registry:page",
      },
      {
        path: "block/docsys/app/(docs)/docs/loading.tsx",
        target: "app/(docs)/docs/loading.tsx",
        type: "registry:page",
      },
      {
        path: "block/docsys/app/(docs)/docs/page.tsx",
        target: "app/(docs)/docs/page.tsx",
        type: "registry:page",
      },
      {
        path: "block/docsys/app/(docs)/docs/[...not-found]/page.tsx",
        target: "app/(docs)/docs/[...not-found]/page.tsx",
        type: "registry:page",
      },
      {
        path: "block/docsys/app/(docs)/docs/components/ui/badge/page.tsx",
        target: "app/(docs)/docs/components/ui/badge/page.tsx",
        type: "registry:page",
      },
      {
        path: "block/docsys/app/(docs)/docs/components/ui/card/page.tsx",
        target: "app/(docs)/docs/components/ui/card/page.tsx",
        type: "registry:page",
      },
      {
        path: "block/docsys/app/(docs)/docs/components/ui/typography/page.tsx",
        target: "app/(docs)/docs/components/ui/typography/page.tsx",
        type: "registry:page",
      },
      {
        path: "block/docsys/app/(docs)/docs/get-starter/page.tsx",
        target: "app/(docs)/docs/get-starter/page.tsx",
        type: "registry:page",
      },
      {
        path: "block/components/layout/code/code-block.tsx",
        target: "components/layout/code/code-block.tsx",
        type: "registry:component",
      },
      {
        path: "block/components/layout/container/container.tsx",
        target: "components/layout/container/container.tsx",
        type: "registry:component",
      },
      {
        path: "block/components/layout/header/docs-header.tsx",
        target: "components/layout/header/docs-header.tsx",
        type: "registry:component",
      },
      {
        path: "block/components/layout/loading/loading-spinner.tsx",
        target: "components/layout/loading/loading-spinner.tsx",
        type: "registry:component",
      },
      {
        path: "block/components/layout/logo/logo.tsx",
        target: "components/layout/logo/logo.tsx",
        type: "registry:component",
      },
      {
        path: "block/components/layout/not-found/not-found.tsx",
        target: "components/layout/not-found/not-found.tsx",
        type: "registry:component",
      },
      {
        path: "block/components/layout/sidebar/docs-sidebar.tsx",
        target: "components/layout/sidebar/docs-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "block/components/layout/sidebar/inc/sidebar-menu-item.tsx",
        target: "components/layout/sidebar/inc/sidebar-menu-item.tsx",
        type: "registry:component",
      },
      {
        path: "block/components/layout/wrapper/code-block-wrapper.tsx",
        target: "components/layout/wrapper/code-block-wrapper.tsx",
        type: "registry:component",
      },
      {
        path: "block/docsys/config/site.ts",
        target: "config/site.ts",
        type: "registry:component",
      },
      {
        path: "block/docsys/styles/code-block.css",
        target: "styles/code-block.css",
        type: "registry:component",
      },
    ],
    category: "Admin",
    subcategory: "Layout",
  },
];
