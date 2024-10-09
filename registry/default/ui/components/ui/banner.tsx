import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

type BannerRootProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  size?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  backgroundColorTop?: string;
  backgroundColorBottom?: string;
};

const BannerRoot = forwardRef<HTMLDivElement, BannerRootProps>(
  (
    {
      className,
      children,
      size,
      backgroundImage,
      backgroundColor = "rgba(0, 0, 0, 0.0)",
      backgroundColorTop = "rgba(0, 0, 0, 0.0)",
      backgroundColorBottom = "rgba(0, 0, 0, 0.0)",
      ...props
    },
    ref,
  ) => (
    <div
      className={cn("min-h-[10vh]", className)}
      ref={ref}
      style={size ? { height: `${size}vh` } : {}}
      {...props}
    >
      <div
        className="relative h-full overflow-hidden bg-cover bg-center bg-no-repeat"
        style={
          backgroundImage
            ? {
                backgroundImage: `linear-gradient(${backgroundColorTop}, ${backgroundColorBottom}), url(${backgroundImage})`,
              }
            : {}
        }
      >
        <div
          className="absolute inset-0 flex size-full items-center justify-center overflow-hidden bg-fixed"
          style={{
            backgroundColor,
          }}
        >
          <div className="container mx-auto flex w-full max-w-screen-xl flex-col items-start gap-2 px-4">
            <div className="lg:flex-justify mx-auto my-10 mt-12 flex max-w-7xl flex-col gap-3 px-4 sm:px-6 lg:mx-0 lg:flex lg:flex-row lg:px-0">
              <div className="sm:text-center lg:text-left">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
);
BannerRoot.displayName = "BannerRoot";

const BannerTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h2
    className={cn(
      "max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl",
      className,
    )}
    ref={ref}
    {...props}
  >
    <span className="block xl:inline">{children}</span>
  </h2>
));
BannerTitle.displayName = "BannerTitle";

const BannerSubtitle = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
  <div
    className={cn(
      "mb-3 inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm font-medium text-muted-foreground",
      className,
    )}
    ref={ref}
    {...props}
  >
    {children}
  </div>
));
BannerSubtitle.displayName = "BannerSubtitle";

const BannerDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    className={cn(
      "mt-3 max-w-2xl text-lg text-muted-foreground sm:text-lg md:text-2xl",
      className,
    )}
    ref={ref}
    {...props}
  />
));
BannerDescription.displayName = "BannerDescription";

const BannerActions = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      "mt-5 space-y-4 sm:mt-8 sm:flex sm:justify-center sm:space-x-4 sm:space-y-0 lg:justify-start",
      className,
    )}
    ref={ref}
    {...props}
  />
));
BannerActions.displayName = "BannerActions";

export const Banner = {
  Root: BannerRoot,
  Subtitle: BannerSubtitle,
  Title: BannerTitle,
  Description: BannerDescription,
  Actions: BannerActions,
};
