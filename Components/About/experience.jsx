"use client";
import React from "react";
import { motion, spring } from "framer-motion";
import {
  MdOutlineFamilyRestroom,
  MdOutlineTravelExplore,
  MdOutlineLocationOn,
} from "react-icons/md";
import { FaPrayingHands, FaUserFriends } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
const Experience = () => {
  const experience = [
    {
      id: 1,
      title: "Families and Senior Citizens",
      Icon: MdOutlineFamilyRestroom,
    },
    {
      id: 2,
      title: "Pilgrims of All Religions",
      Icon: FaPrayingHands,
    },
    {
      id: 3,
      title: "NRIs Visiting Their Hometowns",
      Icon: RiGlobalLine, // global / overseas
    },
    {
      id: 4,
      title: "Travellers New to the Region",
      Icon: MdOutlineTravelExplore,
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-12">
      {/* Heading */}
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: spring,
          damping: 30,
          duration: 1,
          stiffness: 100,
        }}
        className="text-center text-3xl md:text-4xl font-semibold bg-gradient-to-r from-primary via-teal to-gold text-transparent bg-clip-text mb-4"
      >
        Our Experience & Local Expertise
      </motion.h2>

      {/* Subtitle */}
      <p className="text-center text-gray-600 max-w-5xl mx-auto text-base md:text-lg mb-10">
        With more than a decade of hands-on experience, our drivers and team
        know the region inside out. We regularly serve:
      </p>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {experience.map((service) => {
          const IconComponent = service.Icon;

          return (
            <div
              key={service.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm 
                       hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon placeholder */}
              <div
                className="w-14 h-14 mx-auto rounded-full flex items-center justify-center text-xl mb-5 
                            bg-gradient-to-r from-primary via-teal to-gold text-white"
              >
                <IconComponent />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                {service.title}
              </h3>
            </div>
          );
        })}
      </div>

      {/* Footer text */}
      <p className="text-center text-sm text-primary mt-10">
        From short local rides to full-day tours, we ensure every trip is well
        planned and on time.
      </p>
    </div>
  );
};

export default Experience;
