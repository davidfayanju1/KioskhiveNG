import React from "react";
import Button from "../../common/Button";
import Form from "../../common/Form";
import { Link } from "react-router-dom";

const PersonalInformation = () => {
  return (
    <div className="mt-[3.5rem]">
      <div className="page_title">
        <h1 className="gilroy-bold text-center text-[.9rem] mb-7">
          Personal Information
        </h1>
      </div>

      <div className="form_container mx-auto md:px-5 px-3 pt-[2rem] pb-[3.5rem] rounded-[8px] max-w-[40rem] w-[95%] bg-[#FC9A30]/10">
        <Form
          label={"Manufacturer Name"}
          placeholder={"Enter Manufacturer's Full Name"}
        />
      </div>
    </div>
  );
};

export default PersonalInformation;
