import SignUpForm from "@/components/forms/signup-form";
import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign Up | Passweird",
  description: "Password manager. built using nextjs",
};

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center relative">
      <Link
        href="/sign-in"
        className="absolute top-8 right-10 text-sm hover:underline underline-offset-4 transition-all duration-300 capitalize"
      >
        sign in
      </Link>

      <div className="space-y-5 min-w-[458px]">
        <div className="text-center space-y-1.5">
          <h1 className="text-3xl font-light">
            Next/<span className="font-bold">Passw*ird</span>
          </h1>
          <p className="text-sm text-zinc-500 [text-wrap:balance]">
            <span className="font-bold">Register</span> to continue using this
            app
          </p>
        </div>
        <div className="p-5 space-y-3">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
