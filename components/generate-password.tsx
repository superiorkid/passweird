import React from "react";
import { Input } from "@/components/ui/input";
import GeneratePasswordForm from "@/components/forms/generate-password-form";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

function GeneratePassword() {
  return (
    <div className="space-y-3">
      <div className="flex space-x-3">
        <Input placeholder="your password generated" />
        <Button variant="outline" size="icon">
          <Copy className="h-5 w-5" />
        </Button>
      </div>

      <GeneratePasswordForm />
    </div>
  );
}

export default GeneratePassword;
