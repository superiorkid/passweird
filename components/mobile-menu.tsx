"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import IconParkHamburgerButton from "./icons/IconParkHamburgerButton";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { User } from "@prisma/client";
import { AlignRight } from "lucide-react";

interface MobileMenuProps {
  currentUser: User | null;
}

const MobileMenu = ({ currentUser }: MobileMenuProps) => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          {/* TODO: Dark mode not effected */}
          <Button variant="ghost" size="icon" className="">
            <AlignRight className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex min-h-screen w-[100dvw] items-center justify-center dark:bg-gray-900 md:w-[540px]">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle({
                      className: "dark:bg-gray-900 dark:hover:bg-gray-800",
                    })}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#about" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle({
                      className: "dark:bg-gray-900 dark:hover:bg-gray-800",
                    })}
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
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
                      )}
                      variant="ghost"
                    >
                      Log Out
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
                        className={navigationMenuTriggerStyle({
                          className: "dark:bg-gray-900 dark:hover:bg-gray-800",
                        })}
                      >
                        Create Account
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
