import React from "react";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";

const DefaultLayout = ({ children, active }) => {
  return (
    <>
      <Nav active={active} />
      <div className="children-container mt-[5rem]">{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
