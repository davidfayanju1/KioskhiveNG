import React, { useState } from "react";
import PersonalInformation from "../components/modules/signup/PersonalInformation";
import BusinessInformation from "../components/modules/signup/BusinessInformation";
import Objective from "../components/modules/signup/Objective";

const Manufacturer = () => {
  const [active, setActive] = useState(1);

  const steps = [
    {
      name: 1,
    },

    {
      name: 2,
    },

    {
      name: 3,
    },
    // {
    //   name: 4,
    // },
  ];

  return (
    <div className="min-h-screen">
      <div className="steps_container pt-[2rem] flex items-center justify-center">
        {steps.map((item, index) => (
          <div className="button_container flex items-center">
            <button
              className={`rounded-full flex items-center justify-center ${
                item.name === active ? "bg-[#FC9A30]" : "bg-gray-200"
              } h-[2rem] w-[2rem] text-white `}
            >
              {item.name}
            </button>
            {steps.length - 1 !== index && (
              <div className="line block w-[3rem] bg-gray-300 h-[.0033rem]"></div>
            )}
          </div>
        ))}
      </div>
      <div className="page_container text-[2rem]">
        {active === 1 && <PersonalInformation setActive={setActive} />}
        {active === 2 && <BusinessInformation setActive={setActive} />}
        {active === 3 && <Objective setActive={setActive} />}
      </div>
    </div>
  );
};

export default Manufacturer;
