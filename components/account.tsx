import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import RadixIconsCaretSort from "./icons/RadixIconsCaretSort";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@prisma/client";

interface AccountProps {
  currentUser: User | null;
}

export function Account({ currentUser }: AccountProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          <div className="flex w-full items-center justify-between capitalize">
            {/* TODO: long name broken overflow */}
            <div className="inline-flex items-center">
              <Avatar className="mr-3 h-7 w-7">
                <AvatarImage
                  src={`https://api.dicebear.com/7.x/adventurer-neutral/png?seed=${currentUser?.email}`}
                />
                <AvatarFallback>MI</AvatarFallback>
              </Avatar>
              {currentUser?.name}
            </div>

            <RadixIconsCaretSort className="h-5 w-5 flex-none text-zinc-500" />
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="ml-2 min-w-[14rem]">
        <DropdownMenuLabel>Log out</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
