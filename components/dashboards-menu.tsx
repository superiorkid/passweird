"use client";

import useDashboardMenu from "@/hooks/useDashboardMenu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Dispatch } from "react";
import { useRouter } from "next/navigation";

type Mobile = {
  variant: "MOBILE";
  toggleIsOpen: React.DispatchWithoutAction;
};

type Desktop = {
  variant: "DESKTOP";
};

type DashboardMenuProps = Mobile | Desktop;

const DashboardsMenu = (props: DashboardMenuProps) => {
  const router = useRouter();
  const dashboardMenu = useDashboardMenu();

  return (
    <div className="space-y-0.5">
      {dashboardMenu.map(({ href, icon: Icon, isActive, label }, index) =>
        props.variant === "DESKTOP" ? (
          <Link
            key={index}
            href={href}
            className={cn(
              buttonVariants({
                variant: isActive ? "default" : "ghost",
                className: "w-full justify-start overflow-hidden capitalize",
              }),
            )}
          >
            <Icon className="mr-2 h-4 w-4 flex-none" />
            {label}
          </Link>
        ) : (
          <Button
            key={index}
            className="w-full justify-start overflow-hidden capitalize"
            variant={!isActive ? "ghost" : "default"}
            onClick={() => {
              router.push(href);
              props.toggleIsOpen();
            }}
          >
            <Icon className="mr-2 h-4 w-4 flex-none" />
            {label}
          </Button>
        ),
      )}
    </div>
  );
};

export default DashboardsMenu;
