import React from "react";

const MarketPlaceComp = () => {
  return (
    <div className="h-screen md:px-[4rem] px-[1rem] pt-3">
      <section className="image_section rounded-xl md:flex-row flex-col min-h-[20rem] w-full flex items-center gap-8 justify-between">
        <img
          src="/images/headHero.png"
          alt=""
          className="object-cover md:w-[65%] rounded-[6px] w-full min-h-[20rem]"
        />
        <div className="images_section md:w-[31%] w-full">
          <img src="/images/header2.png" alt="" className="w-full mb-9" />
          <img src="/images/header3.png" alt="" className="w-full" />
        </div>
      </section>
    </div>
  );
};

export default MarketPlaceComp;
