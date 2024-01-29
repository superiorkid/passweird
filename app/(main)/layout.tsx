import React from "react";

const MainLayout = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return <div>{children}</div>;
};

export default MainLayout;
