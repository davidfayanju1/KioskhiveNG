import React from "react";

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

  return (
    <header className="fixed top-0 left-0 w-full">
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
          <img src="/svgs/companyII.svg" alt="" />
        </figure>

        <div className="input_container hidden md:flex items-center justify-between bg-white py-2 rounded-full w-[50%] px-3">
          <input
            type="text"
            placeholder="Search For anything"
            className="outline-none border-none text-[16px]"
            value={""}
          />

          <figure className="icon">
            <img src="/svgs/search.svg" alt="" />
          </figure>
        </div>

        <div className="icon_container flex items-center justify-center gap-2">
          <button className="outline-none border-none">
            <img src="/svgs/cart.svg" alt="" />
          </button>
          <button className="outline-none border-none">
            <img src="/svgs/like.svg" alt="" />
          </button>
          <button className="outline-none border-none">
            <img src="/svgs/user.svg" alt="" />
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
