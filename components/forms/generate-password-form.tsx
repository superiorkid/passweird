"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { useForm } from "react-hook-form";
import {
  generatePasswordSchema,
  TGeneratePasswordSchema,
} from "@/lib/validators/generate-password-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Switch } from "@/components/ui/switch";
import { useMutation } from "@tanstack/react-query";
import { generatePassword } from "@/actions/generate-password-action";
import { toast } from "sonner";

interface GeneratePasswordFormProps {
  setGeneratedPassword: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
}

function GeneratePasswordForm({
  setGeneratedPassword,
}: GeneratePasswordFormProps) {
  const form = useForm<TGeneratePasswordSchema>({
    resolver: zodResolver(generatePasswordSchema),
    defaultValues: {
      length: 6,
      uppercase: true,
      lowercase: true,
      specialCharacters: false,
      digits: true,
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (values: TGeneratePasswordSchema) =>
      await generatePassword(values)
        .then((callback) => {
          setGeneratedPassword((password) => callback.password);
        })
        .catch((error) => {
          toast.error(error.message);
        }),
  });

  const onSubmit = async (values: TGeneratePasswordSchema) => {
    await mutateAsync(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <Button className="w-full" type="submit" disabled={isPending}>
          <Wand2 className="mr-2 h-4 w-4" />
          {isPending ? "Generating..." : "Generate Password"}
        </Button>

        <Separator orientation="horizontal" />

        <FormField
          control={form.control}
          name="length"
          render={({ field: { value, onChange } }) => (
            <FormItem className="flex flex-col space-y-4 rounded-lg border p-3 shadow-sm">
              <FormLabel>Length - {value}</FormLabel>
              <FormControl>
                <div className="flex items-center space-x-3.5">
                  <span className="text-sm">6</span>
                  <Slider
                    disabled={isPending}
                    min={6}
                    max={50}
                    step={1}
                    defaultValue={[value]}
                    onValueChange={(vals) => {
                      onChange(vals[0]);
                    }}
                  />
                  <span className="text-sm">50</span>
                </div>
              </FormControl>
              <FormDescription>
                Adjust the length of the password by sliding the control.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lowercase"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Lowercase Letters</FormLabel>
                <FormDescription>
                  Include lowercase letters in the generated password.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  disabled={isPending}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="uppercase"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Uppercase Letters</FormLabel>
                <FormDescription>
                  Include uppercase letters in the generated password.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  disabled={isPending}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="digits"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Digits</FormLabel>
                <FormDescription>
                  Include digits in the generated password.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  disabled={isPending}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="specialCharacters"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Special Characters</FormLabel>
                <FormDescription>
                  Include special characters in the generated password.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  disabled={isPending}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default GeneratePasswordForm;
