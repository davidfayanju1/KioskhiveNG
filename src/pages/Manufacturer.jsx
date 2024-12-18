import React, { useState } from "react";

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
    {
      name: 4,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="page_container gilroy-bold text-[2rem]"></div>
    </div>
  );
};

export default Manufacturer;
