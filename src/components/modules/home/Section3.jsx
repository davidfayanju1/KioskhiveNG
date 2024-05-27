import React from "react";

const Section3 = () => {
  const firstRow = [
    {
      svg: "/svgs/personalize.svg",
      title: "Personalized Accounts",
      text: "Manage your operations efficiently with user-friendly interfaces tailored specifically for retailers and manufacturers.",
    },

    {
      svg: "/svgs/bolt.svg",
      title: "Quick Sign-Up Process",
      text: "Provide minimal details and gain instant access to a world of opportunities Whether you're a retailer or a manufacturer.",
    },

    {
      svg: "/svgs/charts.svg",
      title: "Direct Inventory Access",
      text: "Brand owners have full control over their inventory, ensuring accurate representation and real-time updates on product availability.",
    },
  ];

  const secondRow = [
    {
      svg: "/svgs/options.svg",
      title: "Flexible Pricing Options",
      text: "Retailers can negotiate prices on products available for bidding, ensuring fair and mutually beneficial agreements for both buyers and sellers.",
    },

    {
      svg: "/svgs/guaranty.svg",
      title: "Secure Transaction Guarantee",
      text: "Shop and sell with confidence, knowing that your transactions and sensitive information are protected with our reliable and secure platform",
    },

    {
      svg: "/svgs/chat.svg",
      title: "Engaging Live Events",
      text: "Join us for live video sessions during special occasions, such as flash sales and promotional events.",
    },
  ];
  return (
    <section className="flex items-center justify-center md:px-[4rem] md:py-[4rem] py-[2rem] px-[1rem] min-h-[40vh] bg-[#FFFCF5]">
      <div className="section_container">
        <div className="item-container text-center mb-[2rem]">
          <small className="text-[#F79009] text-[.8rem] mb-[.8rem] font-[600] text-center">
            Features
          </small>
          <span className="block font-[700] md:text-[2rem] text-[1.3rem] mb-[.6rem] text-[#101828] text-center">
            Empowering your business journey
          </span>
          <small className="font-light text-black block text-center w-[95%]">
            Lorem ipsum dolor sit amet consectetur. Maecenas eu cras tortor
            suspendisse purus cras. In et sed nunc ante proin et urna praesent
            neque. At sed at in sit. Ornare
          </small>
        </div>

        <div className="first_flex_container  flex items-start w-full justify-center gap-[1.5rem] md:flex-row flex-col">
          {firstRow.map((item) => (
            <div className="item_card  md:!w-[40%] w-full" key={item.title}>
              <div className="text-left">
                <img src={item.svg} alt="" />
              </div>
              <h1 className="title font-[600] my-[.8rem] text-[1rem] text-left">
                {item.title}
              </h1>

              <p className="text-left text-[#667085]">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="first_flex_container mt-[2rem] flex items-start w-full justify-center gap-[1.5rem] md:flex-row flex-col">
          {secondRow.map((item) => (
            <div className="item_card md:!w-[40%] w-full" key={item.title}>
              <div className="text-left">
                <img src={item.svg} alt="" />
              </div>
              <h1 className="title font-[600] my-[.8rem] text-[1rem] text-left">
                {item.title}
              </h1>

              <p className="text-left text-[#667085]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
