import React from "react";
import Form from "../../common/Form";

const Objective = () => {
  return (
    <div className="page_container">
      <h1 className="gilroy-bold text-center text-[.9rem] mb-7">Objective</h1>

      <div className="form_container mx-auto md:px-5 px-3 pt-[2rem] pb-[3.5rem] rounded-[8px] max-w-[40rem] w-[95%] bg-[#FC9A30]/10">
        <Form
          label={"Business Name"}
          type={"text"}
          placeholder={"Enter Business/Brand Name"}
          containerStyle={"!border-none bg-[#f2e1ce]/70"}
        />
      </div>
    </div>
  );
};

export default Objective;
