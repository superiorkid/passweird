"use client";

import { registerAction } from "@/actions/auth-action";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TRegister, registerSchema } from "@/lib/validators/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Checkbox } from "../ui/checkbox";

const SignUpForm = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<TRegister>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      acceptTerms: false,
    },
  });

  const onSubmit = (values: TRegister) => {
    startTransition(() => {
      registerAction(values)
        .then((callback) => {
          toast.success(`${callback.message}. now you can login`);
          form.reset();
          router.push("/sign-in");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" autoFocus {...field} />
              </FormControl>
              <FormDescription>
                Choose a unique username that others will see.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormDescription>
                We&apos;ll never share your email with anyone else.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          disabled={isPending}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="acceptTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  disabled={isPending}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Accept terms and conditions</FormLabel>
                <FormDescription>
                  You agree to our Terms of Service and Privacy Policy.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Register..." : "Register"}
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
