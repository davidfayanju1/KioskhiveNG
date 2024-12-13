import { clamp } from "framer-motion";
import React from "react";

const Button = ({ name, className, onPress }) => {
  return (
    <button
      onClick={onPress}
      className={`border-none rounded-full px-[1.3rem] py-[.5rem] ${className} items-center justify-center text-white font-[400]`}
    >
      {name}
    </button>
  );
};

export default Button;
