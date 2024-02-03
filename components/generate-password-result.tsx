"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { toast } from "sonner";

interface GeneratePasswordResult {
  generatedPassword: string;
}

function GeneratePasswordResult({ generatedPassword }: GeneratePasswordResult) {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const hasCopiedText = Boolean(copiedText);

  const handleCopyClicked = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    copyToClipboard(generatedPassword);
    toast.success("Copied");
  };

  return (
    <div className="flex space-x-3">
      <Input
        placeholder="your password generated"
        defaultValue={generatedPassword}
        disabled
      />
      <Button
        variant="outline"
        size="icon"
        onClick={handleCopyClicked}
        disabled={!generatedPassword}
      >
        {hasCopiedText ? (
          <Check className="h-5 w-5" />
        ) : (
          <Copy className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
}

export default GeneratePasswordResult;
