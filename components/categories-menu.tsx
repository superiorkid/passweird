"use client";

import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { LucideGlobe } from "lucide-react";
import { cn } from "@/lib/utils";
import useCategories from "@/hooks/useCategories";

const CategoriesMenu = () => {
  const categoreis = useCategories();

  return (
    <div className="space-y-0.5">
      {categoreis.map(({ href, icon: Icon, isActive, label }, index) => (
        <Link
          key={index}
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

export default CategoriesMenu;
