import { cn } from "@/lib/utils";

type LoadingSpinnerProps = {
  className?: string;
};

export const LoadingSpinner = ({ className }: LoadingSpinnerProps) => {
  return (
    <span
      aria-label="loading"
      className={cn(
        "absolute inline-block size-6 min-w-max animate-spin rounded-full border-[3px] border-current border-t-transparent text-muted-foreground",
        className,
      )}
    >
      <span className="sr-only">Loading...</span>
    </span>
  );
};
