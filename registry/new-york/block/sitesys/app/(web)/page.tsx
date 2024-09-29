import { siteConfig } from "@/config/site";

import { Container } from "@/components/layout/container/container";
import { HeroSimple } from "@/components/layout/hero/hero-simple";

export default function HomePage() {
  return (
    <Container size="full">
      <HeroSimple hero={siteConfig.heroSimple} />
    </Container>
  );
}
