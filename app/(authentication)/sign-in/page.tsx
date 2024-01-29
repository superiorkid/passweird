import Link from "next/link";
import React from "react";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center relative">
      <Link
        href="/sign-up"
        className="absolute top-8 right-10 text-sm hover:underline underline-offset-4 transition-all duration-300 capitalize"
      >
        register
      </Link>

      <div className="max-w-lg space-y-5">
        <div className="text-center space-y-1.5">
          <h1 className="text-3xl font-light">
            Next/<span className="font-bold">Passw*ird</span>
          </h1>
          <p className="text-sm text-zinc-500 [text-wrap:balance]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            architecto veniam in quisquam. Cum, natus molestias?
          </p>
        </div>
        <div className="border p-5 rounded-xl">sign in form</div>
      </div>
    </div>
  );
};

export default SignInPage;
