"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { useTransition } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

interface AuthButtonGroupProps {
  currentUser: User | null;
}

const AuthButtonGroup = ({ currentUser }: AuthButtonGroupProps) => {
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () => {
      await signOut({ redirect: false });
      router.refresh();
    },
  });

  const handleLogOut = async () => {
    await mutateAsync()
      .then((callback) => {
        toast.success("Logged Out");
      })
      .catch((error) => {
        toast.error("Log out Failed");
      });
  };

  return (
    <div className="hidden lg:block">
      <NavigationMenu>
        <NavigationMenuList>
          {currentUser ? (
            <>
              <NavigationMenuItem>
                <Link href="/dashboard" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle({
                      className: "dark:bg-gray-900 dark:hover:bg-gray-800",
                    })}
                  >
                    Dashboard
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Button
                  className={cn(
                    navigationMenuTriggerStyle({
                      className: "dark:bg-gray-900 dark:hover:bg-gray-800",
                    }),
                    "text-rose-500 dark:hover:text-rose-300",
                  )}
                  variant="ghost"
                  disabled={isPending}
                  onClick={handleLogOut}
                >
                  {isPending ? "Logged out..." : "Log out"}
                </Button>
              </NavigationMenuItem>
            </>
          ) : (
            <>
              <NavigationMenuItem>
                <Link href="/sign-in" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle({
                      className: "dark:bg-gray-900 dark:hover:bg-gray-800",
                    })}
                  >
                    Log in
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/sign-up" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      buttonVariants({
                        variant: "default",
                        className:
                          "transition-all duration-300 hover:text-zinc-200 dark:hover:text-zinc-800",
                      }),
                    )}
                  >
                    Create Account
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default AuthButtonGroup;
