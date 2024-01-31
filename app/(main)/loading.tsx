import Container from "@/components/container";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const LandingPageSkeleton = () => {
  return (
    <>
      <Skeleton className="sticky top-0 z-10 h-16 border-b shadow-sm" />
      <Container className="max-w-screen-xl">
        <section className="flex min-h-[80dvh] flex-col-reverse items-center justify-center gap-12 px-5 lg:flex-row lg:gap-0 lg:space-x-16 lg:px-20">
          <div className="space-y-4 lg:flex-1">
            <Skeleton className="h-10 w-[389px]" />

            <div className="flex flex-col space-y-2">
              <Skeleton className="h-6 w-[540px]" />
              <Skeleton className="h-6 w-[408px]" />
              <Skeleton className="h-6 w-[498px]" />
              <Skeleton className="h-6 w-[340px]" />
            </div>
          </div>
          <Skeleton className="aspect-video lg:flex-1" />
        </section>
      </Container>
    </>
  );
};

export default LandingPageSkeleton;
