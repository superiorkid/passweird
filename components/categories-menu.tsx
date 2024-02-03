"use client";

import useCategories from "@/hooks/useCategories";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { Badge } from "./ui/badge";

const CategoriesMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const categories = useCategories();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (!value) {
        params.delete(name);
      } else {
        params.set(name, value);
      }

      return params.toString();
    },
    [searchParams],
  );

  return (
    <div className="space-y-0.5">
      {categories.map(({ value, icon: Icon, label, isActive }, index) => (
        <Button
          key={index}
          className={cn("w-full justify-start capitalize")}
          variant={isActive ? "secondary" : "ghost"}
          onClick={() =>
            router.push(
              pathname + "?" + createQueryString("category", value as string),
            )
          }
        >
          <Icon className="mr-2 h-4 w-4 flex-none" />
          {label}
        </Button>
      ))}
    </div>
  );
};

export default CategoriesMenu;
