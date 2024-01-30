import prisma from "@/prisma/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginSchema } from "./validators/auth-schema";

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        emailOrUsername: {
          label: "Email or Username",
          type: "text",
          placeholder: "Enter Email or Username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.emailOrUsername || !credentials.password) {
          throw new Error("Invalid Creadentials");
        }

        const validation = loginSchema.safeParse({
          emailOrUsername: credentials.emailOrUsername,
          password: credentials.password,
        });

        if (!validation.success) {
          throw new Error(validation.error.issues.at(0)?.message);
        }

        const user = await prisma.user.findFirst({
          where: {
            OR: [
              {
                name: credentials.emailOrUsername,
              },
              {
                email: credentials.emailOrUsername,
              },
            ],
          },
        });

        if (!user || !user.password) throw new Error("Invalid Credentials");

        const passwordMatches = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!passwordMatches) throw new Error("Invalid Credentials");

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;
