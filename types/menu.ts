import { LucideIcon } from "lucide-react";

export type Menu = {
  label: string;
  href: string;
  icon: LucideIcon;
  isActive: boolean;
  isAvailable: boolean;
};
