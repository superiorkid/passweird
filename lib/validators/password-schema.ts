import { z } from "zod";

export const passwordSchema = z.object({
  websiteName: z.string().min(1, { message: "Please enter website name." }),
  url: z
    .string()
    .url({ message: "The URL is not valid. Please enter a valid URL." }),
  username: z.string().optional(),
  email: z
    .string()
    .email({
      message:
        "The email address is not formatted correctly. Please enter a valid email address.",
    })
    .optional(),
  password: z.string().min(1, { message: "Please enter a password." }),
});

export type TPasswordSchema = z.infer<typeof passwordSchema>;
