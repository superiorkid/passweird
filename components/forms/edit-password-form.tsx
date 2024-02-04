"use client";

import {
  TPasswordSchema,
  passwordSchema,
} from "@/lib/validators/password-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Category, Prisma } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import CategoryIcon from "../category-icon";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { editPassword } from "@/actions/password-action";
import { SetStateAction, useReducer, useState } from "react";
import { toast } from "sonner";
import { Eye, EyeIcon, EyeOffIcon } from "lucide-react";

interface EditPasswordFormProps {
  toggleIsOpen: React.DispatchWithoutAction;
  categories: Category[];
  password: Prisma.PasswordGetPayload<{
    include: {
      category: true;
    };
  }>;
}

const EditPasswordForm = ({
  password,
  categories,
  toggleIsOpen,
}: EditPasswordFormProps) => {
  const [seePassword, toggleSeePassword] = useReducer((state) => !state, false);

  const form = useForm<TPasswordSchema>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      websiteName: password.websiteName,
      username: password?.username || undefined,
      email: password?.email || undefined,
      password: password.password,
      url: password?.url || undefined,
      category: password.category.id,
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (values: TPasswordSchema) =>
      await editPassword({ id: password.id, values: { ...values } })
        .then((callback) => {
          toast.success(callback.message);
          toggleIsOpen();
        })
        .catch((error) => {
          toast.error(error.message);
        }),
  });

  const onSubmit = async (values: TPasswordSchema) => {
    mutateAsync(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger autoFocus disabled={isPending}>
                    <SelectValue placeholder="Select Categories" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category, index) => (
                    <SelectItem
                      disabled={isPending}
                      key={index}
                      value={category.id}
                      className="capitalize"
                    >
                      <CategoryIcon
                        category={category.slug}
                        className="mr-3 inline-flex"
                      />
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="websiteName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter website name"
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email <span className="text-zinc-500">(Optional)</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter email address"
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Username <span className="text-zinc-500">(Optional)</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter username"
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="flex items-center space-x-3">
                  <Input
                    type={seePassword ? "text" : "password"}
                    placeholder="Enter password"
                    disabled={isPending}
                    {...field}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={toggleSeePassword}
                  >
                    {seePassword ? (
                      <EyeOffIcon className="h-4 w-4 text-zinc-700" />
                    ) : (
                      <EyeIcon className="h-4 w-4 text-zinc-700" />
                    )}
                  </Button>
                </div>
              </FormControl>
              <FormDescription>
                Enter the password for the website or service.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                URL <span className="text-zinc-500">(Optional)</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter website URL"
                  disabled={isPending}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Saving..." : "Save"}
        </Button>
      </form>
    </Form>
  );
};

export default EditPasswordForm;
