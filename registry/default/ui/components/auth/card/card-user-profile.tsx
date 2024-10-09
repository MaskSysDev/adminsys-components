import { User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function CardUserProfile() {
  return (
    <Card className="w-full">
      <CardHeader className="p-0">
        <div className="h-48 rounded-t-lg bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-primary/0 to-background" />
      </CardHeader>
      <CardContent className="relative px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <Avatar className="absolute -top-16 left-1/2 size-32 -translate-x-1/2  shadow-md">
          <AvatarImage
            src="/assets/images/avatar/avatar.jpg"
            alt="User profile picture"
          />
          <AvatarFallback>
            <User className="size-20" />
          </AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-2xl font-bold">User 01</h2>
          <p className="text-muted-foreground">user01@email.com</p>
        </div>
      </CardContent>
    </Card>
  );
}
