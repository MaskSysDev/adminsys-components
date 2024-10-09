import { TriangleAlert } from "lucide-react";

import { Alert, AlertTitle } from "@/components/ui/alert";

interface AlertErrorProps {
  message?: string;
}

export const AlertError = ({ message }: AlertErrorProps) => {
  if (!message) return null;

  return (
    <Alert className="border-0 bg-red-600/20 text-red-600">
      <AlertTitle className="flex items-center gap-2">
        <TriangleAlert className="size-6" />
        {message}
      </AlertTitle>
    </Alert>
  );
};
