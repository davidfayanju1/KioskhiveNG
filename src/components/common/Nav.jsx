import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";

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
  ];

  return (
    <header className="w-full flex items-center justify-between md:px-[4rem] px-[1rem] min-h-[5rem]">
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
      </div>

      <div className="sign_button">
        <Button name={"Sign Up"} className={"bg-[#FC9A30]"} />
      </div>
    </header>
  );
};

export default Nav;
