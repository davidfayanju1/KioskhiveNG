import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Button from "../components/common/Button";
import { BsTwitterX } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const MarketPlaceLayout = ({ children }) => {
  return (
    <div className="page_container">
      <Header />
      <div className="children_container mt-[13.5rem]">{children}</div>
      <div className="item_container bg-[#E6E6E6] md:px-[4rem] px-[1rem] w-full gap-3 py-[2rem] flex items-center md:justify-between flex-wrap">
        <div className="first_section">
          <h3 className="md:gilroy-bold gilroy font-[700] text-black md:text-[1.5rem]">
            Subscribe our Newsletter
          </h3>
          <small className="block text-[#999999]">
            Subcribe to our newsletter to have access to latest changes
          </small>
        </div>

        <div className="links_section bg-[#E6E6E6] pl-4 rounded-full border-solid border-[1px] border-gray-300 flex items-center justify-between">
          <input
            type="text"
            className="border-none bg-transparent text-[16px] placeholder:text-[14px] outline-none w-[60%]"
            placeholder="Enter Email Address"
          />
          <Button name={"Subscribe"} className="bg-[#FC9A30]" />
        </div>

        <div className="links_container flex items-center gap-5">
          <FaFacebookF />
          <BsTwitterX />
          <FaPinterestP />
          <FaInstagram />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MarketPlaceLayout;
