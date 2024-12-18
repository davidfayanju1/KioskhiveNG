import React from "react";
import Form from "../components/common/Form";
import Button from "../components/common/Button";

const Retailer = () => {
  return (
    <div className="page_container">
      <div className="image_container mx-auto pt-[1rem] mb-[3rem]">
        <img src="/svgs/company.svg" alt="" className="w-[8rem] mx-auto" />
      </div>

      <div className="form_container mx-auto md:px-5 px-3 pt-[2rem] pb-[3.5rem] rounded-[8px] max-w-[40rem] w-[95%] bg-[#FC9A30]/10">
        <small className="block font-semibold mb-9 text-center gilroy text-gray-500">
          Set up your Retailer Account
        </small>

        <section className="form_container">
          <div className="flex_container mb-4 flex items-center justify-center gap-3 md:flex-row flex-col">
            <div className="form_container w-full">
              <Form
                label={"Brand Name"}
                type={"text"}
                placeholder={"Enter Brand Name"}
                containerStyle={"!border-none bg-[#f2e1ce]/70"}
              />
            </div>

            <div className="form_container w-full">
              <Form
                label={"Email"}
                type={"text"}
                placeholder={"Enter Email"}
                containerStyle={"!border-none bg-[#f2e1ce]/70"}
              />
            </div>
          </div>
          <Form
            label={"Phone Number"}
            type={"number"}
            placeholder={"Enter Phone Number"}
            containerStyle={"!border-none mb-6 bg-[#f2e1ce]/70"}
          />
          <Form
            label={"Business Name"}
            type={"text"}
            placeholder={"Enter Business Name"}
            containerStyle={"!border-none mb-6 bg-[#f2e1ce]/70"}
          />
          <Form
            label={"Business Address"}
            type={"text"}
            placeholder={"Enter Business Address"}
            containerStyle={"!border-none mb-9 bg-[#f2e1ce]/70"}
          />

          <Button
            name={"Sign Up"}
            className={"bg-[#FC9A30] w-full"}
            onPress={() => console.log("ok")}
          />
        </section>
      </div>
    </div>
  );
};

export default Retailer;
