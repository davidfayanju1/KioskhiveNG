import React from "react";
import Button from "../../common/Button";

const Section1 = () => {
  return (
    <section className="flex   pb-[3rem] pt-[1rem] md:px-[4rem] px-[1rem] md:flex-row flex-col items-center justify-between">
      <div className="first_container md:w-[50%] w-full">
        <small className="title mb-[1rem] h-[1.2rem] flex items-center justify-center w-[14rem] p-[.4rem] rounded-full border-[1px] bordersolid border-gray-300">
          <span className="text-blue-800">#01</span>
          ECOMMERCE PLATFORM 2024
        </small>
        <hgroup className="font-[400] text-[#000000] md:text-[3.2vw] text-[1.8rem]">
          Welcome to Kioskhive: Your Gateway to Business Growth
        </hgroup>
        <p className="text-[#727272] text-[.8rem] my-[1.5rem]">
          Lorem ipsum dolor sit amet consectetur. Tristique ut felis eu eget
          orci fusce. A semper porta pellentesque leo. Tempus nunc elementum
          odio et interdum non netus diam sed. Ac cursus placerat integer lectus
          magnis nibh gravida interdum etiam. Luctus aliquet aenean est mi
          ultrices.
        </p>

        <div className="button_components flex items-center justify-start gap-[1rem]">
          <Button name={"Get Started"} className={"bg-[#FC9A30]"} />
          <Button name={"Explore Marketplace"} className={"bg-[#248572]"} />
        </div>
      </div>
      <figure className="relative md:w-[50%] w-full">
        <img
          src="/images/home.png"
          alt=""
          className="w-full md:h-[34rem] h-[23rem]"
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
