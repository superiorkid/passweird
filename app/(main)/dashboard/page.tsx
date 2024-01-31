import Header from "@/components/header";
import PasswordCollectionCard from "@/components/password-collection-card";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LucidePlus } from "lucide-react";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <>
      <Header
        title="All Passwords"
        description="Safety manage and access your passwords."
      />

      <div className="mb-6 flex items-center space-x-3">
        <Input type="text" placeholder="Search" />
        <Link href="/dashboard/password/add" className={buttonVariants()}>
          <LucidePlus className="mr-2 h-4 w-4" />
          Add new password
        </Link>
      </div>

      <div className="space-y-2">
        {Array.from({ length: 25 }).map((_, index) => (
          <PasswordCollectionCard key={index} />
        ))}
      </div>
    </>
  );
};

export default DashboardPage;
