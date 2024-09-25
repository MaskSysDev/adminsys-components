import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { AdminHeader } from "@/components/layout/header/admin-header";
import { AdminSidebar } from "@/components/layout/sidebar/admin-sidebar";

import { ThemeProvider } from "@/components/provider/theme-provider";

import { TailwindIndicator } from "@/components/tailwind-indicator";
import { SidebarLayout } from "@/components/ui/sidebar";
import { Toaster as ToasterSonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";

import "@/styles/globals.css";

const geistSans = localFont({
  src: "../../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,

  robots: {
    follow: false,
    index: false,
    nocache: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: false,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  referrer: "origin-when-cross-origin",

  icons: {
    icon: siteConfig.favicon,
    shortcut: siteConfig.favicon16x16,
    apple: siteConfig.favicon180x180,
  },

  openGraph: {
    type: "website",
    title: siteConfig.name,
    locale: siteConfig.locale,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.favicon180x180,
        width: 180,
        height: 180,
      },
      {
        url: siteConfig.favicon192x192,
        width: 192,
        height: 192,
      },
      {
        url: siteConfig.favicon512x512,
        width: 512,
        height: 512,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.favicon512x512],
    creator: siteConfig.creator,
  },

  authors: [{ name: siteConfig.author, url: siteConfig.authorUrl }],

  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { cookies } = await import("next/headers");

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarLayout
            defaultOpen={cookies().get("sidebar:state")?.value === "true"}
          >
            <div className="flex min-h-screen min-w-full flex-col">
              <AdminHeader />
              <div className="flex flex-1">
                <AdminSidebar />
                <main className="flex flex-1 flex-col                transition-all duration-300 ease-in-out">
                  {children}
                </main>
              </div>
            </div>
          </SidebarLayout>
          <TailwindIndicator />
          <ToasterSonner />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
