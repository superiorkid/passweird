"use server";

import {
  generatePasswordSchema,
  TGeneratePasswordSchema,
} from "@/lib/validators/generate-password-schema";
import generator from "generate-password";

export const generatePassword = async (values: TGeneratePasswordSchema) => {
  const validation = generatePasswordSchema.safeParse(values);

  if (!validation.success)
    throw new Error(validation.error.issues.at(0)?.message);

  const { specialCharacters, length, digits, lowercase, uppercase } = values;

  try {
    const password = generator.generate({
      length,
      lowercase,
      uppercase,
      numbers: digits,
      symbols: specialCharacters,
    });

    return {
      password,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to generate password");
  }
};
