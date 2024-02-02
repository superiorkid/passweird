import { getPasswordCollection } from "@/actions/password-action";
import AddNewPasswordDialog from "@/components/add-new-password-dialog";
import Header from "@/components/header";
import PasswordCollectionCard from "@/components/password-collection-card";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { getCategories } from "@/actions/category-action";

const DashboardPage = async () => {
  const [passwordsCollection, categories] = await Promise.all([
    getPasswordCollection(),
    getCategories(),
  ]);

  return (
    <>
      <Header
        title="All Passwords"
        description="Safety manage and access your passwords."
      />

      <div className="mb-6 flex items-center space-x-3">
        <Input
          type="text"
          placeholder="Search"
          disabled={!passwordsCollection.length}
        />
        <AddNewPasswordDialog categories={categories} />
      </div>

      <div className="space-y-2.5">
        {!passwordsCollection.length ? (
          <Alert variant="destructive">
            <Terminal className="h-4 w-4" />
            <AlertTitle>No Password Found</AlertTitle>
            <AlertDescription>
              Looks like you haven&apos;t added any passwords yet.
            </AlertDescription>
          </Alert>
        ) : (
          passwordsCollection.map((collection, index) => (
            <PasswordCollectionCard password={collection} key={index} />
          ))
        )}
      </div>
    </>
  );
};

export default DashboardPage;
