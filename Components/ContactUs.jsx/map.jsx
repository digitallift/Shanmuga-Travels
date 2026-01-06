"use client";

import { GoArrowRight } from "react-icons/go";

export default function ContactUsMaps() {
  const services = [
    "Quick response for bookings & enquiries",
    "Support for airport, railway & bus stand pickup",
    "Local sightseeing & pilgrimage travel (all religions)",
    "Friendly assistance and clear communication",
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="flex justify-center items-center text-3xl md:text-4xl font-semibold bg-gradient-to-r from-primary via-teal to-gold text-transparent bg-clip-text mb-12">
          Why Contact Shanmuga Travels?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex justify-center items-center bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
