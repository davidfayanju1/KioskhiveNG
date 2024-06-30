import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";

const Nav = ({ active }) => {
  const navigate = useNavigate();

  const links = [
    {
      name: "Home",
      url: "/",
      active: 1,
    },
    {
      name: "Marketplace",
      url: "/marketplace",
      active: 2,
    },
    {
      name: "About Us",
      url: "/about-us",
      active: 3,
    },
    {
      name: "Categories",
      url: "",
      active: 4,
      icon: () => (
        <div className="item_container w-full ">
          <img
            src="/svgs/down-arrow.svg"
            alt=""
            className="w-[2rem] h-[2rem]"
          />
        </div>
      ),
      categories: [
        {
          name: "Clothes",
          url: "/clothes",
        },
        {
          name: "Gadgets",
          url: "/gadgets",
        },
        {
          name: "Food",
          url: "/food",
        },
        {
          name: "Drinks",
          url: "/drinks",
        },
      ],
    },
  ];

  const [open, setOpen] = useState(true);
  const [openDropDown, setOpenDropDown] = useState(false);

  return (
    <header className="w-full flex items-center justify-between md:px-[4rem]  border-b-[.2px] border-gray-200 px-[1rem] min-h-[5rem]">
      <div className="title flex items-center justify-center gap-[2rem]">
        <figure className="logo_container h-[2rem] w-[6rem]">
          <img src="/svgs/company.svg" alt="" />
        </figure>
        <nav className="md:flex hidden items-center justify-center gap-[1rem]">
          {links.map((item, i) => (
            <div
              key={i}
              className={`${
                active === item.active ? "text-[#FC9A30]" : "text-[#727272]"
              }`}
              onClick={() => navigate(item.url)}
            >
              {item?.name}
            </div>
          ))}
        </nav>

        {!open && (
          <nav className="flex flex-col w-full h-screen fixed top-0 left-0 bg-white z-[1000] md:hidden items-center justify-start pt-[4rem] gap-[1rem]">
            <button
              onClick={() => setOpen(true)}
              className="item_container rounded-full p-[.5rem] border border-gray-400"
            >
              <img src="/svgs/cancel.svg" alt="" />
            </button>
            {links.map((item, i) => (
              <div
                key={i}
                className={`${
                  active === item.active
                    ? "bg-[#FC9A30] rounded-full py-[.8rem] font-[500] text-white flex justify-center"
                    : "text-[#727272]"
                } ${
                  item.icon && "flex-col flex items-center justify-between"
                } mx-auto w-[50%] text-center ${item.icon && "justify-start"}`}
                onClick={() => navigate(item.url)}
              >
                <div
                  className={`${
                    item.icon &&
                    "flex items-center justify-between w-full rounded-full px-[1rem] py-[.5rem] border-solid border-gray-200 border-[1.5px]"
                  }`}
                >
                  {item?.name}

                  {item.icon && (
                    <div
                      className="block"
                      onClick={() => setOpenDropDown(!openDropDown)}
                    >
                      {item?.icon()}
                    </div>
                  )}
                </div>
                <br />
                {openDropDown && (
                  <div className="categories_container flex flex-col gap-[1rem]">
                    {item.categories &&
                      item.categories.map((item) => (
                        <div
                          key={item.name}
                          className="categories_container font-[500]"
                        >
                          {item.name}
                        </div>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>

      <div className="burger_container md:hidden block">
        <button onClick={() => setOpen(false)}>
          <img src="/svgs/burger-close.svg" alt="" />
        </button>
      </div>
      <div className="sign_button md:block hidden">
        <Button name={"Sign Up"} className={"bg-[#FC9A30]"} />
      </div>
    </header>
  );
};

export default Nav;
