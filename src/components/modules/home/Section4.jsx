import React from "react";

const Section4 = () => {
  const data = [
    {
      title: "$800",
      text: "A GMV of about $500 generated from over8 wholesales transactions within first month.",
    },
    {
      title: "200 Users",
      text: "With over 50 local brands and 100 verified retailers,customers were grown through simple word of mouth",
    },
    {
      title: "45%",
      text: "A monthly growth rate of 45% with a customer acquisition cost maintained at 0.09$ per customer",
    },
  ];
  return (
    <section className="section_container md:py-[4rem]">
      <div className="card_container relative mx-auto md:min-h-[35rem] min-h-[45rem] bg-[#248572] md:pt-[1.5rem] pt-[2rem] px-[2rem] md:rounded-[10px] md:w-[90%]">
        <span className="title block  mb-[.3rem] font-[700] text-white md:text-[2.1rem] text-[1.3rem] text-center">
          Numbers speak louder
        </span>
        <small className="text-center text-[1rem] block mb-[3rem] text-white font-[400]">
          Showcasing Our Remarkable Progress in Defining Success
        </small>
        <div className="flex-container flex items-start justify-start md:gap-[1rem] gap-[2rem] md:flex-row flex-col">
          {data.map((item) => (
            <div className="item_card">
              <div className="title font-[600] text-center text-white md:text-[1.75rem] text-[1.37rem] mb-[1rem]">
                {item.title}
              </div>
              <div className="text text-white font-[400] text-center text-[1rem]">
                {item.text}
              </div>
            </div>
          ))}
        </div>

        <div className="map_container absolute bottom-0">
          <img src="/svgs/map.svg" alt="" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Section4;
