import React from "react";
import Form from "../components/common/Form";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";

const Retailer = () => {
  return (
    <div className="page_container pb-[4rem]">
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

          <div className="flex items-center mb-3 justify-center gap-3  md:flex-row flex-col">
            <div className="form-container w-full">
              <Form
                label={"Phone Number"}
                type={"number"}
                placeholder={"Enter Phone Number"}
                containerStyle={"!border-none bg-[#f2e1ce]/70"}
              />
            </div>

            <div className="form-container w-full">
              <Form
                label={"Business Address"}
                type={"text"}
                placeholder={"Enter Business Address"}
                containerStyle={"!border-none  bg-[#f2e1ce]/70"}
              />
            </div>
          </div>

          <Form
            label={"Password"}
            type={"password"}
            placeholder={"Enter Password"}
            containerStyle={"!border-none mb-3 bg-[#f2e1ce]/70"}
          />
          <Form
            label={"Confirm Password"}
            type={"password"}
            placeholder={"Confirm Password"}
            containerStyle={"!border-none mb-[3rem] bg-[#f2e1ce]/70"}
          />

          <Button
            name={"Sign Up"}
            className={"bg-[#FC9A30] w-full !text-[.9rem] !font-semibold"}
            onPress={() => console.log("ok")}
          />

          <small className="block text-center gilroy mt-2">
            Change of thoughts?{" "}
            <Link
              to={"/signup/manufacturer"}
              className=" text-[#FC9A30] underline"
            >
              Sign up as Manufacturer
            </Link>
          </small>
        </section>
      </div>
    </div>
  );
};

export default Retailer;
