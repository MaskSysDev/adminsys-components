import { Registry } from "@/registry/schema";

export const blocks: Registry = [
  // Next Themes
  {
    name: "next-themes",
    type: "registry:block",
    dependencies: ["next-themes"],
    registryDependencies: ["button"],
    files: [
      {
        path: "block/components/provider/theme-provider.tsx",
        type: "registry:component",
        target: "components/provider/theme-provider.tsx",
      },
      {
        path: "block/components/layout/toggle/toggle-theme.tsx",
        type: "registry:component",
        target: "components/layout/toggle/toggle-theme.tsx",
      },
    ],
  },
  // Config
  {
    name: "config-site",
    type: "registry:block",
    files: [
      {
        path: "block/config/site.ts",
        type: "registry:component",
        target: "config/site.ts",
      },
    ],
  },
  // Components Layout
  {
    name: "alert",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: ["alert"],
    files: [
      {
        path: "block/components/layout/alert/alert-error.tsx",
        type: "registry:component",
        target: "components/layout/alert/alert-error.tsx",
      },
      {
        path: "block/components/layout/alert/alert-success.tsx",
        type: "registry:component",
        target: "components/layout/alert/alert-success.tsx",
      },
    ],
  },
  {
    name: "container",
    type: "registry:block",
    files: [
      {
        path: "block/components/layout/container/container.tsx",
        type: "registry:component",
        target: "components/layout/container/container.tsx",
      },
    ],
  },
  {
    name: "site-footer",
    type: "registry:block",
    registryDependencies: [
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/container.json",
    ],
    files: [
      {
        path: "block/components/layout/footer/site-footer.tsx",
        type: "registry:component",
        target: "components/layout/footer/site-footer.tsx",
      },
    ],
  },
  {
    name: "contact-form",
    type: "registry:block",
    registryDependencies: [
      "form",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/alert.json",
    ],
    files: [
      {
        path: "block/components/layout/form/contact-form.tsx",
        type: "registry:component",
        target: "components/layout/form/contact-form.tsx",
      },
      {
        path: "block/lib/validation/contact.ts",
        type: "registry:component",
        target: "lib/validation/contact.ts",
      },
    ],
  },
  {
    name: "admin-header",
    type: "registry:block",
    registryDependencies: [
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/container.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/toggle-theme.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/dropdown-user.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/sidebar.json",
    ],
    files: [
      {
        path: "block/components/layout/header/admin-header.tsx",
        type: "registry:component",
        target: "components/layout/header/admin-header.tsx",
      },
    ],
  },
  {
    name: "docs-header",
    type: "registry:block",
    registryDependencies: [
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/container.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/toggle-theme.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/sidebar.json",
    ],
    files: [
      {
        path: "block/components/layout/header/site-header.tsx",
        type: "registry:component",
        target: "components/layout/header/site-header.tsx",
      },
    ],
  },
  {
    name: "site-header",
    type: "registry:block",
    registryDependencies: [
      "button",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/container.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/logo.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/nav-main.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/nav-mobile.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/toggle-theme.json",
    ],
    files: [
      {
        path: "block/components/layout/header/admin-header.tsx",
        type: "registry:component",
        target: "components/layout/header/admin-header.tsx",
      },
    ],
  },
  {
    name: "hero-simple",
    type: "registry:block",
    registryDependencies: [
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/badge-theme.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/banner.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/button-theme.json",
    ],
    files: [
      {
        path: "block/components/layout/hero/hero-simple.tsx",
        type: "registry:component",
        target: "components/layout/hero/hero-simple.tsx",
      },
    ],
  },
  {
    name: "icon",
    type: "registry:block",
    registryDependencies: [
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/logo-icon.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/logo-theme.json",
    ],
    files: [
      {
        path: "block/components/layout/icon/icon.tsx",
        type: "registry:component",
        target: "components/layout/icon/icon.tsx",
      },
    ],
  },
  {
    name: "loading-spinner",
    type: "registry:block",
    files: [
      {
        path: "block/components/layout/loading/loading-spinner.tsx",
        type: "registry:component",
        target: "components/layout/loading/loading-spinner.tsx",
      },
    ],
  },
  {
    name: "logo-dark",
    type: "registry:block",
    files: [
      {
        path: "block/components/layout/logo/logo-dark.tsx",
        type: "registry:component",
        target: "components/layout/logo/logo-dark.tsx",
      },
    ],
  },
  {
    name: "logo-icon",
    type: "registry:block",
    files: [
      {
        path: "block/components/layout/logo/logo-icon.tsx",
        type: "registry:component",
        target: "components/layout/logo/logo-icon.tsx",
      },
    ],
  },
  {
    name: "logo-light",
    type: "registry:block",
    files: [
      {
        path: "block/components/layout/logo/logo-light.tsx",
        type: "registry:component",
        target: "components/layout/logo/logo-light.tsx",
      },
    ],
  },
  {
    name: "logo-link",
    type: "registry:block",
    files: [
      {
        path: "block/components/layout/logo/logo-link.tsx",
        type: "registry:component",
        target: "components/layout/logo/logo-link.tsx",
      },
    ],
  },
  {
    name: "logo-theme",
    type: "registry:block",
    files: [
      {
        path: "block/components/layout/logo/logo-theme.tsx",
        type: "registry:component",
        target: "components/layout/logo/logo-theme.tsx",
      },
    ],
  },
  {
    name: "logo",
    type: "registry:block",
    files: [
      {
        path: "block/components/layout/logo/logo.tsx",
        type: "registry:component",
        target: "components/layout/logo/logo.tsx",
      },
    ],
  },
  {
    name: "nav-mobile",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "button",
      "navigation-menu",
      "scroll-area",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/drawer-menu.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/config-site.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/logo.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/toggle-theme.json",
    ],
    type: "registry:block",
    files: [
      {
        path: "block/components/layout/navbar/nav-mobile.tsx",
        type: "registry:component",
        target: "components/layout/navbar/nav-mobile.tsx",
      },
    ],
  },
  {
    name: "nav-link",
    registryDependencies: ["button"],
    type: "registry:block",
    files: [
      {
        path: "block/components/layout/navbar/inc/nav-link.tsx",
        type: "registry:component",
        target: "components/layout/navbar/inc/nav-link.tsx",
      },
    ],
  },
  {
    name: "nav-main",
    registryDependencies: ["navigation-menu"],
    type: "registry:block",
    files: [
      {
        path: "block/components/layout/navbar/inc/nav-main.tsx",
        type: "registry:component",
        target: "components/layout/navbar/inc/nav-main.tsx",
      },
    ],
  },
  {
    name: "not-found",
    registryDependencies: ["button"],
    type: "registry:block",
    files: [
      {
        path: "block/components/layout/not-found/not-found.tsx",
        type: "registry:component",
        target: "components/layout/not-found/not-found.tsx",
      },
    ],
  },
  {
    name: "admin-sidebar",
    registryDependencies: [
      "button",
      "scroll-area",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/config-site.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/logo.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/sidebar-nav-item.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/sidebar-nav-user.json",
    ],
    type: "registry:block",
    files: [
      {
        path: "block/components/layout/sidebar/admin-sidebar.tsx",
        type: "registry:component",
        target: "components/layout/sidebar/admin-sidebar.tsx",
      },
    ],
  },
  {
    name: "docs-sidebar",
    registryDependencies: [
      "button",
      "scroll-area",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/config-site.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/logo.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/sidebar-nav-item.json",
    ],
    type: "registry:block",
    files: [
      {
        path: "block/components/layout/sidebar/docs-sidebar.tsx",
        type: "registry:component",
        target: "components/layout/sidebar/docs-sidebar.tsx",
      },
    ],
  },
  {
    name: "sidebar-nav-item",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    type: "registry:block",
    files: [
      {
        path: "block/components/layout/sidebar/inc/sidebar-nav-item.tsx",
        type: "registry:component",
        target: "components/layout/sidebar/inc/sidebar-nav-item.tsx",
      },
    ],
  },
  {
    name: "sidebar-nav-user",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "button",
      "scroll-area",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/logo.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/sidebar-nav-item.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/sidebar.json",
    ],
    type: "registry:block",
    files: [
      {
        path: "block/components/layout/sidebar/inc/sidebar-nav-user.tsx",
        type: "registry:component",
        target: "components/layout/sidebar/inc/sidebar-nav-user.tsx",
      },
    ],
  },
  {
    name: "toggle-theme",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    type: "registry:block",
    files: [
      {
        path: "block/components/layout/toggle/toggle-theme.tsx",
        type: "registry:component",
        target: "components/layout/toggle/toggle-theme.tsx",
      },
    ],
  },
  {
    name: "toggle-theme",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    type: "registry:block",
    files: [
      {
        path: "block/components/layout/toggle/toggle-theme.tsx",
        type: "registry:component",
        target: "components/layout/toggle/toggle-theme.tsx",
      },
    ],
  },
  // Components Provider
  {
    name: "theme-provider",
    dependencies: ["next-themes"],
    type: "registry:block",
    files: [
      {
        path: "block/components/provider/theme-provider.tsx",
        type: "registry:component",
        target: "components/provider/theme-provider.tsx",
      },
    ],
  },
  // components Auth
  {
    name: "components-auth",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "alert",
      "avatar",
      "button",
      "card",
      "dropdown-menu",
      "form",
      "input",
      "switch",
      "tabs",
      "toast",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/password-input.json",
    ],
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
      {
        path: "block/components/layout/alert/alert-error.tsx",
        type: "registry:component",
        target: "components/layout/alert/alert-error.tsx",
      },
      {
        path: "block/components/layout/alert/alert-success.tsx",
        type: "registry:component",
        target: "components/layout/alert/alert-success.tsx",
      },
      {
        path: "block/components/layout/icon/icon.tsx",
        type: "registry:component",
        target: "components/layout/icon/icon.tsx",
      },
      {
        path: "block/lib/validation/auth.ts",
        type: "registry:component",
        target: "lib/validation/auth.ts",
      },
    ],
  },
  // Web Pages
  {
    name: "web-pages",
    type: "registry:block",
    registryDependencies: [
      "card",
      "sonner",
      "toast",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/alert.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/contact-form.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/nav-link.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/nav-mobile.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/drawer-menu.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/nav-link.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/nav-main.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/not-found.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/next-themes.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/logo.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/theme-adminsys.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/container.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/hero-simple.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/loading-spinner.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/site-footer.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/theme-provider.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/toaster-theme.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/typography.json",
    ],
    files: [
      {
        path: "block/web/app/(web)/[...not-found]/page.tsx",
        type: "registry:component",
        target: "app/(web)/[...not-found]/page.tsx",
      },
      {
        path: "block/web/app/(web)/about/page.tsx",
        type: "registry:component",
        target: "app/(web)/about/page.tsx",
      },
      {
        path: "block/web/app/(web)/contact/page.tsx",
        type: "registry:component",
        target: "app/(web)/contact/page.tsx",
      },
      {
        path: "block/web/app/(web)/layout.tsx",
        type: "registry:page",
        target: "app/(web)/layout.tsx",
      },
      {
        path: "block/web/app/(web)/loading.tsx",
        type: "registry:page",
        target: "app/(web)/loading.tsx",
      },
      {
        path: "block/web/app/(web)/page.tsx",
        type: "registry:component",
        target: "app/(web)/page.tsx",
      },
      {
        path: "block/web/config/site.ts",
        type: "registry:page",
        target: "config/site.ts",
      },
      {
        path: "block/lib/validation/contact.ts",
        type: "registry:page",
        target: "lib/validation/contact.ts",
      },
      {
        path: "block/web/components/layout/header/site-header.tsx",
        type: "registry:page",
        target: "components/layout/header/site-header.tsx",
      },
    ],
  },
  // Pages Auth
  {
    name: "pages-auth",
    type: "registry:page",
    registryDependencies: [
      "sonner",
      "toast",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/next-themes.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/components-auth.json",
      "https://raw.githubusercontent.com/MaskSysDev/adminsys-components/refs/heads/main/public/r/styles/default/toast-theme.json",
    ],
    files: [
      {
        path: "block/app/(web)/[...not-found]/page.tsx",
        type: "registry:component",
        target: "app/(web)/[...not-found]/page.tsx",
      },
      {
        path: "block/components/layout/not-found/not-found.tsx",
        type: "registry:component",
        target: "components/layout/not-found/not-found.tsx",
      },
      {
        path: "block/app/(web)/about/page.tsx",
        type: "registry:component",
        target: "app/(web)/about/page.tsx",
      },
      {
        path: "block/app/(web)/auth/error/page.tsx",
        type: "registry:component",
        target: "app/(web)/auth/error/page.tsx",
      },
      {
        path: "block/app/(web)/auth/forgot-password/page.tsx",
        type: "registry:component",
        target: "app/(web)/auth/forgot-password/page.tsx",
      },
      {
        path: "block/app/(web)/auth/new-verification/page.tsx",
        type: "registry:component",
        target: "app/(web)/auth/new-verification/page.tsx",
      },
      {
        path: "block/app/(web)/auth/reset-password/page.tsx",
        type: "registry:component",
        target: "app/(web)/auth/reset-password/page.tsx",
      },
      {
        path: "block/app/(web)/auth/sign-in/page.tsx",
        type: "registry:component",
        target: "app/(web)/auth/sign-in/page.tsx",
      },
      {
        path: "block/app/(web)/auth/sign-up/success/page.tsx",
        type: "registry:component",
        target: "app/(web)/auth/sign-up/success/page.tsx",
      },
      {
        path: "block/app/(web)/contact/page.tsx",
        type: "registry:component",
        target: "app/(web)/contact/page.tsx",
      },
      {
        path: "block/app/(web)/privacy-policy/page.tsx",
        type: "registry:component",
        target: "app/(web)/privacy-policy/page.tsx",
      },
      {
        path: "block/app/(web)/settings/page.tsx",
        type: "registry:component",
        target: "app/(web)/settings/page.tsx",
      },
      {
        path: "block/app/(web)/terms/page.tsx",
        type: "registry:component",
        target: "app/(web)/terms/page.tsx",
      },
      {
        path: "block/app/(web)/layout.tsx",
        type: "registry:component",
        target: "app/(web)/layout.tsx",
      },
      {
        path: "block/components/layout/header/site-header.tsx",
        type: "registry:component",
        target: "components/layout/header/site-header.tsx",
      },
      {
        path: "block/components/layout/footer/site-footer.tsx",
        type: "registry:component",
        target: "components/layout/footer/site-footer.tsx",
      },
      {
        path: "block/app/(web)/loading.tsx",
        type: "registry:component",
        target: "app/(web)/loading.tsx",
      },
      {
        path: "block/components/layout/loading/site-loading.tsx",
        type: "registry:component",
        target: "components/layout/loading/loading-spinner.tsx",
      },
      {
        path: "block/app/(web)/page.tsx",
        type: "registry:component",
        target: "app/(web)/page.tsx",
      },
    ],
  },
];
