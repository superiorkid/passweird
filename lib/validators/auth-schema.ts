import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .min(5, {
      message: "Please choose username between 5 and 30 characters long",
    })
    .max(30, { message: "Username cannot longer than 30 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Username must be at least 8 characters long" }),
  acceptTerms: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms and conditions.",
  }),
});

export const loginSchema = z.object({
  emailOrUsername: z
    .string()
    .min(1, { message: "Please enter your email or username" }),
  password: z.string().min(1, { message: "Please enter your password" }),
});

export type TLogin = z.infer<typeof loginSchema>;
export type TRegister = z.infer<typeof registerSchema>;
