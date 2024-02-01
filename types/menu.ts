import { LucideIcon } from "lucide-react";
import { SVGProps } from "react";

export type Menu = {
  label: string;
  href: string;
  icon: LucideIcon;
  isActive: boolean;
};
