import React from "react";
import Brand from "./brand";
import Container from "./container";
import Menu from "./menu";
import AuthButtonGroup from "./auth-button-group";
import MobileMenu from "./mobile-menu";
import { User } from "@prisma/client";
import { ThemeSwitcher } from "./theme-switcher";

interface NavigationProps {
  currentUser: User | null;
}

const Navigation = ({ currentUser }: NavigationProps) => {
  return (
    <nav className="sticky top-0 z-10 border-b bg-background py-2 shadow-sm dark:bg-gray-900 lg:px-5">
      <Container className="flex max-w-screen-xl items-center justify-between px-7 lg:px-0">
        <div className="lg:flex lg:items-center lg:space-x-5">
          <Brand />
          <Menu />
        </div>
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
          <AuthButtonGroup currentUser={currentUser} />
          <MobileMenu currentUser={currentUser} />
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
