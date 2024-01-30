import { Skeleton } from "@/components/ui/skeleton";

const AuthenticationSkeleton = () => {
  return (
    <div className="min-h-screen flex justify-center items-center relative">
      <div className="min-w-[498px] space-y-5">
        <div className="flex flex-col items-center space-y-2">
          <Skeleton className="w-[230px] h-12" />
          <Skeleton className="w-[380px] h-6" />
        </div>
        <div className="p-5">
          <Skeleton className="aspect-square" />
        </div>
      </div>
    </div>
  );
};

export default AuthenticationSkeleton;
