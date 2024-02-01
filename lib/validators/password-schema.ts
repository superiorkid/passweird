import { z } from "zod";

export const passwordSchema = z.object({
  url: z
    .string()
    .url({ message: "The URL is not valid. Please enter a valid URL." }),
  username: z.string().optional(),
  email: z.union([
    z.literal(""),
    z.string().email({
      message:
        "The email address is not formatted correctly. Please enter a valid email address.",
    }),
  ]),
  password: z.string().min(1, { message: "Please enter a password." }),
});

export type TPasswordSchema = z.infer<typeof passwordSchema>;
