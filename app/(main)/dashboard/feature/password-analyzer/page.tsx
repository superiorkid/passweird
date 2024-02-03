import React from "react";
import Header from "@/components/header";
import AnalyzePassword from "@/components/analyze-password";

function PasswordAnalyzerPage() {
  return (
    <div className="mx-auto max-w-lg">
      <Header
        title="Password Strength Analyzer"
        description="Analyze your password strength"
        className="mb-10"
      />

      <AnalyzePassword />
    </div>
  );
}

export default PasswordAnalyzerPage;
