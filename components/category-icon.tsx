import { categoryIcon } from "@/constants/category-icon";
import { cn } from "@/lib/utils";
import { Shell } from "lucide-react";
import React from "react";

const CategoryIcon = ({
  category,
  className,
}: {
  category: string;
  className?: string;
}) => {
  const IconComponent = categoryIcon[category] || Shell;
  return <IconComponent className={cn(className)} />;
};

export default CategoryIcon;
