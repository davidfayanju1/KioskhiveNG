import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
import { useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const Nav = ({ active }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [openDropDown, setOpenDropDown] = useState(false);

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
      name: "Blogs",
      url: "/blogs",
      active: 5,
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
        <div className="item_container w-full">
          {!openDropDown ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </div>
      ),
      categories: [
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
      ],
    },
  ];

  const animatenav = {
    initial: { y: "-100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
    transition: { duration: 0.5 },
  };

  const animatecategories = {
    initial: { y: "-2%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-2%", opacity: 0 },
    transition: { duration: 0.5 },
  };

  const location = useLocation();

  useEffect(() => {
    if (location.path === "/") {
      if (!open) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    }
  }, [open]);

  const handleNavigate = (url) => {
    navigate(url);

    setOpen(true);
  };

  console.log(open, "Open");

  return (
    <header className="w-full flex items-center justify-between md:px-[4rem] px-[1rem] min-h-[5rem] fixed top-0 left-0 z-[500] bg-[#FFFCF5] bg-opacity-40 backdrop-blur-[10px] shadow-md">
      <div className="title flex items-center justify-center gap-[2rem]">
        <figure className="logo_container h-[2rem] w-[6rem]">
          <img src="/svgs/company.svg" alt="" />
        </figure>
        <nav className="md:flex hidden items-center justify-center gap-[1rem]">
          {links.map((item, i) => (
            <div
              key={i}
              className={`cursor-pointer ${
                active === item.active ? "text-[#FC9A30]" : "text-[#727272]"
              }`}
              onClick={() => handleNavigate(item.url)}
            >
              {item?.name}
            </div>
          ))}
        </nav>

        <AnimatePresence>
          {!open && (
            <motion.nav
              key="nav"
              {...animatenav}
              className="flex flex-col w-full min-h-screen fixed top-0 left-0 bg-white z-[1000] md:hidden items-center justify-start py-[4rem] gap-[1rem]"
            >
              <button
                onClick={() => setOpen(true)}
                className="item_container rounded-full p-[.5rem] border border-gray-400"
              >
                <img src="/svgs/cancel.svg" alt="" />
              </button>
              {links.map((item, i) => (
                <div
                  key={i}
                  className={`cursor-pointer ${
                    active === item.active
                      ? "bg-[#FC9A30] rounded-full py-[.8rem] font-[500] text-white flex justify-center"
                      : "text-[#727272]"
                  } ${
                    item.icon && "flex-col flex items-center justify-between"
                  } mx-auto w-[50%] text-center ${
                    item.icon && "justify-start"
                  }`}
                  onClick={() => (item.url ? handleNavigate(item.url) : null)}
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
                  <AnimatePresence>
                    {item.categories && openDropDown && (
                      <motion.div
                        {...animatecategories}
                        className="categories_container flex flex-col gap-[1rem] overflow-y-scroll w-full mt-[.9rem]"
                      >
                        {item.categories.map((category, index) => (
                          <div
                            key={index}
                            className="categories_container font-[500] text-left"
                            onClick={() => navigate(category.url)}
                          >
                            {category.name}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
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
