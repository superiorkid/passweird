import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center relative">
      <Link
        href="/sign-in"
        className="absolute top-8 right-10 text-sm hover:underline underline-offset-4 transition-all duration-300 capitalize"
      >
        sign in
      </Link>

      <div className="max-w-lg space-y-3.5">
        <div className="text-center space-y-1.5">
          <h1 className="text-2xl font-bold">Next/Pass</h1>
          <p className="text-sm text-zinc-500 [text-wrap:balance]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            itaque architecto aspernatur, error aliquam nemo corporis.
          </p>
        </div>
        <div className="border p-5 rounded-xl">sign up form</div>
      </div>
    </div>
  );
};

export default SignUpPage;
