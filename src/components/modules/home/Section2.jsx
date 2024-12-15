import React from "react";

const Section2 = () => {
  return (
    <section className=" pb-[6rem] pt-[4rem]">
      <header className="section title md:mb-[5rem] mb-[5rem] text-center">
        <h1 className="md:text-[2.1rem] font-[700] text-[1.5rem] mb-[.9rem] block">
          How it works
        </h1>
        <h2 className="block text-[#757095] text-[1rem] md:w-[30%] w-[90%] max-w-[43rem] mx-auto">
          Set up you business page in seconds and get important insights
        </h2>
      </header>

      <div className="item_container flex md:flex-row tab:flex-col md:gap-[.8rem] gap-[5rem] items-center justify-center">
        <div className="card w-[90%] md:w-[22rem] ">
          <figure className="mx-auto relative mb-[1rem] flex items-center justify-center bg-white shadow-xl md:w-[9rem] md:h-[9rem] w-[10rem] h-[10rem] rounded-full">
            <span className="flex shadow-xl absolute top-0 left-[-10%] items-center justify-center w-[1.9rem] h-[1.9rem] rounded-full text-[.9rem] font-[500] bg-white">
              1
            </span>
            <img src="/svgs/register.svg" alt="register" className="mx-auto" />
          </figure>
          <h2 className="title md:my-[1rem] font-[600] text-black md:text-[1.8rem] text-[1.3rem] text-center">
            Register
          </h2>
          <p className="block text-[#757095] text-center text-[1rem]">
            Few details required for registration
          </p>
        </div>

        <div className="down-wave md:block custom:hidden">
          <img src="/svgs/down-wave.svg" alt="" />
        </div>

        <div className="card w-[90%] md:w-[22rem] ">
          <figure className="border-[1px] mb-[1rem] relative border-dashed border-black md:w-[9rem] md:h-[9rem] w-[10rem] h-[10rem] mx-auto rounded-full flex items-center justify-center">
            <span className="flex absolute top-0 left-[-10%] items-center bg-[#F6F6F7] justify-center w-[1.9rem] h-[1.9rem] rounded-full text-[.9rem] font-[500]">
              2
            </span>
            <img
              src="/svgs/setup.svg"
              alt="setup account"
              className="mx-auto"
            />
          </figure>
          <h2 className="title my-[1rem] font-[600] text-black md:text-[1.8rem] text-[1.3rem] text-center">
            Complete Setup
          </h2>
          <p className="block text-[#757095] text-center text-[1rem]">
            Kiosk is ready almost immediately
          </p>
        </div>

        <div className="up-wave md:block custom:hidden">
          <img src="/svgs/up-wave.svg" alt="" />
        </div>

        <div className="card w-[90%] md:w-[22rem] ">
          <figure className="border-[1px] mb-[1rem] relative border-dashed border-black md:w-[9rem] md:h-[9rem] w-[10rem] h-[10rem] mx-auto rounded-full flex items-center justify-center">
            <span className="flex absolute top-0 left-[-10%] items-center bg-[#F6F6F7] justify-center w-[1.9rem] h-[1.9rem] rounded-full text-[.9rem] font-[500]">
              3
            </span>
            <img src="/svgs/utilize.svg" alt="" className="mx-auto" />
          </figure>
          <h2 className="title my-[1rem] font-[600] text-black md:text-[1.8rem] text-[1.3rem] text-center">
            Utilize Platform
          </h2>
          <p className="block text-[#757095] text-center text-[1rem]">
            Shop and sell quality local products
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
