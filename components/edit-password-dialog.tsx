"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LucideEdit } from "lucide-react";
import EditPasswordForm from "./forms/edit-password-form";
import { Button } from "./ui/button";
import { Category, Prisma } from "@prisma/client";
import { useReducer, useState } from "react";

interface EditPasswordDialogProps {
  categories: Category[];
  password: Prisma.PasswordGetPayload<{
    include: {
      category: true;
    };
  }>;
}

const EditPasswordDialog = ({
  categories,
  password,
}: EditPasswordDialogProps) => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpen, toggleIsOpen] = useReducer((state) => !state, false);

  return (
    <Dialog open={isOpen} onOpenChange={toggleIsOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" className="flex-1" size="sm">
          <LucideEdit className="mr-2 h-4 w-4" />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Passwod</DialogTitle>
          <DialogDescription>
            Enter the necessary information to edit this password and save.
          </DialogDescription>
        </DialogHeader>
        <div>
          <EditPasswordForm
            categories={categories}
            password={password}
            toggleIsOpen={toggleIsOpen}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditPasswordDialog;
