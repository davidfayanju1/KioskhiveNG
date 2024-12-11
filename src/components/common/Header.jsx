import React from "react";
import { useState } from "react";

const Header = () => {
  const icons = [
    {
      src: "/svgs/X.svg",
    },

    {
      src: "/svgs/fb-white.svg",
    },

    {
      src: "/svgs/pinterest-white.svg   ",
    },

    {
      src: "/svgs/discord.svg",
    },

    {
      src: "/svgs/youtube.svg",
    },

    {
      src: "/svgs/insta.svg",
    },
  ];

  const categories = [
    {
      name: "All Category",
      url: "/all_category",
    },
    {
      name: "Computers & Laptop",
      url: "/computer_laptop",
    },
    {
      name: "Computers & Accessories",
      url: "/computer-accessoriess",
    },
    {
      name: "Smart Phone",
      url: "/smar-phone",
    },
    {
      name: "Headphone",
      url: "/headphone",
    },
    {
      name: "Mobile Accessories",
      url: "/mobile-accessories",
    },
    {
      name: "Gaming Console",
      url: "/gaming_console",
    },
    {
      name: "Camera & Photo",
      url: "/camera_photo",
    },
    {
      name: "TV & Home Appliances",
      url: "/tv_home_appliances",
    },
    {
      name: "Watch & Accessories",
      url: "/watch_accessories",
    },
    {
      name: "GPS & Navigation",
      url: "/gps_navigation",
    },
    {
      name: "Wearable Technology",
      url: "warable_tech",
    },
  ];

  const actions = [
    {
      name: "",
      icon: "",
    },
  ];

  const [input, setInput] = useState("");

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <section className="header_container md:px-[4rem] px-[1rem] border-b-[1px] py-3 border-white bg-[#556AFF] flex items-center justify-between">
        <h1 className="text-white md:block hidden">
          Welcome to kioskhive ecommerce store
        </h1>
        <div className="links_container flex items-center">
          <span className="block text-white w-full">Follow us:</span>
          <div className="flex items-center md:justify-center justify-between gap-2 w-full">
            {icons.map(({ src }) => (
              <figure>
                <img src={src} alt="" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="main_header gap-2 bg-[#556AFF] md:px-[4rem] px-[1rem] py-3 flex items-center justify-between">
        <figure>
          <img src="/svgs/Logo.svg" alt="" />
        </figure>

        <div className="input_container hidden md:flex items-center justify-between bg-white py-2 rounded-full w-[50%] px-5">
          <input
            type="text"
            placeholder="Search For anything..."
            className="outline-none border-none w-full placeholder:text-[#77878F] placeholder:text-[14px] text-[16px]"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <figure className="icon">
            <img src="/svgs/search.svg" alt="" />
          </figure>
        </div>

        <div className="icon_container flex items-center justify-center gap-2">
          <button className="outline-none border-none">
            <img src="/svgs/cart.svg" alt="" />
          </button>
          <button className="outline-none border-none md:block hidden">
            <img src="/svgs/like.svg" alt="" />
          </button>
          <button className="outline-none border-none">
            <img src="/svgs/user.svg" alt="" />
          </button>
        </div>
      </section>

      <section className="category-container md:px-[4rem] px-[1rem] border-b-[1px] z-50 border-gray-400 h-[5rem] flex items-center justify-between">
        <div className="category_section self-center flex items-center justify-center">
          <select
            name="category"
            id=""
            className="min-w-[4rem] custom-select px-2 h-full text-[.9rem] rounded-[3px]"
          >
            {categories.map((item) => (
              <option value={item.name} className="text-[.9rem]">
                {item.name}
              </option>
            ))}
          </select>
          <div className="options-container"></div>
        </div>
        <div className="number_container">
          <a
            href="tel:+234-816-152-5556"
            className="flex items-center justify-center"
          >
            <img src="/svgs/phone.svg" alt="" />
            +234-816-152-5556
          </a>
        </div>
      </section>
    </header>
  );
};

export default Header;
