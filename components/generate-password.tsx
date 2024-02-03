"use client";

import React, { useState } from "react";
import GeneratePasswordForm from "@/components/forms/generate-password-form";
import GeneratePasswordResult from "@/components/generate-password-result";

function GeneratePassword() {
  const [generatedPassword, setGeneratedPassword] = useState<
    string | undefined
  >(undefined);

  return (
    <div className="space-y-3">
      <GeneratePasswordResult generatedPassword={generatedPassword as string} />
      <GeneratePasswordForm setGeneratedPassword={setGeneratedPassword} />
    </div>
  );
}

export default GeneratePassword;
