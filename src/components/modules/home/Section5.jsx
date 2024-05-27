import React from "react";

const Section5 = () => {
  const customers = [
    {
      img: "/images/Image1.png",
      text: ` Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
      Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
      sodales. Donec sed neque eget`,
      name: "Robert Fox",
    },
    {
      img: "/images/Image2.png",
      text: ` Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
      Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
      sodales. Donec sed neque eget`,
      name: "Dianne Russell",
    },
    {
      img: "/images/Image3.png",
      text: ` Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
      Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
      sodales. Donec sed neque eget`,
      name: "Eleanor Per",
    },
  ];
  return (
    <section className="section_container min-h-[60vh] w-full">
      <small className="testimonial_title flex items-center justify-center gap-[.4rem]">
        <figure>
          <img src="/svgs/bubble.svg" alt="" />
        </figure>
        <span className="block text-[.8rem] font-[600] text-[#F79009]">
          Testimonials
        </span>
      </small>

      <div className="text_container text-center mx-auto mt-[1rem]">
        <span className="block font-[700] md:text-[2.4rem] text-[1.4rem]">
          What are people saying
        </span>
        <blockquote className="text-[#667085] mx-auto w-[95%] md:text-[1rem] text-[.8rem] text-center block">
          Thank you for your trust in Kioskhive! We are grateful for your
          feedback and are committed to providing the best [products/services
          offered]. Read what our clients have to say about their experience
          with us
        </blockquote>
      </div>

      <div className="slider_components my-[2rem] w-full gap-[2rem] flex px-[2rem] md:flex-row flex-col items-center justify-center">
        {customers.map((item) => (
          <div
            className="card_element md:w-full w-[43rem] border-solid border-[1px] p-[1rem] rounded-[10px]"
            key={item.name}
          >
            <div className="svg">
              <img src="/svgs/quote.svg" alt="" />
            </div>
            <blockquote className="text-[#4D4D4D] text-[.8rem] my-[1rem]">
              {item.text}
            </blockquote>

            <div className="image_container mt-[1rem] flex items-center justify-between w-full gap-[.5rem]">
              <div className="imge_text_container flex items-center justify-center gap-[.9rem] ">
                <img src={item.img} alt="" />
                <div className="text_container">
                  <span className="block font-[500] text-black">
                    {item.name}
                  </span>
                  <small className="role block text-[#999999]">Customer</small>
                </div>
              </div>
              <div className="stars_container">
                <img src="/svgs/stars.svg" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section5;
