import React from "react";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { TbNumber10 } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { RiPriceTag3Line } from "react-icons/ri";
const WhyUs = () => {
  const experience = [
    {
      name: "10+ years of trusted service",
      Icon: TbNumber10,
    },
    {
      name: "Strong local knowledge",
      Icon: MdOutlineFamilyRestroom,
    },
    {
      name: "On-time pickup and drop",
      Icon: FaRegClock,
    },
    {
      name: "Suitable for families, pilgrims & NRIs",
      Icon: MdOutlineFamilyRestroom,
    },
    {
      name: "Friendly drivers and customer-first approach",
      Icon: FaHandshake,
    },
  ];
  const Commit = [
    {
      name: "Trust and reliability",
      Icon: MdOutlineSecurity,
    },
    {
      name: "Respect for all cultures and religions",
      Icon: MdOutlineFamilyRestroom,
    },
    {
      name: "Safe and responsible driving",
      Icon: FaCarSide,
    },
    {
      name: "Clear communication and fair pricing",
      Icon: RiPriceTag3Line,
    },
  ];

  return (
    <>
      <div className="w-full px-4 sm:px-6 lg:px-10 py-12">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold bg-gradient-to-r from-primary via-teal to-gold text-transparent bg-clip-text mb-6">
          Why Choose Shanmuga Travels?
        </h2>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experience.map((item, index) => {
            const IconComponent = item.Icon;

            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm 
                         hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4 text-primary text-4xl">
                  <IconComponent />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 text-center">
                  {item.name}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Footer text */}
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-10 py-12">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold bg-gradient-to-r from-primary via-teal to-gold text-transparent bg-clip-text mb-6">
          Why Choose Shanmuga Travels?
        </h2>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Commit.map((item, index) => {
            const IconComponent = item.Icon;

            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm 
                         hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 mx-auto rounded-full flex items-center justify-center text-xl mb-5 
                            bg-gradient-to-r from-primary via-teal to-gold text-white"
                >
                  <IconComponent />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 text-center">
                  {item.name}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Footer text */}
      </div>
    </>
  );
};

export default WhyUs;
