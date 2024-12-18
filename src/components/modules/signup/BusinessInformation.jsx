import React from "react";
import Button from "../../common/Button";
import Form from "../../common/Form";
import { Link } from "react-router-dom";

const BusinessInformation = ({ setActive }) => {
  const handleSubmitInfo = () => {
    setActive(3);
  };

  return (
    <div className="mt-[3.5rem] mb-[5rem]">
      <div className="page_title">
        <h1 className="gilroy-bold text-center text-[.9rem] mb-7">
          Business Information
        </h1>
      </div>

      <div className="form_container mx-auto md:px-5 px-3 pt-[2rem] pb-[3.5rem] rounded-[8px] max-w-[40rem] w-[95%] bg-[#FC9A30]/10">
        <div className="flex-container flex items-center justify-center gap-3 md:flex-row flex-col">
          <div className="form_container w-full">
            <Form
              label={"Manufacturer Name"}
              type={"text"}
              placeholder={"Enter Manufacturer Name"}
              containerStyle={"!border-none bg-[#f2e1ce]/70"}
            />
          </div>
          <div className="form_container w-full">
            <Form
              label={"Company Name"}
              type={"text"}
              placeholder={"Enter Company Name"}
              containerStyle={"!border-none bg-[#f2e1ce]/70"}
            />
          </div>
        </div>

        <div className="flex-container flex items-center justify-center gap-3 md:flex-row flex-col">
          <div className="form_container w-full">
            <Form
              label={"Email"}
              type={"email"}
              placeholder={"Enter Email"}
              containerStyle={"!border-none bg-[#f2e1ce]/70"}
            />
          </div>
          <div className="form_container w-full">
            <Form
              label={"Phone Number"}
              type={"number"}
              placeholder={"Enter Phone Number"}
              containerStyle={"!border-none bg-[#f2e1ce]/70"}
            />
          </div>
        </div>

        <div className="flex-container flex items-center justify-center gap-3 md:flex-row flex-col">
          <div className="form_container w-full">
            <Form
              label={"Address"}
              type={"email"}
              placeholder={"Enter Address"}
              containerStyle={"!border-none bg-[#f2e1ce]/70"}
            />
          </div>
          <div className="form_container w-full">
            <Form
              label={"Local Government Area"}
              type={"text"}
              placeholder={"Enter LGA"}
              containerStyle={"!border-none bg-[#f2e1ce]/70"}
            />
          </div>
        </div>

        <div className="flex-container flex items-center justify-center gap-3 md:flex-row flex-col">
          <div className="form_container w-full">
            <Form
              label={"State Of Origin"}
              type={"text"}
              placeholder={"Enter State of Origin"}
              containerStyle={"!border-none bg-[#f2e1ce]/70"}
            />
          </div>
          <div className="form_container w-full">
            <Form
              label={"Nationality"}
              type={"text"}
              placeholder={"Enter Country"}
              containerStyle={"!border-none bg-[#f2e1ce]/70"}
            />
          </div>
        </div>
        <div className="flex-container flex items-center justify-center gap-3 md:flex-row flex-col">
          <div className="form_container w-full">
            <Form
              label={"ID Type"}
              type={"text"}
              placeholder={"Enter Type Of Id"}
              containerStyle={"!border-none bg-[#f2e1ce]/70"}
            />
          </div>
          <div className="form_container w-full">
            <Form
              label={"Upload ID"}
              type={"text"}
              placeholder={"Upload your id"}
              containerStyle={"!border-none bg-[#f2e1ce]/70"}
            />
          </div>
        </div>

        <Button
          onPress={handleSubmitInfo}
          name={"Submit"}
          className={"bg-[#FC9A30] !text-[.9rem] w-full mt-[3rem]"}
        />
      </div>
    </div>
  );
};

export default BusinessInformation;
