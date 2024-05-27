import React from "react";

const Section2 = () => {
  return (
    <section className=" pb-[6rem] pt-[4rem]">
      <div className="section title md:mb-[5rem] mb-[3rem] text-center">
        <b className="md:text-[2.1rem] text-[1.5rem]">How it works</b>
        <small className="block text-[#757095] text-[1rem] md:w-[30%] w-[90%] mx-auto">
          Lorem ipsum dolor sit amet consectetur. Semper egestas non enim
          vulputate aliquet euismod nunc sit.
        </small>
      </div>

      <div className="item_container flex md:flex-row flex-col md:gap-0 gap-[5rem] items-center justify-center">
        <div className="card w-[90%] md:w-[22rem]">
          <figure className="mx-auto relative flex items-center justify-center bg-white shadow-xl w-[12rem] h-[12rem] rounded-full">
            <span className="flex shadow-xl absolute top-0 left-[-10%] items-center justify-center w-[1.9rem] h-[1.9rem] rounded-full text-[.9rem] font-[500] bg-white">
              1
            </span>
            <img src="/svgs/register.svg" alt="" className="mx-auto" />
          </figure>
          <div className="title md:my-[1rem] font-[500] text-black text-[1.8rem] text-center">
            Register
          </div>
          <span className="block text-[#757095] text-center">
            Lorem ipsum dolor sit amet consectetur. Id pulvinar felis magna eu
            eget ultrices mauris.
          </span>
        </div>

        <div className="down-wave md:block hidden">
          <img src="/svgs/down-wave.svg" alt="" />
        </div>

        <div className="card w-[90%] md:w-[22rem]">
          <figure className="border-[1px] relative border-dashed border-black w-[12rem] h-[12rem] mx-auto rounded-full flex items-center justify-center">
            <span className="flex absolute top-0 left-[-10%] items-center bg-[#F6F6F7] justify-center w-[1.9rem] h-[1.9rem] rounded-full text-[.9rem] font-[500]">
              2
            </span>
            <img src="/svgs/setup.svg" alt="" className="mx-auto" />
          </figure>
          <div className="title my-[1rem] font-[500] text-black text-[1.8rem] text-center">
            Complete Setup
          </div>
          <span className="block text-[#757095] text-center">
            Lorem ipsum dolor sit amet consectetur. Id pulvinar felis magna eu
            eget ultrices mauris.
          </span>
        </div>

        <div className="up-wave md:block hidden">
          <img src="/svgs/up-wave.svg" alt="" />
        </div>

        <div className="card w-[90%] md:w-[22rem]">
          <figure className="border-[1px] relative border-dashed border-black w-[12rem] h-[12rem] mx-auto rounded-full flex items-center justify-center">
            <span className="flex absolute top-0 left-[-10%] items-center bg-[#F6F6F7] justify-center w-[1.9rem] h-[1.9rem] rounded-full text-[.9rem] font-[500]">
              3
            </span>
            <img src="/svgs/utilize.svg" alt="" className="mx-auto" />
          </figure>
          <div className="title my-[1rem] font-[500] text-black text-[1.8rem] text-center">
            Utilize Platform
          </div>
          <span className="block text-[#757095] text-center">
            Lorem ipsum dolor sit amet consectetur. Id pulvinar felis magna eu
            eget ultrices mauris.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Section2;
