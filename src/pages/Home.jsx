import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import Section1 from "../components/modules/home/Section1";
import Section2 from "../components/modules/home/Section2";
import Section3 from "../components/modules/home/Section3";
import Section4 from "../components/modules/home/Section4";
import Section6 from "../components/modules/home/Section6";
import Section5 from "../components/modules/home/Section5";

const Home = () => {
  return (
    <DefaultLayout active={1}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </DefaultLayout>
  );
};

export default Home;
