import { Container } from "@/components/layout/container/container";

interface SiteFooterProps {
  footer: {
    author: string;
    authorUrl: string;
    name: string;
    facebook: string;
    instagram: string;
    youtube: string;
  };
}

export const SiteFooter = ({ footer }: SiteFooterProps) => {
  return (
    <footer className="body-font static bottom-0 left-0 w-full border-t border-border/40 bg-background text-muted-foreground">
      <Container className="flex flex-col flex-wrap items-center py-2 sm:flex-row">
        <p className="text-center text-sm sm:text-left">
          &copy;2024{" "}
          <a
            className="group inline-flex h-10 w-max items-center justify-center rounded-md py-2 text-sm font-semibold text-foreground transition ease-in-out hover:bg-transparent hover:text-accent-foreground focus:outline-none focus-visible:text-accent-foreground focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            href="/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="font-semibold">{footer.name}</span>
          </a>{" "}
          by{" "}
          <a
            className="group inline-flex h-10 w-max items-center justify-center rounded-md py-2 text-sm font-semibold text-muted-foreground transition ease-in-out hover:bg-transparent hover:text-accent-foreground focus:outline-none focus-visible:text-accent-foreground focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            href={footer.authorUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="font-semibold">{footer.author}</span>
          </a>
        </p>
        <span className="mt-2 inline-flex justify-center gap-4 sm:ml-auto sm:mt-0 sm:justify-start">
          <a
            className="group inline-flex h-10 w-max items-center justify-center rounded-md py-2 text-sm font-semibold text-muted-foreground transition ease-in-out hover:bg-transparent hover:text-accent-foreground focus:outline-none focus-visible:text-accent-foreground focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            href={footer.facebook}
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            className="group inline-flex h-10 w-max items-center justify-center rounded-md py-2 text-sm font-semibold text-muted-foreground transition ease-in-out hover:bg-transparent hover:text-accent-foreground focus:outline-none focus-visible:text-accent-foreground focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            href={footer.instagram}
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a
            className="group inline-flex h-10 w-max items-center justify-center rounded-md py-2 text-sm font-semibold text-muted-foreground transition ease-in-out hover:bg-transparent hover:text-accent-foreground focus:outline-none focus-visible:text-accent-foreground focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            href={footer.youtube}
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-youtube"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
              <path d="m10 15 5-3-5-3z" />
            </svg>
          </a>
        </span>
      </Container>
    </footer>
  );
};
