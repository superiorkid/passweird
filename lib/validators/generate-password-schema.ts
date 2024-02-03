import { z } from "zod";

export const generatePasswordSchema = z.object({
  length: z
    .number()
    .int({ message: "Length must be an integer" })
    .min(6, { message: "Password length must be at least 6 characters" })
    .max(50, { message: "Password length must be at most 50 characters " })
    .positive({ message: "Length must be a positive number" }),
  lowercase: z.boolean().default(true),
  uppercase: z.boolean().default(true),
  digits: z.boolean().default(true),
  specialCharacters: z.boolean().default(false),
});

export type TGeneratePasswordSchema = z.infer<typeof generatePasswordSchema>;
