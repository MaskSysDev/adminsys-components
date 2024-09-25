import { Typography } from "@/components/ui/typography";

export default function HomePage() {
  return (
    <div className="flex flex-1 justify-center">
      <section className="container p-2">
        <Typography.H1 className="text-2xl font-semibold lg:text-3xl">
          Home
        </Typography.H1>
      </section>
    </div>
  );
}
