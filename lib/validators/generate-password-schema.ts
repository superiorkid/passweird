import { z } from "zod";

export const generatePasswordSchema = z.object({
  length: z
    .number()
    .int({ message: "Length must be an integer" })
    .min(6, { message: "Password length must be at least 6 characters" })
    .max(50, { message: "Password length must be at most 50 characters " })
    .positive({ message: "Length must be a positive number" }),
  lowercase: z.boolean(),
  uppercase: z.boolean(),
  digits: z.boolean(),
  specialCharacters: z.boolean(),
});

export type TGeneratePasswordSchema = z.infer<typeof generatePasswordSchema>;
