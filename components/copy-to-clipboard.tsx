"use client";

import { useCopyToClipboard } from "@uidotdev/usehooks";
import { Check, Copy } from "lucide-react";
import { Button } from "./ui/button";
import React, { useCallback, useEffect } from "react";
import { toast } from "sonner";

interface CopyToClipboardProps {
  className?: string;
  text?: string;
}

const CopyToClipboard = ({ className, text }: CopyToClipboardProps) => {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const hasCopiedText = Boolean(copiedText);

  const handleCopyClicked = useCallback(() => {
    try {
      copyToClipboard(text as string);
      toast.success("Copied");

      setTimeout(() => {
        copyToClipboard("");
      }, 2000);
    } catch (error) {
      toast.error("Failed to copy");
    }
  }, [copyToClipboard, text]);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleCopyClicked}
      disabled={!text}
    >
      {hasCopiedText ? (
        <Check className="h-5 w-5" />
      ) : (
        <Copy className="h-5 w-5" />
      )}
    </Button>
  );
};

export default CopyToClipboard;
