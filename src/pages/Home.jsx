import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import Section1 from "../components/modules/home/Section1";
import Section2 from "../components/modules/home/Section2";
import Section3 from "../components/modules/home/Section3";
import Section4 from "../components/modules/home/Section4";
import Section5 from "../components/modules/home/Section5";
import Section6 from "../components/modules/home/Section6";
import FadeLayout from "../layout/FadeLayout";

const Home = () => {
  return (
    <DefaultLayout active={1}>
      <FadeLayout delay={0.1}>
        <Section1 />
      </FadeLayout>
      <FadeLayout delay={0.2}>
        <Section2 />
      </FadeLayout>
      <FadeLayout delay={0.3}>
        <Section3 />
      </FadeLayout>
      <FadeLayout delay={0.4}>
        <Section4 />
      </FadeLayout>
      <FadeLayout delay={0.5}>
        <Section5 />
      </FadeLayout>
      <FadeLayout delay={0.6}>
        <Section6 />
      </FadeLayout>
    </DefaultLayout>
  );
};

export default Home;
