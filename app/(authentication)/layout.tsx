import React from "react";

const AuthenticationLayout = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  return <div>{children}</div>;
};

export default AuthenticationLayout;
