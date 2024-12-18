import React from "react";
import { MdOutlineSell } from "react-icons/md";
import { GiBuyCard } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="page_container md:pt-0 pb-[4rem]">
      <div className="nav-container mb-[4rem] py-4 px-4 border-b-[1px] border-gray-200">
        <div onClick={() => navigate("/")} className="icon">
          <img
            src="/svgs/company.svg"
            alt=""
            className="w-[6rem] md:h-[2rem] h-[1.9rem]"
          />
        </div>
      </div>

      <h1
        title="header"
        className="gilroy-bold md:text-[2rem] text-[1.4rem] text-center"
      >
        Register As:
      </h1>

      <div className="item_container md:px-[4rem] px-[1rem] flex items-center justify-between mx-auto max-w-[40rem] w-[98%] md:mt-[4rem] mt-[2rem]">
        <div
          onClick={() => navigate("/signup/manufacturer")}
          className="steps_container hover:shadow-2xl transition-all delay-75 ease-in-out cursor-pointer ball-1 rounded-full md:h-[13rem] h-[9rem] w-[9rem] md:w-[13rem] bg-[#FC9A30]/10 flex flex-col items-center justify-center"
        >
          <div className="icon_container">
            <MdOutlineSell size={35} color="#F79009" />
          </div>
          <span className="block gilroy-bold md:mt-4 mt-1">Manufacturer</span>
        </div>
        <div
          onClick={() => navigate("/signup/retailer")}
          className="steps_container hover:shadow-2xl transition-all delay-75 ease-in-out ball-1 cursor-pointer rounded-full md:h-[13rem] h-[9rem] w-[9rem] md:w-[13rem] bg-[#FC9A30]/10 flex flex-col items-center justify-center"
        >
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
