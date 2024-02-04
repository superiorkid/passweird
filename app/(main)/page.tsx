import { getCurrentUser } from "@/actions/user-action";
import Container from "@/components/container";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import React from "react";

const Homepage = async () => {
  const currentUser = await getCurrentUser();

  return (
    <>
      <Navigation currentUser={currentUser} />
      <Container className="mx-auto max-w-screen-xl">
        <Hero currentUser={currentUser} />
      </Container>
      <Footer />
    </>
  );
};

export default Homepage;
