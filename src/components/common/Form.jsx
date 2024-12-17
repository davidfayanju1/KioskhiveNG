import React, { useState } from "react";
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";

const Form = ({ label, type, containerStyle, placeholder, onChange }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {label && (
        <label htmlFor={label} className="gilroy text-[.7rem]">
          {label}
        </label>
      )}
      <div
        className={`input_container flex w-full border-solid border-[#E4E7E9] rounded-[9px] border-[1px] h-[3rem] px-3 items-center justify-between ${containerStyle}`}
      >
        <input
          type={type === "password" ? (show ? "text" : "password") : type}
          className={`bg-transparent placeholder:text-[12.5px] outline-none text-[16px] placeholder:text-gray-400 ${
            type === "password" ? "w-[80%]" : "w-full"
          }`}
          placeholder={placeholder}
          onChange={onChange}
        />

        {type === "password" && (
          <div
            onClick={() => setShow(!show)}
            className="icon_container w-[10%]"
          >
            {!show ? (
              <LuEye color="#191C1F" />
            ) : (
              <LuEyeClosed color="#191C1F" />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Form;
