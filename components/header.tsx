import React from "react";

interface HeaderProps {
  title: string;
  description: string;
}

const Header = ({ title, description }: HeaderProps) => {
  return (
    <header className="mb-5">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-zinc-500">{description}</p>
    </header>
  );
};

export default Header;
