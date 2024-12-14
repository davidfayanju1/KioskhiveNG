import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const icons = [
    { src: "/svgs/X.svg" },
    { src: "/svgs/fb-white.svg" },
    { src: "/svgs/pinterest-white.svg" },
    { src: "/svgs/discord.svg" },
    { src: "/svgs/youtube.svg" },
    { src: "/svgs/insta.svg" },
  ];

  const categories = [
    {
      name: "All Categories",
      url: "/",
    },
    {
      name: "Computers & Accessories",
      url: "/computer-accessoriess",
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
      name: "Wearable Technology",
      url: "warable_tech",
    },
  ];

  const actions = [
    { name: "Track Orders", icon: "/svgs/location.svg" },
    { name: "Customer", icon: "/svgs/support.svg" },
    { name: "Need Help", icon: "/svgs/tool.svg" },
  ];

  const [input, setInput] = useState("");

  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <section className="header_container md:px-[4rem] px-[1rem] border-b-[1px] py-3 border-white bg-[#556AFF] flex items-center md:justify-between justify-center gap-2 flex-wrap">
        <h1 className="text-white gilroy md:text-[1rem] text-[.8rem]">
          Welcome to kioskhive ecommerce store
        </h1>
        <div className="links_container flex items-center justify-center">
          <span className="block gilroy text-white w-full md:text-[1rem] text-[.8rem]">
            Follow us:
          </span>
          <div className="flex items-center md:justify-center justify-between gap-2 w-full">
            {icons.map(({ src }) => (
              <figure key={src}>
                <img src={src} alt="" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="main_header gap-2 bg-[#556AFF] md:px-[4rem] px-[1rem] py-3 flex items-center justify-between">
        <figure onClick={() => navigate("/")}>
          <img src="/svgs/Logo.svg" alt="Company Logo" />
        </figure>

        <div className="input_container hidden md:flex items-center justify-between bg-white py-2 rounded-full w-[50%] px-5">
          <input
            type="text"
            placeholder="Search For anything..."
            className="outline-none font-gilroy border-none w-full placeholder:text-[#77878F] placeholder:text-[14px] text-[16px]"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <figure className="icon">
            <img src="/svgs/search.svg" alt="Search Icon" />
          </figure>
        </div>

        <div className="icon_container flex items-center justify-center gap-2">
          <button className="outline-none border-none">
            <img src="/svgs/cart.svg" alt="Cart" />
          </button>
          <button className="outline-none border-none md:block hidden">
            <img src="/svgs/like.svg" alt="Like" />
          </button>
          <button className="outline-none border-none">
            <img src="/svgs/user.svg" alt="User" />
          </button>
        </div>
      </section>

      <section className="bg-white h-[4rem] border md:hidden grid place-items-center">
        <div className="input_container flex items-center justify-between bg-white py-2 rounded-full w-[98%] mx-auto px-5 border-solid border-[1px] border-gray-300">
          <input
            type="text"
            placeholder="Search For anything..."
            className="outline-none font-gilroy border-none w-full placeholder:text-[#77878F] placeholder:text-[14px] text-[16px]"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <figure className="icon">
            <img src="/svgs/search.svg" alt="Search Icon" />
          </figure>
        </div>
      </section>

      <section className="category-container md:px-[4rem] px-[1rem] border-b-[1px] bg-white z-50 border-[#E4E7E9] h-[5rem] flex items-center justify-between">
        <div className="category_section self-center flex items-center justify-center">
          <select
            name="category"
            id="category-select"
            className="min-w-[4rem] gilroy custom-select px-2 h-full text-[.8rem] rounded-[3px]"
          >
            {categories.map((item) => (
              <option
                key={item.name}
                value={item.name}
                className="text-[.8rem]"
              >
                {item.name}
              </option>
            ))}
          </select>
          <div className="options-container md:flex items-center gap-6 ml-5 hidden">
            {actions.map((item) => (
              <div
                className="card-container flex items-center gap-2"
                key={item.name}
              >
                <img src={item.icon} alt={item.name} />
                {item.name}
              </div>
            ))}
          </div>
        </div>
        {/* <div className="number_container">
          <a
            href="tel:+234-816-152-5556"
            className="flex items-center gilroy justify-center md:text-[.9rem] text-[.8rem]"
          >
            <img src="/svgs/phone.svg" alt="Phone" />
            +234-816-152-5556
          </a>
        </div> */}
      </section>
    </header>
  );
};

export default Header;
