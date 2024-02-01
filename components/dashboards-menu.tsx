"use client";

import useDashboardMenu from "@/hooks/useDashboardMenu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const DashboardsMenu = () => {
  const dashboardMenu = useDashboardMenu();

  return (
    <div className="space-y-0.5">
      {dashboardMenu.map(({ href, icon: Icon, isActive, label }, index) => (
        <Link
          href={href}
          className={cn(
            buttonVariants({
              variant: "ghost",
              className: "w-full justify-start capitalize",
            }),
          )}
        >
          <Icon className="mr-2 h-4 w-4 flex-none" />
          {label}
        </Link>
      ))}
    </div>
  );
};

export default DashboardsMenu;
