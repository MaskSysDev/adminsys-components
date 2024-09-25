import type { JSX } from "react";

import Link from "next/link";

import { Icon } from "@/components/layout/icon/icon";

import { Footer } from "@/components/ui/footer";

interface FooterSimpleProps {
  footer: {
    author: string;
    authorUrl: string;
    name: string;
    facebook: string;
    instagram: string;
    youtube: string;
  };
}

export const FooterSimple = ({ footer }: FooterSimpleProps): JSX.Element => {
  return (
    <Footer.Root>
      <div className="container mx-auto flex flex-col flex-wrap items-center py-2 sm:flex-row">
        <p className="text-center text-sm sm:text-left">
          &copy;2024{" "}
          <Link
            className="group inline-flex h-10 w-max items-center justify-center rounded-md py-2 text-sm font-semibold text-foreground transition ease-in-out hover:bg-transparent hover:text-accent-foreground focus:outline-none focus-visible:text-accent-foreground focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            href="/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="font-semibold">{footer.name}</span>
          </Link>{" "}
          by{" "}
          <Link
            className="group inline-flex h-10 w-max items-center justify-center rounded-md py-2 text-sm font-semibold text-muted-foreground transition ease-in-out hover:bg-transparent hover:text-accent-foreground focus:outline-none focus-visible:text-accent-foreground focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            href={footer.authorUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="font-semibold">{footer.author}</span>
          </Link>
        </p>
        <span className="mt-2 inline-flex justify-center gap-4 sm:ml-auto sm:mt-0 sm:justify-start">
          <Link
            className="group inline-flex h-10 w-max items-center justify-center rounded-md py-2 text-sm font-semibold text-muted-foreground transition ease-in-out hover:bg-transparent hover:text-accent-foreground focus:outline-none focus-visible:text-accent-foreground focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            href={footer.facebook}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon.Facebook />
          </Link>
          <Link
            className="group inline-flex h-10 w-max items-center justify-center rounded-md py-2 text-sm font-semibold text-muted-foreground transition ease-in-out hover:bg-transparent hover:text-accent-foreground focus:outline-none focus-visible:text-accent-foreground focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            href={footer.instagram}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon.Instagram />
          </Link>
          <Link
            className="group inline-flex h-10 w-max items-center justify-center rounded-md py-2 text-sm font-semibold text-muted-foreground transition ease-in-out hover:bg-transparent hover:text-accent-foreground focus:outline-none focus-visible:text-accent-foreground focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            href={footer.youtube}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon.Youtube />
          </Link>
        </span>
      </div>
    </Footer.Root>
  );
};
