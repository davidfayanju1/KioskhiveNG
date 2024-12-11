import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const MarketPlaceLayout = ({ children }) => {
  return (
    <div className="page_container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MarketPlaceLayout;
