export type SiteConfig = typeof siteConfig;

const name = "AdminSys";
const description =
  "Nextjs App with Typescript, Tailwind CSS, Shadcn/ui, ESLint, Prettier, and more.";

const emailContact = "contact@email.com";
const emailSupport = "support@email.com";

const url = "https://adminsys-boilerplate.vercel.app";
const favicon = "/favicon.ico";
const favicon16x16 = "/assets/images/icon/icon-16x16.png";
const favicon180x180 = "/assets/images/icon/icon-180x180.png";
const favicon192x192 = "/assets/images/icon/icon-192x192.png";
const favicon512x512 = "/assets/images/icon/icon-512x512.png";
const logo = "/assets/images/logo/logo-dark.png";
const logoLight = "/assets/images/logo/logo-light.png";
const logoDark = "/assets/images/logo/logo-dark.png";

const locale = "en-US";

const facebook = "https://www.facebook.com/";
const instagram = "https://www.instagram.com/";
const youtube = "https://www.youtube.com/";

const keywords = "React, Next.js, TypeScript";

const author = "MaskSysDev";
const authorUrl = "https://github.com/MaskSysDev";

const creator = "Mask";
const publisher = "MaskSysDev";

const projectUrl = "https://github.com/MaskSysDev/adminsys-boilerplate";

export const siteConfig = {
  /* Global */
  name,
  description,
  emailContact,
  emailSupport,
  url,

  favicon,
  favicon16x16,
  favicon180x180,
  favicon192x192,
  favicon512x512,
  logo,
  logoLight,
  logoDark,

  locale,

  keywords,

  author,
  authorUrl,

  creator,
  publisher,

  project: {
    url: projectUrl,
    author,
    authorUrl,
  },
  docsRepositoryBase: projectUrl,

  links: {
    github: projectUrl,
    facebook,
    instagram,
    youtube,
  },

  /* Components Layout */
  siteHeader: {
    name,
    links: [
      {
        id: "1",
        label: "Home",
        href: "/",
        disabled: false,
      },
      {
        id: "2",
        label: "About",
        href: "/about",
        disabled: false,
      },
      {
        id: "3",
        label: "Docs",
        href: "/docs",
        disabled: false,
      },
      {
        id: "4",
        label: "Admin",
        href: "/admin/dashboard",
        disabled: false,
      },
      {
        id: "5",
        label: "Contact",
        href: "/contact",
        disabled: false,
      },
    ],
  },

  footerSimple: {
    author,
    authorUrl,
    name,
    facebook,
    instagram,
    youtube,
  },
};
