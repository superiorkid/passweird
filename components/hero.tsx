"use client";

import React from "react";
import Lottie from "lottie-react";
import PasswordAnimation from "../public/password-animation.json";

const Hero = () => {
  return (
    <section className="flex min-h-[80dvh] flex-col-reverse items-center justify-center gap-12 px-5 lg:flex-row lg:gap-0 lg:space-x-16 lg:px-20">
      <div className="space-y-3 text-center lg:flex-1 lg:text-left">
        <h1 className="text-3xl font-bold lg:text-5xl">Passweird</h1>

        <p className="prose prose-sm leading-7 dark:prose-invert lg:prose-lg [&:not(:first-child)]:mt-6">
          Passweird, where security meets a touch of humor! Tired of mundane
          password managers? Embrace a quirky and fun approach to safeguarding
          your digital life. Passweird ensures top-notch security with a playful
          twist, making password management an enjoyable experience. Join us in
          revolutionizing the way you protect your online world—because who said
          security couldn&apos;t be a little bit weird and a whole lot of fun?
        </p>
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
