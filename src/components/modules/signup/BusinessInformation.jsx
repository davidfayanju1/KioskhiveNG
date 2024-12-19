import React from "react";
import Button from "../../common/Button";
import Form from "../../common/Form";
import { Link } from "react-router-dom";

const BusinessInformation = ({ setActive }) => {
  const handleSubmitInfo = () => {
    setActive(3);
  };

  const categories = [
    {
      name: "Men",
      url: "/men",
    },
    {
      name: "Home and decor",
      url: "/Home-decor",
    },
    {
      name: "Women",
      url: "/women",
    },

    {
      name: "Jewelries",
      url: "Jewelries",
    },

    {
      name: "Make over",
      url: "/makeover",
    },

    {
      name: "Adire",
      url: "/adire",
    },

    {
      name: "Paper and Novelty",
      url: "/paper-novelty",
    },

    {
      name: "Scented Candles",
      url: "/candles",
    },

    {
      name: "Pets",
      url: "/pets",
    },

    {
      name: "Kiddies Lounge",
      url: "/kiddies-lounge",
    },
  ];

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
              label={"Business Name"}
              type={"text"}
              placeholder={"Enter Business/Brand Name"}
              containerStyle={"!border-none bg-[#f2e1ce]/70"}
            />
          </div>
          <div className="form_container w-full">
            <Form
              label={"Business Email"}
              type={"text"}
              placeholder={"Enter Business Email"}
              containerStyle={"!border-none bg-[#f2e1ce]/70"}
            />
          </div>
        </div>

        <div className="flex-container flex items-center justify-center gap-3 md:flex-row flex-col">
          <div className="form_container w-full">
            <Form
              label={"Business Line"}
              type={"number"}
              placeholder={"Enter Business Line"}
              containerStyle={"!border-none bg-[#f2e1ce]/70"}
            />
          </div>
          <div className="form_container w-full">
            <Form
              label={"Business Type"}
              type={"select"}
              placeholder={"Enter Phone Number"}
              containerStyle={"!border-none bg-[#f2e1ce]/70"}
              options={categories}
            />
          </div>
        </div>

        <div className="flex-container flex items-center justify-center gap-3 md:flex-row flex-col">
          <div className="form_container w-full">
            <Form
              label={"About"}
              type={"text"}
              placeholder={"Describe what you do.."}
              containerStyle={"!border-none bg-[#f2e1ce]/70"}
            />
          </div>
          <div className="form_container w-full">
            <Form
              label={"Business Purpose"}
              type={"text"}
              placeholder={"Explain your business goals"}
              containerStyle={"!border-none bg-[#f2e1ce]/70"}
            />
          </div>
        </div>

        <div className="flex-container flex items-center justify-center gap-3 md:flex-row flex-col">
          <div className="form_container w-full">
            <Form
              label={"Target Audience"}
              type={"text"}
              placeholder={"Enter Business Target Audience"}
              containerStyle={"!border-none bg-[#f2e1ce]/70"}
            />
          </div>
          <div className="form_container w-full">
            <Form
              label={"Business Address"}
              type={"text"}
              placeholder={"Enter Business Address"}
              containerStyle={"!border-none bg-[#f2e1ce]/70"}
            />
          </div>
        </div>
        <div className="flex-container flex items-center justify-center gap-3 md:flex-row flex-col">
          <div className="form_container w-full">
            <Form
              label={"Registration Number"}
              type={"text"}
              placeholder={"Enter CAC Registration Number"}
              containerStyle={"!border-none bg-[#f2e1ce]/70"}
            />
          </div>
          <div className="form_container w-full">
            <Form
              label={"Upload Certificate"}
              type={"text"}
              placeholder={"Upload Certificate"}
              containerStyle={"!border-none bg-[#f2e1ce]/70"}
            />
          </div>
        </div>

        <Button
          onPress={handleSubmitInfo}
          name={"Submit"}
          className={
            "bg-[#556AFF] !rounded-[9px] !text-[.9rem] w-full mt-[3rem]"
          }
        />
      </div>
    </div>
  );
};

export default BusinessInformation;
