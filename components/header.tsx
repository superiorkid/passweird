import { cn } from "@/lib/utils";
import React from "react";
import { ThemeSwitcher } from "./theme-switcher";

interface HeaderProps {
  title: string;
  description: string;
  className?: string;
}

const Header = ({ title, description, className }: HeaderProps) => {
  return (
    <header
      className={cn(
        "relative mb-5 flex items-center justify-between pr-3",
        className,
      )}
    >
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-zinc-500">{description}</p>
      </div>

      <ThemeSwitcher className="hidden md:flex" />
    </header>
  );
};

export default Header;
