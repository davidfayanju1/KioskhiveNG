import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const MarketPlaceLayout = ({ children }) => {
  return (
    <div className="page_container">
      <Header />
      <div className="children_container mt-[13.5rem]">{children}</div>
      <Footer />
    </div>
  );
};

export default MarketPlaceLayout;
