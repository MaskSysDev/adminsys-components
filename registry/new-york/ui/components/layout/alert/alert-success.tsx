import { Check } from "lucide-react";

import { Alert, AlertTitle } from "@/components/ui/alert";

interface AlertSuccessProps {
  message?: string;
}

export const AlertSuccess = ({ message }: AlertSuccessProps) => {
  if (!message) return null;

  return (
    <Alert className="border-0 bg-green-600/20 text-green-600">
      <AlertTitle className="flex items-center gap-2">
        <Check className="size-6" />
        {message}
      </AlertTitle>
    </Alert>
  );
};
