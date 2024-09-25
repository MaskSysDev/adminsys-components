import { ToggleTheme } from "@/components/layout/toggle/toggle-theme";

import { SidebarTrigger } from "@/components/ui/sidebar";

export const DocsHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95">
      <div className="mx-auto flex h-14 items-center justify-center px-2">
        <div className="container relative flex w-full max-w-4xl items-center justify-between">
          {/* Left */}
          <div className="flex items-center space-x-2">
            <SidebarTrigger />
          </div>

          {/* Right */}
          <div className="flex flex-1 items-center justify-end space-x-2">
            <ToggleTheme />
          </div>
        </div>
      </div>
    </header>
  );
};
