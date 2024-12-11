import React from "react";
import Button from "../../common/Button";

const Section1 = () => {
  return (
    <section className="flex pb-[5rem] md:pt-[1rem] pt-[7rem] bg-[#FFFCF5] md:px-[4rem] px-[1rem] md:flex-row flex-col items-center justify-between">
      <div className="first_container md:w-[50%] w-full">
        <header>
          <h1 className="font-[500] text-[#000000] font-aeonik md:text-[3.2vw] text-[1.55rem]">
            Welcome to Kioskhive: The Perfect Local Online Marketplace For Your
            Brand
          </h1>
          <h2 className="text-[#727272] text-[.8rem] my-[1.5rem]">
            Kioskhive is designed to assist locally emerging and established
            brands, with the right tools to aid in faster scaling and increased
            footprint, while providing quality and afford able products to
            retailers, within an interactive environment.
          </h2>
        </header>

        <div className="button_components flex md:flex-row flex-col items-center justify-start gap-[1rem]">
          <Button name={"Get Started"} className={"bg-[#FC9A30] !w-full"} />
          <Button
            name={"Explore Marketplace"}
            className={
              "!border-solid shadow-lg border-[1px] border-[#ececec] !text-[#606060] !w-full"
            }
          />
        </div>
      </div>
      <figure className="relative md:w-[50%]">
        <img
          src="/svgs/hero.svg"
          alt=""
          className="w-full md:h-[34rem] h-[18rem]"
        />
        <img
          src="/svgs/splash.svg"
          alt=""
          className="absolute md:bottom-[-6rem] bottom-[-3rem] w-full"
        />
      </figure>
    </section>
  );
};

export default Section1;
