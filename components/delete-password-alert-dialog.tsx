import React from "react";
import { Button } from "./ui/button";
import { LucideTrash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const DeletePasswordAlertDialog = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" className="flex-1" size="sm">
          <LucideTrash2 className="mr-2 h-4 w-4" />
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Password</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this password permanently?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex">
          <AlertDialogCancel className="flex-1">Cancel</AlertDialogCancel>
          <AlertDialogAction className="flex-1 bg-rose-500">
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeletePasswordAlertDialog;
