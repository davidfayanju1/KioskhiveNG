import React from "react";

const Section2 = () => {
  return (
    <section className=" pb-[6rem] pt-[4rem]">
      <div className="section title md:mb-[5rem] mb-[5rem] text-center">
        <b className="md:text-[2.1rem] text-[1.5rem] mb-[.9rem] block">
          How it works
        </b>
        <small className="block text-[#757095] text-[1rem] md:w-[30%] w-[90%] max-w-[43rem] mx-auto">
          Set up you business page in seconds and get important insights
        </small>
      </div>

      <div className="item_container flex md:flex-row flex-col md:gap-0 gap-[5rem] items-center justify-center">
        <div className="card w-[90%] md:w-[22rem]">
          <figure className="mx-auto relative mb-[1rem] flex items-center justify-center bg-white shadow-xl md:w-[12rem] md:h-[12rem] w-[10rem] h-[10rem] rounded-full">
            <span className="flex shadow-xl absolute top-0 left-[-10%] items-center justify-center w-[1.9rem] h-[1.9rem] rounded-full text-[.9rem] font-[500] bg-white">
              1
            </span>
            <img src="/svgs/register.svg" alt="" className="mx-auto" />
          </figure>
          <div className="title md:my-[1rem] font-[600] text-black md:text-[1.8rem] text-[1.3rem] text-center">
            Register
          </div>
          <span className="block text-[#757095] text-center text-[1rem]">
            Few details required for registration
          </span>
        </div>

        <div className="down-wave md:block hidden">
          <img src="/svgs/down-wave.svg" alt="" />
        </div>

        <div className="card w-[90%] md:w-[22rem]">
          <figure className="border-[1px] mb-[1rem] relative border-dashed border-black md:w-[12rem] md:h-[12rem] w-[10rem] h-[10rem] mx-auto rounded-full flex items-center justify-center">
            <span className="flex absolute top-0 left-[-10%] items-center bg-[#F6F6F7] justify-center w-[1.9rem] h-[1.9rem] rounded-full text-[.9rem] font-[500]">
              2
            </span>
            <img src="/svgs/setup.svg" alt="" className="mx-auto" />
          </figure>
          <div className="title my-[1rem] font-[600] text-black md:text-[1.8rem] text-[1.3rem] text-center">
            Complete Setup
          </div>
          <span className="block text-[#757095] text-center text-[1rem]">
            Kiosk is ready almost immediately
          </span>
        </div>

        <div className="up-wave md:block hidden">
          <img src="/svgs/up-wave.svg" alt="" />
        </div>

        <div className="card w-[90%] md:w-[22rem]">
          <figure className="border-[1px] mb-[1rem] relative border-dashed border-black md:w-[12rem] md:h-[12rem] w-[10rem] h-[10rem] mx-auto rounded-full flex items-center justify-center">
            <span className="flex absolute top-0 left-[-10%] items-center bg-[#F6F6F7] justify-center w-[1.9rem] h-[1.9rem] rounded-full text-[.9rem] font-[500]">
              3
            </span>
            <img src="/svgs/utilize.svg" alt="" className="mx-auto" />
          </figure>
          <div className="title my-[1rem] font-[600] text-black md:text-[1.8rem] text-[1.3rem] text-center">
            Utilize Platform
          </div>
          <span className="block text-[#757095] text-center text-[1rem]">
            Shop and sell quality local products
          </span>
        </div>
      </div>
    </section>
  );
};

export default Section2;
