"use client";

import useCategories from "@/hooks/useCategories";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const CategoriesMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const categoreis = useCategories();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

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
