import type { JSX } from "react";

import Link from "next/link";

import { BadgeTheme } from "@/components/ui/badge-theme";
import { Banner } from "@/components/ui/banner";
import { buttonThemeVariants } from "@/components/ui/button-theme";

interface HeroSimpleProps {
  hero: {
    size: string;
    title?: string;
    subtitle?: string;
    subtitleColor?: string;
    description?: string;
    labelLink1?: string;
    link1: string;
    labelLink2?: string;
    link2: string;
    backgroundImage?: string;
    backgroundColor?: string;
    backgroundColorTop?: string;
    backgroundColorBottom?: string;
  };
}

export function HeroSimple({ hero }: Readonly<HeroSimpleProps>): JSX.Element {
  return (
    <Banner.Root
      size={hero.size}
      backgroundImage={hero.backgroundImage}
      backgroundColor={hero.backgroundColor}
      backgroundColorTop={hero.backgroundColorTop}
      backgroundColorBottom={hero.backgroundColorBottom}
    >
      {hero.subtitle || hero.subtitleColor ? (
        <BadgeTheme
          variant="muted"
          className="mb-3 rounded-md text-muted-foreground"
        >
          <div className="inline">
            <span>{hero.subtitle}</span>
            {hero.subtitleColor ? (
              <span className="text-primary">{hero.subtitleColor}</span>
            ) : null}
          </div>
        </BadgeTheme>
      ) : null}

      {hero.title ? <Banner.Title>{hero.title}</Banner.Title> : null}

      {hero.description ? (
        <Banner.Description>{hero.description}</Banner.Description>
      ) : null}

      <Banner.Actions>
        {hero.labelLink1 ? (
          <Link
            className={buttonThemeVariants({
              size: "lg",
              className: "w-full sm:w-auto",
            })}
            href={hero.link1}
          >
            {hero.labelLink1}
          </Link>
        ) : null}
        {hero.labelLink2 ? (
          <Link
            className={buttonThemeVariants({
              size: "lg",
              variant: "secondary",
              theme: "outline",
              className: "w-full sm:w-auto",
            })}
            href={hero.link2}
            rel="noopener noreferrer"
            target="_blank"
          >
            {hero.labelLink2}
          </Link>
        ) : null}
      </Banner.Actions>
    </Banner.Root>
  );
}
