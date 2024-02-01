import React from "react";
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
import AddNewPasswoForm from "./add-new-password-form";

const AddNewPasswordDialog = () => {
  return (
    <Dialog>
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
          <AddNewPasswoForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewPasswordDialog;
