"use server";

import {
  TPasswordSchema,
  passwordSchema,
} from "@/lib/validators/password-schema";
import prisma from "@/prisma/db";
import { revalidatePath } from "next/cache";
import { getCurrentUser } from "./user-action";

export const getPasswordCollection = async () => {
  try {
    const currentUser = await getCurrentUser();

    const passwords = await prisma.password.findMany({
      where: {
        userId: currentUser?.id,
      },
      include: {
        category: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return passwords;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get password collection");
  }
};

export const addNewPassword = async (values: TPasswordSchema) => {
  const currentUser = await getCurrentUser();

  // validation
  const validation = passwordSchema.safeParse({ ...values });
  if (!validation.success) {
    throw new Error(validation.error.issues.at(0)?.message);
  }

  const { category, email, password, url, websiteName, username } = values;

  try {
    await prisma.password.create({
      data: {
        password,
        websiteName: websiteName.toLowerCase(),
        email: email.toLowerCase() || undefined,
        username: username?.toLowerCase() || undefined,
        categoryId: category,
        userId: currentUser?.id as string,
        url: url.toLowerCase() || undefined,
      },
    });

    revalidatePath("/dashboard");

    return {
      message: "create new password successfully",
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create new password");
  }
};

export const deletePassword = async (collectionId: string) => {
  try {
    await prisma.password.delete({
      where: { id: collectionId },
    });

    revalidatePath("/dashboard");

    return {
      message: "Password delete successfully",
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete password collection");
  }
};
