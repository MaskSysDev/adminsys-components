import { LoadingSpinner } from "@/components/layout/loading/loading-spinner";

export default function Loading() {
  return (
    <section className="flex flex-col items-center gap-64 py-72">
      <div className="container flex h-full flex-col items-center justify-center space-y-2">
        <LoadingSpinner />
      </div>
    </section>
  );
}
