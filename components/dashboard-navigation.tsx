"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useReducer } from "react";
import CategoriesMenu from "./categories-menu";
import DashboardsMenu from "./dashboards-menu";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "./ui/button";
import { AlignLeft } from "lucide-react";

const DashboardNavigation = () => {
  const [isOpen, toggleIsOpen] = useReducer((state) => !state, false);

  return (
    <nav className="border-b px-5 py-1.5 shadow-sm md:hidden">
      <div className="flex items-center justify-between">
        <Sheet open={isOpen} onOpenChange={toggleIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <AlignLeft className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="overflow-y-auto">
            <aside className="space-y-3.5">
              <div className="space-y-2.5">
                <h1 className="font-bold">Passwords</h1>
                <DashboardsMenu variant="MOBILE" toggleIsOpen={toggleIsOpen} />
              </div>
              <div className="space-y-2.5">
                <h1 className="font-bold">Categories</h1>
                <CategoriesMenu variant="MOBILE" toggleIsOpen={toggleIsOpen} />
              </div>
            </aside>
          </SheetContent>
        </Sheet>

        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default DashboardNavigation;
