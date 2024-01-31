import Container from "@/components/container";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import React from "react";

const Homepage = () => {
  return (
    <>
      <Navigation />
      <Container className="mx-auto max-w-screen-xl">
        <Hero />
      </Container>
      <Footer />
    </>
  );
};

export default Homepage;
