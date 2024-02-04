import { getCategories } from "@/actions/category-action";
import {
  getPasswordCollection,
  totalUserPasswordSaved,
} from "@/actions/password-action";
import AddNewPasswordDialog from "@/components/add-new-password-dialog";
import Header from "@/components/header";
import PasswordCollectionCard from "@/components/password-collection-card";
import SearchPassword from "@/components/search-password";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

interface DashboarPageProps {
  searchParams: {
    category?: string;
    search?: string;
  };
}

const DashboardPage = async ({
  searchParams: { category, search },
}: DashboarPageProps) => {
  const [passwordsCollection, categories, total] = await Promise.all([
    getPasswordCollection({
      category: category as string,
      search: search as string,
    }),
    getCategories(),
    totalUserPasswordSaved(),
  ]);

  return (
    <>
      <Header
        title="All Passwords"
        description="Safety manage and access your passwords."
        className="mt-5"
      />

      <div className="mb-6 flex items-center space-x-3">
        <SearchPassword total={total} />
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
            <PasswordCollectionCard
              key={index}
              password={collection}
              categories={categories}
            />
          ))
        )}
      </div>
    </>
  );
};

export default DashboardPage;
