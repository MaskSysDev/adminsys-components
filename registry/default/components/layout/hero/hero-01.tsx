/* eslint-disable @next/next/no-img-element */
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type Hero01Props = {
  title: string;
  description?: string;
  label?: string;
  href?: string;
};

export const Hero01 = ({ title, description, label, href }: Hero01Props) => {
  return (
    <section className="bg-gradient-to-b from-primary/10 to-background py-12 text-foreground ">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 sm:px-6 lg:flex-row lg:px-8">
        <div className="mb-8 lg:mb-0 lg:w-1/2">
          <h1 className="mb-4 text-center text-4xl font-bold lg:text-start">
            {title}
          </h1>
          <p className="mb-6 text-center text-xl lg:text-start">
            {description}
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button asChild size="lg">
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label}
                <ChevronRight className="ml-2 size-4" />
              </a>
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="Hero Image"
            className="rounded-lg shadow-lg"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};
