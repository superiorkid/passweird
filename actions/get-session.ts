"use server";

import authOptions from "@/lib/auth-options";
import { getServerSession } from "next-auth";

export const getSession = async () => {
  return await getServerSession(authOptions);
};
