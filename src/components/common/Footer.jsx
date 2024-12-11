import React from "react";

const Footer = () => {
  const footerData = [
    {
      title: "My Account",
      links: ["My Account", "Order History", "Shopping Cart", "Wishlist"],
    },
    {
      title: "Helps",
      links: ["Contact", "FAQs", "Terms & Condition", "Privacy Policy"],
    },
    {
      title: "Proxy",
      links: ["About", "Shop", "Product", "Track Order"],
    },
  ];
  return (
    <footer className="bg-[#001037] relative min-h-[40vh] w-full md:px-[6rem] px-[1.5rem] py-[2.5rem] flex items-center justify-between md:flex-row flex-col flex-wrap gap-[4rem]">
      {/* image section */}
      <div className="footer_svg absolute z-10 top-0 left-0 md:block hidden">
        <img src="/svgs/footer.svg" alt="" />
      </div>
      <div className="first_container z-20">
        <div className="logo_section mb-[1rem]">
          <img src="/svgs/companyII.svg" alt="" />
        </div>
        <small className="text-[#77878F] block">Customer Support:</small>
        <a href="tel:+234-816-152-5556" className="text-white mb-[1rem] block">
          +234-816-152-5556
        </a>
        <span className="block text-[#ADB7BC] w-[72%] mb-[.5rem]">
          The perfect shop on the go for your brand
        </span>
        <a href="mailto:kioskhivewholesales@gmail.com" className="text-white">
          kioskhivewholesales@gmail.com
        </a>
      </div>

      <div className="second_container flex items-center flex-wrap justify-start gap-[2rem] h-full">
        {footerData.map((item) => (
          <div className="item_card" key={item.title}>
            <div className="title_container text-white">{item.title}</div>
            <div className="line w-[1.44rem] mt-[.86rem] rounded-full h-[.2rem] bg-[#FC9A30]"></div>
            <div className="hyper_links flex flex-col gap-[.9rem] mt-[1rem]">
              {item.links.map((item) => (
                <div
                  className="links_card text-[#999999] text-[.9rem]"
                  key={item.title}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="line w-full bg-[#333333] h-[.1rem]"></div>
      <div className="third_container mx-auto md:flex-row flex-col md:w-[90%] w-full flex items-center gap-[1rem] justify-between">
        <p className="text block text-[#808080] w-full text-[.9rem] text-center mb-2">
          Kioskhive eCommerce © 2024. All Rights Reserved
        </p>
        <div className="flex items-center md:justify-center justify-between gap-4 w-full">
          <figure className="facebook flex items-center justify-center bg-[#FC9A30] h-[2rem] w-[2rem] rounded-full">
            <img src="/svgs/facebook.svg" alt="social links" />
          </figure>
          <figure>
            <img src="/svgs/twitter.svg" alt="social links" />
          </figure>
          <figure>
            <img src="/svgs/pinterest.svg" alt="social links" />
          </figure>
          <figure>
            <img src="/svgs/instagram.svg" alt="social links" />
          </figure>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
