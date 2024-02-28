"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@uidotdev/usehooks";
import { passwordStrength, Result } from "check-password-strength";
import { cn } from "@/lib/utils";
import CopyToClipboard from "@/components/copy-to-clipboard";

export const passwordStrengthIndicator: {
  id: number;
  color: string;
  length: number;
}[] = [
  {
    id: 0,
    length: 1,
    color: "bg-zinc-500",
  },
  {
    id: 1,
    length: 2,
    color: "bg-rose-500",
  },
  {
    id: 2,
    length: 3,
    color: "bg-amber-400",
  },
  {
    id: 3,
    length: 4,
    color: "bg-emerald-500",
  },
];

function AnalyzePassword() {
  const [passwordTerm, setPasswordTerm] = useState<string | undefined>(
    undefined,
  );
  const debouncedSearchTerm = useDebounce(passwordTerm, 300);
  const [status, setStatus] = useState<Result<string> | undefined>(undefined);

  const passwordIndicator = passwordStrengthIndicator.find(
    (indicator) => indicator.id === status?.id,
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordTerm((passwordTerm) => event.target.value);
  };

  useEffect(() => {
    const checkPassword = (value: string) => {
      const status = passwordStrength(value);
      setStatus((prevStatus) => status);
    };

    checkPassword(debouncedSearchTerm as string);
  }, [debouncedSearchTerm]);

  return (
    <div className="space-y-3.5">
      <div className="flex space-x-3">
        <Input
          type="text"
          placeholder="type your password to check here"
          className="mb-2"
          onChange={handleChange}
        />
        <CopyToClipboard text={debouncedSearchTerm} />
      </div>
      {debouncedSearchTerm && (
        <div className="space-y-2">
          <div className="grid grid-cols-4 gap-2">
            {Array.from({
              length: passwordIndicator?.length as number,
            }).map((_, index) => (
              <div
                key={index}
                className={cn(`h-2 rounded-lg`, passwordIndicator?.color)}
              />
            ))}
          </div>
          <p className="text-right text-sm font-semibold text-zinc-500">
            {status?.value}
          </p>
        </div>
      )}
    </div>
  );
}

export default AnalyzePassword;
