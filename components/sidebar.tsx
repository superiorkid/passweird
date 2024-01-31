import { cn } from "@/lib/utils";
import {
  LucideGlobe,
  LucideLockKeyhole,
  ScanLineIcon,
  SparkleIcon,
} from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Sidebar = () => {
  return (
    <aside className="flex max-h-screen overflow-y-auto overflow-x-hidden px-6 py-3">
      <div className="w-full space-y-5">
        <div className="space-y-2.5">
          <h1 className="font-bold">Passwords</h1>
          <div>
            <Link
              href="/dashboard"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  className: "w-full justify-start",
                }),
              )}
            >
              <LucideLockKeyhole className="mr-2 h-4 w-4" />
              Passwords
            </Link>
            <Link
              href="/dashboard/feature/generate-password"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  className: "w-full justify-start",
                }),
              )}
            >
              <SparkleIcon className="mr-2 h-4 w-4" />
              Password Generator
            </Link>

            <Link
              href="/dashboard/feature/password-analyzer"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  className: "w-full justify-start",
                }),
              )}
            >
              <ScanLineIcon className="mr-2 h-4 w-4" />
              Password Analyzer
            </Link>
          </div>
        </div>

        <div className="space-y-2.5">
          <h1 className="font-bold">Categories</h1>
          <div className="space-y-1.5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Link
                key={index}
                href={`/categories/categories-${index}`}
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    className: "w-full justify-start",
                  }),
                )}
              >
                <LucideGlobe className="mr-2 h-4 w-4" />
                Web Logins
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
