import React from "react";
import { MdOutlineSell } from "react-icons/md";
import { GiBuyCard } from "react-icons/gi";

const Signup = () => {
  return (
    <div className="page_container md:px-[4rem] md:pt-0 pt-[9rem]  px-[1rem] py-[4rem]">
      <h1
        title="header"
        className="gilroy-bold md:text-[2rem] text-[1.4rem] text-center"
      >
        Register As:
      </h1>

      <div className="item_container flex items-center justify-between mx-auto max-w-[40rem] w-[98%] md:mt-[4rem] mt-[2rem]">
        <div className="steps_container cursor-pointer ball-1 rounded-full md:h-[13rem] h-[9rem] w-[9rem] md:w-[13rem] bg-[#FC9A30]/10 flex flex-col items-center justify-center">
          <div className="icon_container">
            <MdOutlineSell size={35} color="#F79009" />
          </div>
          <span className="block gilroy-bold md:mt-4 mt-1">Manufacturer</span>
        </div>
        <div className="steps_container ball-1 cursor-pointer rounded-full md:h-[13rem] h-[9rem] w-[9rem] md:w-[13rem] bg-[#FC9A30]/10 flex flex-col items-center justify-center">
          <div className="icon_container">
            <GiBuyCard size={35} color="#F79009" />
          </div>
          <span className="block gilroy-bold md:mt-4 mt-1">Retailer</span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
