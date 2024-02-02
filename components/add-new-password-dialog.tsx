"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { LucidePlus } from "lucide-react";
import AddNewPasswoForm from "./forms/add-new-password-form";
import { Category } from "@prisma/client";

interface AddNewPasswordDialogProps {
  categories: Category[];
}

const AddNewPasswordDialog = ({ categories }: AddNewPasswordDialogProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button>
          <LucidePlus className="mr-2 h-4 w-4" />
          Add new password
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Password</DialogTitle>
          <DialogDescription>
            Enter the necessary information to create a new password and save.
          </DialogDescription>
        </DialogHeader>
        <div>
          <AddNewPasswoForm
            categories={categories}
            setIsModalOpen={setIsOpen}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewPasswordDialog;
