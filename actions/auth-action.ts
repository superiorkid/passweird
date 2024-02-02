"use server";

import { TRegister, registerSchema } from "@/lib/validators/auth-schema";
import prisma from "@/prisma/db";
import { Prisma } from "@prisma/client";
import bcrypt from "bcrypt";

export const registerAction = async (values: TRegister) => {
  const validation = registerSchema.safeParse(values);

  if (!validation.success)
    throw new Error(validation.error.issues.at(0)?.message);

  const { email, username, password } = values;

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    await prisma.user.create({
      data: { name: username, hashedPassword, email },
    });

    return {
      message: "Create new user successfully",
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        throw new Error(
          `The ${(
            error.meta as { modelName: string; target: string[] }
          ).target?.at(0)} you have chosen is already in use.`,
        );
      }
    }

    throw new Error("Something broke. Failed to register user");
  }
};
