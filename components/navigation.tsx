import React from "react";
import Brand from "./brand";
import Container from "./container";
import Menu from "./menu";
import AuthButtonGroup from "./auth-button-group";
import MobileMenu from "./mobile-menu";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-10 border-b bg-background py-2 shadow-sm lg:px-5">
      <Container className="flex max-w-screen-xl items-center justify-between px-7 lg:px-0">
        <div className="lg:flex lg:items-center lg:space-x-5">
          <Brand />
          <Menu />
        </div>
        <AuthButtonGroup />
        <MobileMenu />
      </Container>
    </nav>
  );
};

export default Navigation;