import React from "react";

const Section5 = () => {
  const customers = [
    {
      img: "/images/Image1.png",
      text: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
      Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
      sodales. Donec sed neque eget`,
      name: "Robert Fox",
    },
    {
      img: "/images/Image2.png",
      text: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
      Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
      sodales. Donec sed neque eget`,
      name: "Dianne Russell",
    },
    {
      img: "/images/Image3.png",
      text: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
      Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
      sodales. Donec sed neque eget`,
      name: "Eleanor Per",
    },
  ];
  return (
    <section className="section_container min-h-[40vh] w-full py-[2rem]">
      <small className="testimonial_title flex items-center justify-center gap-[.4rem]">
        <figure>
          <img src="/svgs/bubble.svg" alt="" />
        </figure>
        <h1 className="block text-[.8rem] font-[600] text-[#F79009]">
          Testimonials
        </h1>
      </small>

      <div className="text_container text-center mx-auto mt-[1rem]">
        <h1 className="block font-[700] md:text-[2.1rem] text-[1.5rem] mb-[1.1rem]">
          What are people saying
        </h1>
        <p className="text-[#667085] mx-auto w-[95%] max-w-[43rem] md:text-[1rem] text-[.9rem] text-center block">
          Thank you for your trust in Kioskhive! We are grateful for your
          feedback and are committed to providing the best [products/services
          offered]. Read what our clients have to say about their experience
          with us
        </p>
      </div>

      <div className="slider_components px-[.5rem] my-[2rem] w-full gap-[2rem] flex md:flex-row flex-col items-center justify-center">
        {customers.map((item) => (
          <div
            className="card_element w-full border-solid border-[1px] md:p-[1rem] p-[.8rem] rounded-[10px]"
            key={item.name}
          >
            <div className="svg">
              <img src="/svgs/quote.svg" alt="" />
            </div>
            <blockquote className="text-[#667085] text-[.9rem] my-[1rem]">
              {item.text}
            </blockquote>

            <div className="image_container mt-[1rem] flex items-center justify-between w-full gap-[.5rem]">
              <div className="imge_text_container flex items-center justify-center md:gap-[.9rem] gap-[.5rem]">
                <img src={item.img} alt="" className="w-[2.7rem] h-[2.7rem]" />
                <div className="text_container">
                  <span className="block font-[500] text-black text-[.9rem]">
                    {item.name}
                  </span>
                  <small className="role block text-[#999999]">Customer</small>
                </div>
              </div>
              <div className="stars_container flex items-end justify-end ml-auto">
                <img src="/svgs/stars.svg" alt="" className="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section5;
