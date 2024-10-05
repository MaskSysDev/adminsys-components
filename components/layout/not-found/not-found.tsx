import Link from "next/link";

import { Button } from "@/components/ui/button";

type NotFoundProps = {
  labelAction?: string;
  href?: string;
};

export const NotFound = ({
  labelAction = "Go Home",
  href = "/",
}: NotFoundProps) => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-6 md:min-h-[48vh] md:py-20">
      <div className="text-7xl font-bold text-primary">404</div>

      <div className="text-center text-2xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">
        This page does not exist
      </div>

      <div className=" text-sm font-medium text-muted-foreground md:text-xl lg:text-2xl">
        The page you are looking for could not be found.
      </div>

      <Button asChild variant="secondary">
        <Link href={href}>{labelAction}</Link>
      </Button>
    </section>
  );
};
