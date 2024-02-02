"use client";

import { cn } from "@/lib/utils";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { Copy } from "lucide-react";
import { Button } from "./ui/button";

interface CopyToClipboardProps {
  className?: string;
}

const CopyToClipboard = ({ className }: CopyToClipboardProps) => {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const hasCopiedText = Boolean(copiedText);

  return (
    <Button variant="ghost" size="icon" className={cn(className)}>
      <Copy className="h-4 w-4" />
    </Button>
  );
};

export default CopyToClipboard;
