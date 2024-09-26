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
        path: "block/next-themes/components/theme-provider.tsx",
        target: "components/provider/theme-provider.tsx",
        type: "registry:component",
      },
      {
        path: "block/next-themes/components/toggle-theme.tsx",
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
      "navigation-menu",
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
        path: "block/adminsys/web/layout.tsx",
        target: "app/(web)/layout.tsx",
        type: "registry:page",
      },
      {
        path: "block/adminsys/web/loading.tsx",
        target: "app/(web)/loading.tsx",
        type: "registry:page",
      },
      {
        path: "block/adminsys/components/loading-spinner.tsx",
        target: "components/layout/loading/loading-spinner.tsx",
        type: "registry:component",
      },
      {
        path: "block/adminsys/web/page.tsx",
        target: "app/(web)/page.tsx",
        type: "registry:page",
      },
      {
        path: "block/adminsys/web/about/page.tsx",
        target: "app/(web)/about/page.tsx",
        type: "registry:page",
      },
      {
        path: "block/adminsys/web/contact/page.tsx",
        target: "app/(web)/contact/page.tsx",
        type: "registry:page",
      },
      {
        path: "block/adminsys/web/not-found/page.tsx",
        target: "app/(web)/[...not-found]/page.tsx",
        type: "registry:page",
      },
      {
        path: "block/adminsys/components/not-found.tsx",
        target: "components/layout/not-found/not-found.tsx",
        type: "registry:component",
      },
      {
        path: "block/adminsys/components/site-header.tsx",
        target: "components/layout/header/site-header.tsx",
        type: "registry:component",
      },
      {
        path: "block/adminsys/components/nav-main.tsx",
        target: "components/layout/navbar/inc/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "block/adminsys/components/nav-link.tsx",
        target: "components/layout/navbar/inc/nav-link.tsx",
        type: "registry:component",
      },
      {
        path: "block/adminsys/components/nav-mobile.tsx",
        target: "components/layout/navbar/nav-mobile.tsx",
        type: "registry:component",
      },
      {
        path: "block/adminsys/components/site-footer.tsx",
        target: "components/layout/footer/site-footer.tsx",
        type: "registry:component",
      },
      {
        path: "block/adminsys/components/site.ts",
        target: "config/site.ts",
        type: "registry:block",
      },
      {
        path: "block/adminsys/admin/layout.tsx",
        target: "app/(admin)/admin/layout.tsx",
        type: "registry:page",
      },
      {
        path: "block/adminsys/admin/loading.tsx",
        target: "app/(admin)/admin/loading.tsx",
        type: "registry:page",
      },
      {
        path: "block/adminsys/admin/dashboard/page.tsx",
        target: "app/(admin)/admin/dashboard/page.tsx",
        type: "registry:page",
      },
      {
        path: "block/adminsys/admin/users/list/page.tsx",
        target: "app/(admin)/admin/users/list/page.tsx",
        type: "registry:page",
      },
      {
        path: "block/adminsys/admin/not-found/page.tsx",
        target: "app/(admin)/admin/[...not-found]/page.tsx",
        type: "registry:page",
      },
      {
        path: "block/adminsys/components/admin-header.tsx",
        target: "components/layout/header/admin-header.tsx",
        type: "registry:component",
      },
      {
        path: "block/adminsys/components/dropdown-user.tsx",
        target: "components/layout/dropdown/dropdown-user.tsx",
        type: "registry:component",
      },
      {
        path: "block/adminsys/components/link-folder-root.tsx",
        target: "components/layout/sidebar/inc/link-folder-root.tsx",
        type: "registry:component",
      },
      {
        path: "block/adminsys/components/sidebar-links-section.tsx",
        target: "components/layout/sidebar/inc/sidebar-links-section.tsx",
        type: "registry:component",
      },
      {
        path: "block/adminsys/components/sidebar-link-folder.tsx",
        target: "components/layout/sidebar/inc/sidebar-link-folder.tsx",
        type: "registry:component",
      },
      {
        path: "block/adminsys/components/sidebar-link-single.tsx",
        target: "components/layout/sidebar/inc/sidebar-link-single.tsx",
        type: "registry:component",
      },
      {
        path: "block/adminsys/components/sidebar-link-submenu.tsx",
        target: "components/layout/sidebar/inc/sidebar-link-submenu.tsx",
        type: "registry:component",
      },
      {
        path: "block/adminsys/components/sidebar-links-section.tsx",
        target: "components/layout/sidebar/inc/sidebar-links-section.tsx",
        type: "registry:component",
      },
      {
        path: "block/adminsys/components/sidebar-nav-user.tsx",
        target: "components/layout/sidebar/inc/sidebar-nav-user.tsx",
        type: "registry:component",
      },
      {
        path: "block/adminsys/components/admin-sidebar.tsx",
        target: "components/layout/sidebar/admin-sidebar.tsx",
        type: "registry:component",
      },
    ],
    category: "Admin",
    subcategory: "Layout",
  },
];
