import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/provider/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen min-w-full flex-col">
            <div className="flex flex-1">
              <main className="flex flex-1 flex-col">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
