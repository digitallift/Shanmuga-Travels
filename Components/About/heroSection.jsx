"use client";
import React from "react";
import { motion, spring } from "framer-motion";
const HerSection = () => {
  return (
    <div className="flex-col px-2 sm:px-40 justify-center items-center ">
      {" "}
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: spring,
          damping: 30,
          duration: 1,
          stiffness: 100,
        }}
        className="text-2xl md:text-4xl font-semibold tracking-tight bg-gradient-to-r from-primary via-teal to-gold text-transparent bg-clip-text"
      >
        About Us
      </motion.h2>
      {/* column */}
      <div className="flex  px-0 sm:px-40 py-10  gap-9  justify-center items-center ">
        {/* colum2 */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: spring,
            damping: 30,
            duration: 1,
            stiffness: 100,
          }}
          className="flex  text-gray-600 max-w-4xl hover:max-w-xl mx-auto justify-center px-8 py-0 bg-white  rounded-2xl  
                       hover:-translate-y-2  transition-all duration-300 text-justify text-xl md:text-lg font-semibold   "
        >
          SHANMUGA TRAVELS At Shanmuga Travels, we believe travel should be
          simple, safe, and reliable. For over 10+ years, we have been proudly
          providing trusted cab and travel services to customers across
          Tiruchendur, Thoothukudi, and Tirunelveli. Our focus is on helping
          people travel comfortably—whether it’s for pilgrimage, sightseeing,
          family trips, or daily travel needs. We understand local routes,
          temple timings, tourist places, and customer expectations, which helps
          us deliver smooth and stress-free journeys every time.
        </motion.h2>
      </div>
    </div>
  );
};

export default HerSection;
