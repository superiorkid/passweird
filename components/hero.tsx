"use client";

import Lottie from "lottie-react";
import Link from "next/link";
import PasswordAnimation from "../public/password-animation.json";
import { buttonVariants } from "./ui/button";
import { User } from "@prisma/client";

interface HeroProps {
  currentUser: User | null;
}

const Hero = ({ currentUser }: HeroProps) => {
  return (
    <section className="flex min-h-[80dvh] flex-col-reverse items-center justify-center gap-12 px-5 lg:flex-row lg:gap-0 lg:space-x-16 lg:px-20">
      <div className="space-y-6 text-center md:space-y-3 lg:flex-1 lg:text-left">
        <h1 className="text-3xl font-bold lg:text-5xl">Passweird</h1>

        <p className="prose prose-sm leading-7 dark:prose-invert lg:prose-lg [&:not(:first-child)]:mt-6">
          Passweird embrace a quirky and fun approach to safeguarding your
          digital life. Passweird ensures top-notch security with a playful
          twist, making password management an enjoyable experience.
        </p>

        <Link
          href={currentUser ? "/dashboard" : "/sign-in"}
          className={buttonVariants({
            size: "lg",
            className: "min-w-full md:min-w-0",
          })}
        >
          {currentUser ? "Go to Dashboard" : "Get Started"}
        </Link>
      </div>
      <div className="lg:flex-1">
        <Lottie
          animationData={PasswordAnimation}
          loop
          className="aspect-video lg:aspect-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
