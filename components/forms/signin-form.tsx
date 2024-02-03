"use client";

import { TLogin, loginSchema } from "@/lib/validators/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const SignInForm = () => {
  const router = useRouter();
  const form = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      emailOrUsername: "",
      password: "",
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (values: TLogin) => {
      await signIn("credentials", { redirect: false, ...values }).then(
        (callback) => {
          if (callback?.error) {
            toast.error(callback.error);
          }

          if (callback?.ok && !callback.error) {
            toast.success("Logged in");
            router.push("/dashboard");
          }
        },
      );
    },
  });

  const onSubmit = async (values: TLogin) => {
    await mutateAsync(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="emailOrUsername"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email or Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email/username"
                  disabled={isPending}
                  autoFocus
                  {...field}
                />
              </FormControl>
              <FormMessage />
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
                <Input
                  disabled={isPending}
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Log In..." : "Log In"}
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;
