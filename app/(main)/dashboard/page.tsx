import AddNewPasswordDialog from "@/components/add-new-password-dialog";
import Header from "@/components/header";
import PasswordCollectionCard from "@/components/password-collection-card";
import { Button, buttonVariants } from "@/components/ui/button";
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
        <AddNewPasswordDialog />
      </div>

      <div className="space-y-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <PasswordCollectionCard key={index} />
        ))}
      </div>
    </>
  );
};

export default DashboardPage;
