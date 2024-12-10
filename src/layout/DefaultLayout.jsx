import React from "react";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";

const DefaultLayout = ({ children, active }) => {
  return (
    <>
      <Nav active={active} />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
