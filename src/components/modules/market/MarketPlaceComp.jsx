import React from "react";
import { productModel } from "../../../data/ProductData";
import { Link } from "react-router-dom";

const MarketPlaceComp = () => {
  const items = [
    {
      icon: "/svgs/delivery.svg",
      name: "FAST DELIVERY",
      subText: "Delivery in 24hrs",
    },

    {
      icon: "/svgs/return.svg",
      name: "24 HOURS RETURN  ",
      subText: "100% money-back guarantee",
    },

    {
      icon: "/svgs/payment.svg",
      name: "SECURE PAYMENT",
      subText: "Your money is safe",
    },

    {
      icon: "/svgs/support24.svg",
      name: "SUPPORT 24/7",
      subText: "Live contact/message",
    },
  ];

  return (
    <div className="min-h-screen md:px-[4rem] px-[1rem] pt-3">
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

      <section className="card_section rounded-[6px] border-solid border-[1px] border-[#E4E7E9] py-[2rem] my-[4rem] flex md:items-center items-start gap-[3rem] justify-between px-[4rem] md:flex-row flex-wrap flex-col">
        {items.map((item) => (
          <div
            className="card flex items-center gap-5 justify-start"
            key={item.name}
          >
            <img src={item.icon} alt="" className="self-start" />
            <div className="texts">
              <span className="block font-bold text-black">{item.name}</span>
              <small className="light text-gray-500">{item.subText}</small>
            </div>
          </div>
        ))}
      </section>

      <section className="bestdeal">
        <div className="item_flex flex mb-7 items-center justify-between">
          <div className="title_container flex items-center">
            <span className="block font-bold text-[1.5rem]">Best Deals</span>
          </div>
          <div className="all-product-link flex items-center gap-1 justify-center">
            <Link to={"/products/all"} className="block text-[#FC9A30]">
              Browse all products
            </Link>
            <img src="/svgs/right-arrow.svg" alt="" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 flex-wrap flex-col md:flex-row">
          {productModel.map((item) => (
            <div
              className="card rounded-[8px] md:max-w-[15rem] w-[80%] h-[19rem] border-solid border-[1px]"
              key={item.name}
            >
              <img src={item.img} alt="" className="h-[50%] mx-auto" />
              <div className="text_container px-2">
                <h1 className="mb-5 truncate">{item.name}</h1>
                <small className="block font-bold text-[#FC9A30]">
                  {item.price}
                </small>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="product_card"></section>
    </div>
  );
};

export default MarketPlaceComp;
