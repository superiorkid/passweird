"use client";

import React, { useReducer, useState } from "react";
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
import { useMutation } from "@tanstack/react-query";
import { deletePassword } from "@/actions/password-action";
import { toast } from "sonner";

interface DeletePasswordAlertDialogProps {
  passwordId: string;
}

const DeletePasswordAlertDialog = ({
  passwordId,
}: DeletePasswordAlertDialogProps) => {
  const [isOpen, toggleIsOpen] = useReducer((state) => !state, false);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (id: string) =>
      await deletePassword(id)
        .then((callback) => {
          toast.success(callback.message);
        })
        .catch((error) => {
          toast.error(error.message);
        })
        .finally(() => {
          toggleIsOpen();
        }),
  });

  return (
    <AlertDialog onOpenChange={toggleIsOpen} open={isOpen}>
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
          <AlertDialogCancel className="flex-1" disabled={isPending}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="flex-1 bg-rose-500"
            disabled={isPending}
            onClick={async (event) => {
              event.preventDefault();
              await mutateAsync(passwordId);
            }}
          >
            {isPending ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeletePasswordAlertDialog;
