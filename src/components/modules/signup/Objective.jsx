import React from "react";
import Form from "../../common/Form";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";

const Objective = () => {
  const navigate = useNavigate();

  return (
    <div className="page_container mt-[4rem]">
      <h1 className="gilroy-bold text-center text-[.9rem] mb-7">Objective</h1>

      <div className="form_container mx-auto md:px-5 px-3 pt-[2rem] pb-[3.5rem] rounded-[8px] max-w-[40rem] w-[95%] bg-[#FC9A30]/10">
        <Form
          label={"Year Of Inception"}
          type={"text"}
          placeholder={"DD/MM/YY"}
          containerStyle={"!border-none bg-[#f2e1ce]/70"}
        />

        <Form
          label={"Objective"}
          type={"text"}
          placeholder={"Enter Objective of Business"}
          containerStyle={"!border-none bg-[#f2e1ce]/70"}
        />

        <Form
          label={"How Did you hear about us"}
          type={"text"}
          placeholder={"How did you hear about us"}
          containerStyle={"!border-none bg-[#f2e1ce]/70"}
        />

        <Button
          onPress={() => navigate("/marketplace")}
          name={"Complete"}
          className={
            "bg-[#556AFF] !rounded-[9px] !text-[.9rem] w-full mt-[3rem]"
          }
        />
      </div>
    </div>
  );
};

export default Objective;
