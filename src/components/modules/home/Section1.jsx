import React from "react";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";

const Section1 = () => {
  const navigate = useNavigate();

  return (
    <section className="flex pb-[5rem] md:pt-[1rem] custom:pt-[7rem] bg-[#FFFCF5] md:px-[4rem] px-[1rem] md:flex-row custom:flex-col items-center justify-between">
      <header className="first_container md:w-[50%] custom:w-full">
        <div>
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
        </div>

        <div className="button_components flex md:flex-row flex-col items-center justify-start gap-[1rem]">
          <Button
            onPress={() => navigate("/login")}
            name={"Get Started"}
            className={"bg-[#FC9A30] !w-full"}
          />
          <Button
            onPress={() => navigate("/marketplace")}
            name={"Explore Marketplace"}
            className={
              "!border-solid shadow-lg border-[1px] border-[#ececec] !text-[#606060] !w-full"
            }
          />
        </div>
      </header>
      <figure className="relative md:w-[50%] custom:w-full">
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
