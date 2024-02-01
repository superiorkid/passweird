import { cn } from "@/lib/utils";
import React from "react";

interface HeaderProps {
  title: string;
  description: string;
  className?: string;
}

const Header = ({ title, description, className }: HeaderProps) => {
  return (
    <header className={cn("mb-5", className)}>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-zinc-500">{description}</p>
    </header>
  );
};

export default Header;
