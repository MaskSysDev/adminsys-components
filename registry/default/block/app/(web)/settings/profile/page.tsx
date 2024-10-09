import { Metadata } from "next";

import UserProfile from "@/components/auth/card/card-user-profile";

export const metadata: Metadata = {
  title: "Profile",
  description: "Description Profile.",
};

export default function ProfilePage() {
  return <UserProfile />;
}
