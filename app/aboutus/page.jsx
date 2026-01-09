import Experience from "@/Components/About/experience";
import HerSection from "@/Components/About/heroSection";
import WhatWeDo from "@/Components/About/WhatWeDo";
import WhyUs from "@/Components/About/whyUs";
import WhyChooseUs from "@/Components/HomePage/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto text-center mt-20 text-3xl  font-semibold text-black ">
      <HerSection />
      <WhatWeDo />
      <Experience />
      <WhyChooseUs />
    </div>
  );
};

export default page;
