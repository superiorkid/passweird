import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import RadixIconsCaretSort from "./icons/RadixIconsCaretSort";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Account() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          <div className="flex w-full items-center justify-between">
            {/* TODO: long name broken overflow */}
            <div className="inline-flex items-center capitalize">
              <Avatar className="mr-3 h-7 w-7">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>MI</AvatarFallback>
              </Avatar>
              Moh. Ilhamuddin
            </div>

            <RadixIconsCaretSort className="h-5 w-5 flex-none text-zinc-500" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-2/3">
        <DropdownMenuLabel className="w-full">Log out</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
