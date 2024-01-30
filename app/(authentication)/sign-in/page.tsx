import SignInForm from "@/components/forms/signin-form";
import { type Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Sign Ip | Passweird",
  description: "Password manager. built using nextjs",
};

const SignInPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center relative">
      <Link
        href="/sign-up"
        className="absolute top-8 right-10 text-sm hover:underline underline-offset-4 transition-all duration-300 capitalize"
      >
        register
      </Link>

      <div className="min-w-[498px] space-y-5">
        <div className="text-center space-y-1.5">
          <h1 className="text-3xl font-light">
            Next/<span className="font-bold">Passw*ird</span>
          </h1>
          <p className="text-sm text-zinc-500 [text-wrap:balance]">
            {/* refactor this */}
            <span className="font-bold">Login</span> to continue using this app
          </p>
        </div>
        <div className="p-5">
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
