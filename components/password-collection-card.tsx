import { Category, Prisma } from "@prisma/client";
import { LucideEdit } from "lucide-react";
import CategoryIcon from "./category-icon";
import DeletePasswordAlertDialog from "./delete-password-alert-dialog";
import PasswordContent from "./password-content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import EditPasswordDialog from "./edit-password-dialog";

interface PasswordCollectionCardProps {
  categories: Category[];
  password: Prisma.PasswordGetPayload<{
    include: {
      category: true;
    };
  }>;
}

const PasswordCollectionCard = ({
  password,
  categories,
}: PasswordCollectionCardProps) => {
  return (
    <Card>
      <CardContent className="p-0 px-5">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="m-0">
              <div className="inline-flex text-sm capitalize">
                <CategoryIcon
                  category={password.category.slug}
                  className="mr-3 h-5 w-5"
                />
                {password.websiteName}
              </div>
            </AccordionTrigger>

            <AccordionContent className="space-y-2">
              <PasswordContent password={password} />
              <div className="flex items-center space-x-3 px-2">
                <DeletePasswordAlertDialog passwordId={password.id} />
                <EditPasswordDialog
                  categories={categories}
                  password={password}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default PasswordCollectionCard;
