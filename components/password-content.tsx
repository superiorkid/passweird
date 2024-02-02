"use client";

import { Prisma } from "@prisma/client";
import Link from "next/link";
import { Button } from "./ui/button";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { maskPassword } from "@/lib/mask-password";

interface PasswordContentProps {
  password: Prisma.PasswordGetPayload<{
    include: {
      category: true;
    };
  }>;
}

const PasswordContent = ({ password }: PasswordContentProps) => {
  const [passwordMask, setMaskPassword] = useState<boolean>(true);

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
        Password:{" "}
        {!passwordMask ? password.password : maskPassword(password.password)}
        <Button
          variant="ghost"
          size="sm"
          className="ml-0.5"
          onClick={() => setMaskPassword((maskPassword) => !maskPassword)}
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
