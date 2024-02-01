import React from "react";
import { Card, CardContent } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Globe, LucideTrash2, LucideEdit } from "lucide-react";
import { Button } from "./ui/button";
import DeletePasswordAlertDialog from "./delete-password-alert-dialog";

const PasswordCollectionCard = () => {
  return (
    <Card>
      <CardContent className="p-0 px-5">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="m-0">
              <div className="inline-flex text-sm">
                <Globe className="mr-3 h-5 w-5" />
                Gmail Account
              </div>
            </AccordionTrigger>

            <AccordionContent className="space-y-2">
              <div className="space-y-0.5 rounded-lg border p-4">
                <p>Email: Musthafe@gmail.com</p>
                <p>Password: ******</p>
                <p>URL: https://dribble.com/login</p>
              </div>
              <div className="flex items-center space-x-3 px-2">
                <DeletePasswordAlertDialog />
                <Button variant="secondary" className="flex-1" size="sm">
                  <LucideEdit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default PasswordCollectionCard;
