"use client";
import React from "react";
import {
  FaPrayingHands,
  FaPlaneArrival,
  FaMapMarkedAlt,
  FaUsers,
  FaRoute,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaPrayingHands />,
    title: "Pilgrimage Trips",
    desc: "Comfortable and reliable travel for pilgrimage tours across all religions.",
  },
  {
    id: 2,
    icon: <FaPlaneArrival />,
    title: "Pickup & Drop Services",
    desc: "Airport, railway station, and bus stand pickup and drop at your convenience.",
  },
  {
    id: 3,
    icon: <FaMapMarkedAlt />,
    title: "Local Sightseeing",
    desc: "Explore nearby attractions with flexible one-day and local trip options.",
  },
  {
    id: 4,
    icon: <FaUsers />,
    title: "Family & Group Travel",
    desc: "Spacious vehicles and smooth planning for family and group journeys.",
  },
  {
    id: 5,
    icon: <FaRoute />,
    title: "Outstation Journeys",
    desc: "Short and long-distance travel with safe, reliable, and timely service.",
  },
];

const TravelServices = () => {
  return (
    <section className="w-full px-6 md:px-20 py-16 bg-white">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight bg-gradient-to-r from-primary via-teal to-gold text-transparent bg-clip-text">
          Our Travel Services
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Reliable travel solutions tailored for comfort, convenience, and peace of mind.
        </p>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-5 bg-gradient-to-r from-primary via-teal to-gold text-white group-hover:scale-110 transition">
              {service.icon}
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelServices;
