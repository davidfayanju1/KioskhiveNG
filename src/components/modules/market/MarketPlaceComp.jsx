import React from "react";
import {
  homeNoutdoor,
  productModel,
  reccomended,
} from "../../../data/ProductData";
import { Link } from "react-router-dom";
import Section5 from "../home/Section5";
import Button from "../../common/Button";

const MarketPlaceComp = () => {
  const items = [
    {
      icon: "/svgs/delivery.svg",
      name: "FAST DELIVERY",
      subText: "Delivery in 24hrs",
    },

    {
      icon: "/svgs/return.svg",
      name: "24 HOURS RETURN",
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
        <div className="image_container relative md:w-[65%] w-full h-full">
          <div className="overlay absolute inset-0 w-full h-full bg-black/30 rounded-[6px]"></div>
          <img
            src="/images/headHero.png"
            alt=""
            className="object-cover w-full h-full rounded-[6px]"
          />

          <div className="text_container w-full absolute md:top-[5rem] top-[1rem] md:left-[0rem] left-[0rem]">
            <h1 className="gilroy text-white text-center md:text-[1rem] text-[.9rem]">
              Welcome to Kioskhive
            </h1>
            <h2 className="gilroy-bold md:text-[1.8rem] text-[1.2rem] text-white text-center">
              Source Top-Quality, Affordable Products
            </h2>
            <small className="block text-gray-200 text-center">
              Free shipping on your first order. we deliver, you enjoy
            </small>
            <div className="flex items-center w-full mt-[2rem] mx-auto">
              <button className="border-none mx-auto text-[.9rem] outline-none rounded-full py-[.5rem] md:px-9 px-6 bg-[#FC9A30] text-white gilroy flex items-center justify-center gap-3">
                Shop Now
                <img src="/svgs/arrow-right.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="images_section md:w-[31%] w-full">
          <img src="/images/header2.png" alt="" className="w-full mb-9" />
          <img src="/images/header3.png" alt="" className="w-full" />
        </div>
      </section>

      <section className="card_section rounded-[6px] border-solid border-[1px] border-[#E4E7E9] py-[2rem] my-[4rem] flex md:items-center items-start gap-[3rem] justify-between px-[4rem] md:flex-row flex-wrap flex-col">
        {items.map((item) => (
          <div
            className="flex items-center gap-5 justify-start"
            key={item.name}
          >
            <img src={item.icon} alt="" className="self-start" />
            <div className="texts">
              <span className="block font-bold text-black gilroy-bold">
                {item.name}
              </span>
              <small className="light text-gray-500 gilroy">
                {item.subText}
              </small>
            </div>
          </div>
        ))}
      </section>

      <section className="bestdeal">
        <div className="item_flex flex mb-7 items-center justify-between">
          <div className="title_container flex items-center">
            <span className="block font-bold gilroy-bold text-[1.5rem]">
              Best Deals
            </span>
          </div>
          <div className="all-product-link flex items-center gap-1 justify-center">
            <Link
              to={"/products/all"}
              className="block gilroy text-[#FC9A30] text-[.8rem]"
            >
              Browse all products
            </Link>
            <img src="/svgs/right-arrow.svg" alt="" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 flex-col md:flex-row">
          {productModel.map((item) => (
            <div
              className="rounded-[8px] md:max-w-[15rem] w-[95%] md:h-[19rem] pb-[1rem] border-solid border-[1px]"
              key={item.name}
            >
              <img src={item.img} alt="" className="h-[50%] mx-auto" />
              <div className="text_container px-2">
                <h1 className="mb-5 truncate gilroy">{item.name}</h1>
                <small className="block gilroy font-bold text-[#FC9A30]">
                  {item.price}
                </small>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="product_card my-[5rem] min-h-[10rem] rounded-[10px] overflow-hidden">
        <div className="first_section flex items-center justify-center flex-wrap">
          <div className="image_container relative md:h-[20rem] h-[11rem] object-cover xl:w-[20%] w-full">
            <div className="overlay absolute inset-0 bg-black/10"></div>
            <img
              src="/images/homecategory.png"
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="text_container absolute top-[1rem] w-full left-[1rem]">
              <span className="block w-[65%] mb-5 md:text-[1.4rem] text-[1.2rem] gilroy-semibold font-bold text-[#1C1C1C]">
                Consumer electronics and gadgets
              </span>

              <button className="bg-white rounded-full px-5 py-2 border-none outline-none flex items-center justify-center text-black gilroy text-[.8rem]">
                Shop Now
              </button>
            </div>
          </div>
          <div className="image-mega-container">
            <div className="first_section flex items-center flex-wrap">
              {homeNoutdoor.map((item) => (
                <div className="product_card px-8 md:w-[16rem] w-full pt-9 h-[10rem] border-solid border-[1px] border-gray-300 flex items-center justify-between">
                  <div className="text-section">
                    <h2 className="font-bold gilroy">{item.name}</h2>
                    <small className="text-[#8B96A5] gilroy text-[.9rem]">
                      From
                      <br />
                      {item.price}
                    </small>
                  </div>
                  <img src={item.image} alt="" />
                </div>
              ))}
            </div>
            <div className="first_section flex items-center flex-wrap">
              {homeNoutdoor.map((item) => (
                <div className="product_card px-8 pt-9 md:w-[16rem] w-full border-solid h-[10rem] border-[1px] border-gray-300 flex items-center justify-between">
                  <div className="text-section">
                    <h2 className="font-bold gilroy">{item.name}</h2>
                    <small className="text-[#8B96A5] gilroy text-[.9rem]">
                      From
                      <br />
                      {item.price}
                    </small>
                  </div>
                  <img src={item.image} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="product_card my-[5rem] min-h-[10rem] rounded-[10px] overflow-hidden">
        <div className="first_section flex items-center justify-center flex-wrap">
          <div className="image_container relative md:h-[20rem] h-[11rem] object-cover xl:w-[20%] w-full">
            <div className="overlay absolute inset-0 bg-black/10"></div>
            <img
              src="/images/products/cure.png"
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="text_container absolute top-[1rem] w-full left-[1rem]">
              <span className="block w-[65%] mb-5 md:text-[1.4rem] text-[1.2rem] gilroy-semibold font-bold text-[#1C1C1C]">
                Consumer electronics and gadgets
              </span>

              <button className="bg-white rounded-full px-5 py-2 border-none outline-none flex items-center justify-center text-black gilroy text-[.8rem]">
                Shop Now
              </button>
            </div>
          </div>
          <div className="image-mega-container">
            <div className="first_section flex items-center flex-wrap">
              {homeNoutdoor.map((item) => (
                <div className="product_card px-8 md:w-[16rem] w-full pt-9 h-[10rem] border-solid border-[1px] border-gray-300 flex items-center justify-between">
                  <div className="text-section">
                    <h2 className="font-bold gilroy">{item.name}</h2>
                    <small className="text-[#8B96A5] gilroy text-[.9rem]">
                      From
                      <br />
                      {item.price}
                    </small>
                  </div>
                  <img src={item.image} alt="" />
                </div>
              ))}
            </div>
            <div className="first_section flex items-center flex-wrap">
              {homeNoutdoor.map((item) => (
                <div className="product_card px-8 pt-9 md:w-[16rem] w-full border-solid h-[10rem] border-[1px] border-gray-300 flex items-center justify-between">
                  <div className="text-section">
                    <h2 className="font-bold gilroy">{item.name}</h2>
                    <small className="text-[#8B96A5] gilroy text-[.9rem]">
                      From
                      <br />
                      {item.price}
                    </small>
                  </div>
                  <img src={item.image} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="recommended min-h-[20rem] mb-[3rem]">
        <h2 className="text-black font-bold gilroy-bold text-[1.5rem] mb-9">
          Recommended Items
        </h2>
        <div className="card-container flex-wrap md:flex-row flex-col flex items-center justify-center gap-3">
          {reccomended.map((item) => (
            <div
              key={item.price}
              className="card md:h-[20rem] pt-[1rem] md:w-[45%] md:max-w-[15rem] w-full border-solid border-[1px] border-[#acacac] rounded-[6px]"
            >
              <img src={item.img} alt="" className="h-[60%] pb-4 mx-auto" />
              <div className="text_container p-3 ">
                <span className="block gilroy font-bold text-[.9rem]">
                  {item.price}
                </span>
                <small className="block truncate gilroy text-[#8B96A5]">
                  {item.name}
                </small>
              </div>
            </div>
          ))}
        </div>
        <div className="card-container mt-9 flex-wrap md:flex-row flex-col flex items-center justify-center gap-3">
          {reccomended.map((item) => (
            <div
              key={item.price}
              className="card md:h-[20rem] pt-[1rem] md:w-[45%] md:max-w-[15rem] w-full border-solid border-[1px] border-[#acacac] rounded-[6px]"
            >
              <img src={item.img} alt="" className="h-[60%] pb-4 mx-auto" />
              <div className="text_container p-3 ">
                <span className="block gilroy font-bold text-[.9rem]">
                  {item.price}
                </span>
                <small className="block truncate gilroy text-[#8B96A5]">
                  {item.name}
                </small>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Section5 />
    </div>
  );
};

export default MarketPlaceComp;
