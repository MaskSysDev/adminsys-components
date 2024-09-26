import { Hero01 } from "@/components/layout/hero/hero-01";

export default function Hero01Page() {
  return (
    <div
      className="flex flex-1
     flex-col"
    >
      <Hero01
        title="Hero 01 Title"
        description="Description Hero 01."
        label="Hero Label"
        href="/"
      />
    </div>
  );
}
