import { Hero01 } from "@/components/hero-01";
import { Typography } from "@/components/ui/typography";

export default function HomePage() {
  return (
    <div
      className="flex flex-1
     flex-col"
    >
      <Hero01
        title="Hero 01 Title"
        description="Description Hero 01."
        label="Explorar agora"
        href="/"
      />
      <section className="container p-2">
        <Typography.H1 className="text-2xl font-semibold lg:text-3xl">
          Home
        </Typography.H1>
      </section>
    </div>
  );
}
