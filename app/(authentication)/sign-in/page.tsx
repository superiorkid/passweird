import { getCurrentUser } from "@/actions/user-action";
import SignInForm from "@/components/forms/signin-form";
import { type Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In | Passweird",
  description: "Password manager. built using nextjs",
};

const SignInPage = async () => {
  const currentUser = await getCurrentUser();

  if (currentUser) {
    redirect("/dashboard");
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <Link
        href="/sign-up"
        className="absolute right-10 top-8 text-sm capitalize underline-offset-4 transition-all duration-300 hover:underline"
      >
        register
      </Link>

      <div className="min-w-[420px] space-y-5">
        <div className="space-y-1.5 text-center">
          <h1 className="text-3xl font-light">
            Next/
            <Link href="/" className="font-bold">
              Passw*ird
            </Link>
          </h1>
          <p className="text-sm text-zinc-500 [text-wrap:balance]">
            {/* refactor this */}
            <span className="font-bold">Login</span> to continue using this app
          </p>
        </div>
        <div className="p-5 md:p-0">
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
