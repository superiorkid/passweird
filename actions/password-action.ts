"use server";

import {
  passwordSchema,
  TPasswordSchema,
} from "@/lib/validators/password-schema";
import prisma from "@/prisma/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { getCurrentUser } from "./user-action";
import { cryptr } from "@/lib/crypto";

export const getPasswordCollection = async (param: {
  category: string;
  search: string;
}) => {
  try {
    const currentUser = await getCurrentUser();

    const passwords = await prisma.password.findMany({
      where: {
        AND: [
          {
            userId: currentUser?.id,
          },
          {
            category: { slug: param.category },
          },
          {
            websiteName: {
              contains: param.search,
            },
          },
        ],
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

  const cryptedPassword = cryptr.encrypt(password);

  try {
    await prisma.password.create({
      data: {
        password: cryptedPassword,
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

export const totalUserPasswordSaved = async () => {
  const currentUser = await getCurrentUser();

  try {
    const total = await prisma.password.count({
      where: {
        userId: currentUser?.id,
      },
    });

    return total;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get total password");
  }
};

export const editPassword = async (param: {
  values: TPasswordSchema;
  id: string;
}) => {
  const {
    id,
    values: { category, email, password, url, websiteName, username },
  } = param;

  const passwordExists = await getPassword({ id });

  if (!passwordExists) throw new Error("Password not found");

  const encryptedPassword = cryptr.encrypt(password);

  try {
    await prisma.password.update({
      where: { id: passwordExists.id },
      data: {
        websiteName,
        password: encryptedPassword,
        email: email || undefined,
        username: username || undefined,
        url: url || undefined,
        category: {
          connect: {
            id: category,
          },
        },
      },
    });

    revalidatePath("/dashboard");

    return {
      message: "Update password successfully",
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update password");
  }
};

export const getPassword = async (where: Prisma.PasswordWhereInput) => {
  try {
    const password = await prisma.password.findFirst({ where });
    return password;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get passwod");
  }
};
