"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "@prisma/client";
import { HomeIcon, LogOut } from "lucide-react";
import Image from "next/image";
import RadixIconsCaretSort from "./icons/RadixIconsCaretSort";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useTransition } from "react";
import { toast } from "sonner";

interface AccountProps {
  currentUser: User | null;
}

export function Account({ currentUser }: AccountProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleLogOut = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.preventDefault();
    startTransition(() => {
      signOut({ redirect: false })
        .then(() => {
          toast.success("logged out");
          router.push("/");
        })
        .catch((error) => {
          toast.error("Error white logged out");
        });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          <div className="flex w-full items-center justify-between">
            <div className="overflow-hidden">
              <Image
                src={`https://api.dicebear.com/7.x/adventurer-neutral/png?seed=${currentUser?.email}`}
                alt={`${currentUser?.name} profile photo`}
                width={25}
                height={25}
                className="mr-2 inline-flex h-6 w-6 items-center rounded-full object-cover"
              />
              {currentUser?.email}
            </div>

            <RadixIconsCaretSort className="bg-background" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[15dvw]">
        <DropdownMenuItem onClick={() => router.push("/")} disabled={isPending}>
          <HomeIcon className="mr-2 h-5 w-5" />
          Back To Home
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogOut} disabled={isPending}>
          <LogOut className="mr-2 h-5 w-5" />
          {isPending ? "Logged Out..." : "Log Out"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
