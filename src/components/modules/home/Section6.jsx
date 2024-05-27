import React from "react";
import Button from "../../common/Button";

const Section6 = () => {
  return (
    <div className="section_container mb-[5rem]">
      <div className="card mx-auto bg-[#F2F2F2] min-h-[40vh] w-[90%] flex md:flex-row flex-col py-[1.7rem] md:px-[2.5rem] px-[1rem] items-center justify-between gap-[1.8rem] rounded-[10px]">
        <div className="text_section w-full">
          <span className="block font-[500] md:text-[2.4rem] text-[1rem] mb-[1rem] text-left">
            Ready to take your business to the next level?
          </span>
          <Button className="bg-[#FDC624]" name="Try now - it's free" />
        </div>

        <figure className="w-full">
          <img src="/images/lady.png" alt="" className="w-full h-[30rem]" />
        </figure>
      </div>
    </div>
  );
};

export default Section6;
