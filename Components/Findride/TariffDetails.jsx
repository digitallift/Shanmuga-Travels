"use client";
import React from "react";
import {
  FaReceipt,
  FaRoad,
  FaSuitcaseRolling,
  FaChartLine,
  FaClock,
  FaPhoneAlt,
  FaMoneyBillWave,
  FaCheckCircle,
} from "react-icons/fa";

const TariffDetails = () => {
  return (
    <section className="w-full bg-white px-6 md:px-20 py-20">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-teal to-gold opacity-[0.06] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl  md:text-4xl font-bold text-gray-900">
            Tariff Details & Booking Terms
          </h2>
          <p className="text-gray-600 mt-2">
            Transparent pricing with clear travel policies
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {[
              "No Hidden Charges",
              "Verified Drivers",
              "Transparent Billing",
            ].map((text, i) => (
              <span
                key={i}
                className="flex items-center gap-2 bg-gradient-to-r from-primary via-teal to-gold text-white px-4 py-2 text-sm font-medium"
              >
                <FaCheckCircle />
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              title: "Taxes & Charges",
              icon: <FaReceipt />,
              color: "blue",
              content: [
                "Rates exclusive of GST",
                "Toll, parking & permits extra",
                "Hill station charge: ₹300",
              ],
            },
            {
              title: "Distance & Driver Bata",
              icon: <FaRoad />,
              color: "emerald",
              content: [
                "One-way: Min 130 km",
                "Driver bata ₹300/day",
                "400+ km → ₹600/day",
                "Round trip: Min 250 km/day",
                "500+ km → ₹600/day",
              ],
            },
            {
              title: "Luggage Policy",
              icon: <FaSuitcaseRolling />,
              color: "orange",
              content: [
                "Sedan: 4 pax + 3 bags",
                "SUV: 7 pax + 4 bags",
                "Extra luggage ₹300+",
              ],
            },
            {
              title: "Demand Pricing",
              icon: <FaChartLine />,
              color: "purple",
              content: [
                "Vehicle demand",
                "Travel location",
                "Seasonal rush",
              ],
              note: "Innova, Etios & select vehicles",
            },
            {
              title: "Time Calculation",
              icon: <FaClock />,
              color: "gray",
              content: ["1 Day = 12:00 AM – 12:00 AM"],
            },
            {
              title: "Offers",
              icon: <FaMoneyBillWave />,
              color: "green",
              content: [
                "Sedan above 300 km",
                "SUV above 250 km",
                "Subject to T&C",
              ],
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`relative bg-white p-6 border-l-4 border-${card.color}-600 
              hover:-translate-y-1 hover:shadow-xl transition duration-300`}
            >
              {/* Accent Top */}
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary via-teal to-gold" />

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-100 text-gray-800 text-xl">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>
              </div>

              {/* Content */}
              <ul className="space-y-2 text-gray-700">
                {card.content.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>

              {card.note && (
                <p className="text-sm text-gray-500 mt-3">
                  *{card.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="tel:+919566762130"
            className="inline-flex items-center gap-4 
            bg-gradient-to-r from-primary via-teal to-gold 
            text-white px-12 py-4 text-lg font-semibold 
            hover:scale-105 transition shadow-lg"
          >
            <FaPhoneAlt />
            Get Exact Pricing – +91 95667 62130
          </a>
          <p className="text-gray-600 text-sm mt-3">
            Call or WhatsApp for custom quotes
          </p>
        </div>

      </div>
    </section>
  );
};

export default TariffDetails;
