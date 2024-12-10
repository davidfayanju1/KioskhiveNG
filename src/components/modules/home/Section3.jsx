import React from "react";
import { PiPaintBrushHouseholdBold } from "react-icons/pi";
import { LiaShippingFastSolid } from "react-icons/lia";

const Section3 = () => {
  const firstRow = [
    {
      svg: "/svgs/personalize.svg",
      title: "Personalized Accounts",
      text: "Manage your operations efficiently with user-friendly interfaces tailored specifically for retailers and manufacturers.",
    },

    {
      svg: "/svgs/bolt.svg",
      title: "Quick Sign-Up Process",
      text: "Provide minimal details and gain instant access to a world of opportunities Whether you're a retailer or a manufacturer.",
    },

    {
      svg: "/svgs/charts.svg",
      title: "Direct Inventory Access",
      text: "Brand owners have full control over their inventory, ensuring accurate representation and real-time updates on product availability.",
    },
  ];

  const secondRow = [
    {
      icon: <PiPaintBrushHouseholdBold color="#F79009" />,
      title: "Brick and Mortar",
      text: "Set up pages with ease and start trading.",
    },

    {
      svg: "/svgs/guaranty.svg",
      title: "Secure Transaction",
      text: "Shop and sell with confidence, knowing that your transactions and sensitive information are protected with our reliable and secure platform",
    },

    {
      icon: <LiaShippingFastSolid color="#F79009" />,
      title: "Free Shipping",
      text: "Get your free shipping on available products to your location",
    },
  ];
  return (
    <section className="flex items-center justify-center md:px-[4rem] md:py-[4rem] py-[2rem] px-[1rem] min-h-[40vh] bg-[#FFFCF5]">
      <div className="section_container">
        <div className="item-container text-center  md:mb-[2rem] mb-[3.5rem]">
          <small className="text-[#F79009] block text-[.8rem] mb-[1rem] font-[600] text-center">
            Features
          </small>
          <span className="block w-full font-[700] md:text-[2.1rem] text-[1.5rem] mb-[.6rem] text-[#101828] text-center">
            Empowering Your Business Journey
          </span>
          <small className="text-[#667085] block text-[1rem] mx-auto text-center w-[95%] max-w-[43rem]">
            Scale your local brand faster and better with the right tools and
            also, buy quality locally-made products at affordable prices.
          </small>
        </div>

        <div className="first_flex_container flex items-start w-full justify-center gap-[1.5rem] md:flex-row flex-col">
          {firstRow.map((item) => (
            <div className="item_card  md:!w-[40%] w-full" key={item.title}>
              <div className="text-left">
                {item.svg ? (
                  <img src={item.svg} alt="" />
                ) : (
                  <div className="item-container">{item.icon}</div>
                )}
              </div>
              <h1 className="title font-[600] my-[.8rem] md:text-[1.8rem] text-[1.3rem] text-left">
                {item.title}
              </h1>
              <p className="text-left text-[#667085] text-[1rem]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="first_flex_container mt-[2rem] flex items-start w-full justify-center gap-[1.5rem] md:flex-row flex-col">
          {secondRow.map((item) => (
            <div className="item_card md:!w-[40%] w-full" key={item.title}>
              <div className="text-left">
                {item.svg ? (
                  <img src={item.svg} alt="" />
                ) : (
                  <div className="item-container h-[3rem] w-[3rem] rounded-full bg-[#F79009]/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                )}
              </div>
              <h1 className="title font-[600] my-[.8rem] md:text-[1.8rem] text-[1.3rem] text-left">
                {item.title}
              </h1>

              <p className="text-left text-[#667085] text-[1rem]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
