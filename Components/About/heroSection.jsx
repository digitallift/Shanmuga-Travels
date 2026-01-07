import React from "react";

import { LuPlane } from "react-icons/lu";
import { FaCar } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { MdHotelClass } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineFamilyRestroom } from "react-icons/md";
const HerSection = () => {
  return (
    <div className="flex-col px-40 justify-center items-center ">
      {" "}
      <h2 className="flex  justify-center items-center text-3xl md:text-4xl font-semibold bg-gradient-to-r text-transparent bg-clip-text from-primary via-teal to-gold  text-start">
        About Us
      </h2>
      {/* column */}
      <div className="flex px-40 py-10  gap-9  justify-center items-center ">
        {/* colum2 */}
        <div
          className="flex  text-gray-600 max-w-4xl hover:max-w-xl mx-auto justify-center px-8 py-0 bg-white  rounded-2xl  
                       hover:-translate-y-2  transition-all duration-300 items-center text-xl md:text-lg font-semibold   "
        >
          SHANMUGA TRAVELS At Shanmuga Travels, we believe travel should be
          simple, safe, and reliable. For over 10+ years, we have been proudly
          providing trusted cab and travel services to customers across
          Tiruchendur, Thoothukudi, and Tirunelveli. Our focus is on helping
          people travel comfortably—whether it’s for pilgrimage, sightseeing,
          family trips, or daily travel needs. We understand local routes,
          temple timings, tourist places, and customer expectations, which helps
          us deliver smooth and stress-free journeys every time.
        </div>
      </div>
    </div>
  );
};

export default HerSection;
