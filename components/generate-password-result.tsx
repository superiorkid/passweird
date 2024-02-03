"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { toast } from "sonner";
import CopyToClipboard from "@/components/copy-to-clipboard";

interface GeneratePasswordResult {
  generatedPassword: string;
}

function GeneratePasswordResult({ generatedPassword }: GeneratePasswordResult) {
  return (
    <div className="flex space-x-3">
      <Input
        placeholder="your password generated"
        defaultValue={generatedPassword}
        disabled
      />

      <CopyToClipboard text={generatedPassword} />
    </div>
  );
}

export default GeneratePasswordResult;
