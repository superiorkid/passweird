"use server";

import { Prisma } from "@prisma/client";
import { getSession } from "./auth-action";
import prisma from "@/prisma/db";

export const getCurrentUser = async () => {
  try {
    const session = await getSession();

    if (!session?.user?.email) return null;

    const user = await getUser({ email: session.user.email });

    if (!user) return null;

    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getUser = async (where: Prisma.UserWhereUniqueInput) => {
  return prisma.user.findUnique({ where });
};
