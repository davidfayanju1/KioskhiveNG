import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import Button from "./Button";

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
      name: "Top Selling",
      url: "/top-selling",
    },
    {
      name: "New",
      url: "/new",
    },
    {
      name: "Men",
      url: "/men",
    },
    {
      name: "Home and decor",
      url: "/Home-decor",
    },
    {
      name: "Women",
      url: "/women",
    },

    {
      name: "Jewelries",
      url: "Jewelries",
    },

    {
      name: "Make over",
      url: "/makeover",
    },

    {
      name: "Adire",
      url: "/adire",
    },

    {
      name: "Paper and Novelty",
      url: "/paper-novelty",
    },

    {
      name: "Scented Candles",
      url: "/candles",
    },

    {
      name: "Pets",
      url: "/pets",
    },

    {
      name: "Kiddies Lounge",
      url: "/kiddies-lounge",
    },
  ];

  const actions = [
    { name: "Track Orders", icon: "/svgs/location.svg" },
    { name: "Customer", icon: "/svgs/support.svg" },
    { name: "Need Help", icon: "/svgs/tool.svg" },
  ];

  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

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

        <div className="icon_container relative flex items-center justify-center gap-2">
          <button className="outline-none border-none">
            <img src="/svgs/cart.svg" alt="Cart" />
          </button>
          <button className="outline-none border-none md:block hidden">
            <img src="/svgs/like.svg" alt="Like" />
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="outline-none border-none"
          >
            <img src="/svgs/user.svg" alt="User" />
          </button>

          {open && (
            <div className="modal_component absolute bg-white top-[2rem] md:right-[-1.5rem] right-0 shadow-lg rounded-[6px] min-h-[20rem] p-[1rem] py-[1.5rem] md:w-[30rem] w-[20rem] z-10">
              <span className="title block mb-9 gilroy-semibold font-bold text-center text-[1rem]">
                Sign In To Your Account
              </span>
              <div className="form_container">
                <Form
                  type={"text"}
                  containerStyle={"mb-4"}
                  placeholder={"Enter Email"}
                  label={"Email Address"}
                  onChange={(e) => console.log(e.target.value)}
                />

                <Form
                  type={"password"}
                  containerStyle={"mb-[2rem]"}
                  placeholder={"Enter Password"}
                  label={"Password"}
                  onChange={(e) => console.log(e.target.value)}
                />

                <Button
                  name={"LOGIN"}
                  className={"bg-[#FC9A30] w-full !text-[.8rem]"}
                />
                <div className="flex-contianer flex items-center my-[1rem] justify-between">
                  <div className="block h-[.0035rem] bg-[#E4E7E9] w-[23%]"></div>
                  <span className="block gilroy text-[#77878F] text-[.8rem]">
                    Don't have an account
                  </span>
                  <div className="block h-[.0035rem] bg-[#E4E7E9] w-[23%]"></div>
                </div>
                <Button
                  name={"CREATE ACCOUNT"}
                  className={
                    "border-[#FC9A30] !border-solid !text-[.7rem] border-[1px] w-full !text-[#FC9A30]"
                  }
                />
              </div>
            </div>
          )}
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

      <section className="category-container md:px-[4rem] px-[1rem] border-b-[1px] bg-white z-50 border-[#E4E7E9] h-[3.5rem] flex items-center justify-between">
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
