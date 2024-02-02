"use server";

import prisma from "@/prisma/db";

export const getCategories = async () => {
  try {
    const categories = await prisma.category.findMany();
    return categories;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get categories");
  }
};
