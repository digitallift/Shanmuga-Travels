"use client";
import React from "react";
import {
  FaCar,
  FaUserTie,
  FaClock,
  FaMapMarkedAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { motion, spring } from "framer-motion";

const reasons = [
  {
    id: 1,
    icon: <FaClock />,
    title: "10+ Years of Experience",
    desc: "Over a decade of trusted local travel service with deep regional knowledge.",
  },
  {
    id: 2,
    icon: <FaUserTie />,
    title: "Professional Drivers",
    desc: "Friendly, experienced, and well-trained drivers for a smooth journey.",
  },
  {
    id: 3,
    icon: <FaCar />,
    title: "Comfortable Vehicles",
    desc: "Clean, well-maintained cars ensuring comfort and peace of mind.",
  },
  {
    id: 4,
    icon: <FaMapMarkedAlt />,
    title: "Route Expertise",
    desc: "Expert knowledge of religious destinations and tourist locations.",
  },
  {
    id: 5,
    icon: <FaShieldAlt />,
    title: "Safe & Reliable",
    desc: "On-time pickups, safe travel, and dependable service every trip.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full px-6 md:px-20 py-16 bg-white">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <motion.h2 
         initial={{y:40,opacity:0}}
                                        whileInView={{y:0,opacity:1}}
                                        transition={{
                                          type:spring,
                                          damping:30,
                                          duration:1,
                                          stiffness:100
                                
                                        }}
        className="text-2xl md:text-4xl font-semibold tracking-tight bg-gradient-to-r from-primary via-teal to-gold text-transparent bg-clip-text">
          Why Choose Shanmuga Travels?
        </motion.h2>
        <motion.p 
        initial={{y:40,opacity:0}}
                                        whileInView={{y:0,opacity:1}}
                                        transition={{
                                          type:spring,
                                          damping:30,
                                          duration:1,
                                          delay:0.8,
                                          stiffness:100
                                
                                        }}
        className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Trusted travel solutions designed for comfort, safety, and spiritual journeys.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((item) => (
          <div
            key={item.id}
            className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-5 bg-gradient-to-r from-primary via-teal to-gold text-white group-hover:scale-110 transition">
              {item.icon}
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
