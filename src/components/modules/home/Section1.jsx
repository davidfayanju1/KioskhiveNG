import React from "react";
import Button from "../../common/Button";

const Section1 = () => {
  return (
    <section className="flex pb-[3rem] pt-[2rem] md:px-[4rem] px-[1rem] md:flex-row flex-col items-center justify-between">
      <div className="first_container md:w-[50%] w-full">
        <hgroup className="font-[500] text-[#000000] font-aeonik md:text-[3.2vw] text-[1.55rem]">
          Welcome to Kioskhive: Your Gateway to Business Growth
        </hgroup>
        <p className="text-[#727272] text-[.8rem] my-[1.5rem]">
          Lorem ipsum dolor sit amet consectetur. Tristique ut felis eu eget
          orci fusce. A semper porta pellentesque leo. Tempus nunc elementum
          odio et interdum non netus diam sed. Ac cursus placerat integer lectus
          magnis nibh gravida interdum etiam. Luctus aliquet aenean est mi
          ultrices.
        </p>

        <div className="button_components flex md:flex-row flex-col items-center justify-start gap-[1rem]">
          <Button name={"Get Started"} className={"bg-[#FC9A30] !w-full"} />
          <Button
            name={"Explore Marketplace"}
            className={
              "!border-solid border-[1px] border-gray-[#F7F7F7] !text-[#606060] !w-full"
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
