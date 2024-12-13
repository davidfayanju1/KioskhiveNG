import React from "react";
import { useNavigate } from "react-router-dom";

const CatchAll = () => {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="title_page_container mx-auto max-w-[50rem] w-[95%] md:mt-[15rem] mt-[6rem] border-solid border-gray-300 rounded-[9px] border-[1px] min-h-[20rem] py-[3.5rem]">
        <img src="/svgs/company.svg" alt="company-logo" className="mx-auto" />
        <div className="item_container mx-auto mt-4 flex flex-col items-center">
          <h1 className="font-bold text-[4rem] text-center gilroy-bold">
            404!
          </h1>

          {/* <span className="block gilroy-bold text-center text-[1.5rem]">
            OOPS!
          </span> */}
          <span className="text-gray-400 font-semibold gilroy block  text-center">
            Lost? Let's help You
          </span>
          <button
            onClick={() => navigate("/")}
            className="outline-none text-white bg-[#FC9A30] rounded-full mt-9 mx-auto gilroy border-none h-[3rem] max-w-[10rem] w-[80%]"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatchAll;
