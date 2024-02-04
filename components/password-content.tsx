"use client";

import { Prisma } from "@prisma/client";
import Link from "next/link";
import { Button } from "./ui/button";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useReducer, useState } from "react";
import { maskPassword } from "@/lib/mask-password";
import { cryptr } from "@/lib/crypto";

interface PasswordContentProps {
  password: Prisma.PasswordGetPayload<{
    include: {
      category: true;
    };
  }>;
}

const PasswordContent = ({ password }: PasswordContentProps) => {
  const [passwordMask, togglePasswordMask] = useReducer(
    (state) => !state,
    true,
  );

  return (
    <div className="space-y-0.5 rounded-lg border p-4">
      {password.username ? <p>Username: {password.username}</p> : null}
      {password.email ? (
        <p>
          Email:{" "}
          <Link
            href={`mailto:${password?.email}`}
            className="transition-all duration-300 hover:underline"
          >
            {password?.email}
          </Link>
        </p>
      ) : null}
      <p className="inline-flex items-center">
        Password: {!passwordMask ? password.password : maskPassword(8)}
        <Button
          variant="ghost"
          size="sm"
          className="ml-0.5"
          onClick={togglePasswordMask}
        >
          {passwordMask ? (
            <EyeIcon className="h-4 w-4" />
          ) : (
            <EyeOffIcon className="h-4 w-4" />
          )}
        </Button>
      </p>
      {password.url ? (
        <p>
          URL:{" "}
          <Link
            href={password?.url as string}
            className="transition-all duration-300 hover:underline"
          >
            {password?.url}
          </Link>
        </p>
      ) : null}
    </div>
  );
};

export default PasswordContent;
