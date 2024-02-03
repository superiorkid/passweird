"use server";

import { TGeneratePasswordSchema } from "@/lib/validators/generate-password-schema";

export const generatePassword = async (values: TGeneratePasswordSchema) => {
  console.log(values);
};
