import React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

const DashboardSkeleton = () => {
  return (
    <div>
      <header className="mb-5 space-y-1.5">
        <Skeleton className="h-10 w-[200px]" />
        <Skeleton className="h-6 w-[430px]" />
      </header>
    </div>
  );
};

export default DashboardSkeleton;
