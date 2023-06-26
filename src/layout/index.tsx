import React from "react";
import Nav from "../components/nav";

const Layout: React.ReactElement = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
