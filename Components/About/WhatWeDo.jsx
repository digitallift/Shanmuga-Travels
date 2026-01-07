import React from "react";
import Image from "next/image";

const items = [
  { url: "/images/locations/pambanbridge.jpg", label: "Airport pickup & drop" },
  {
    url: "/images/locations/pambanbridge.jpg",
    label: "Railway station pickup & drop",
  },
  {
    url: "/images/locations/pambanbridge.jpg",
    label: "Bus stand pickup & drop",
  },
  {
    url: "/images/locations/pambanbridge.jpg",
    label: "Temple and pilgrimage trips (all religions)",
  },
  {
    url: "/images/locations/pambanbridge.jpg",
    label: "Local sightseeing and tourist place visits",
  },
  {
    url: "/images/locations/pambanbridge.jpg",
    label: "One-day and short-distance travel",
  },
  {
    url: "/images/locations/pambanbridge.jpg",
    label: "Family and group travel",
  },
];

const Overlay = ({ label }) => (
  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <p className="text-white text-lg font-semibold text-center px-4">{label}</p>
  </div>
);

const WhatWeDo = () => {
  return (
    <div className="w-full py-12 px-4 md:px-12">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-semibold bg-gradient-to-r from-primary via-teal to-gold text-transparent bg-clip-text mb-10">
        What We Do?
      </h2>

      {/* Gallery Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 md:grid-rows-5 gap-6">
        {/* Image 1 – Large (Top Left) */}
        <div className="relative col-span-2 row-span-2 rounded-xl overflow-hidden group h-[320px] md:h-auto">
          <Image
            src={items[0].url}
            alt={items[0].label}
            fill
            className="object-cover"
            priority
          />
          <Overlay label={items[0].label} />
        </div>
        {/* Image 2 – Top Right */}
        <div className="relative col-span-1 row-span-1 rounded-xl overflow-hidden group h-[150px]">
          <Image
            src={items[1].url}
            alt={items[1].label}
            fill
            className="object-cover"
          />
          <Overlay label={items[1].label} />
        </div>
        {/* Image 3 – Middle Right */}
        <div className="relative col-span-1 row-span-1 rounded-xl overflow-hidden group h-[150px]">
          <Image
            src={items[2].url}
            alt={items[2].label}
            fill
            className="object-cover"
          />
          <Overlay label={items[2].label} />
        </div>
        {/* Image 5 – Wide Left */}
        <div className="relative col-span-2 row-span-1 rounded-xl overflow-hidden group h-[150px]">
          <Image
            src={items[4].url}
            alt={items[4].label}
            fill
            className="object-cover"
          />
          <Overlay label={items[4].label} />
        </div>
        {/* Image 7 – Tall Right */}{" "}
        <div className="relative col-span-1 row-span-3 rounded-xl overflow-hidden group h-[320px] md:h-40">
          <Image
            src={items[6].url}
            alt={items[6].label}
            fill
            className="object-cover"
          />
          <Overlay label={items[6].label} />
        </div>
      </div>
      {/* Image 4 – Wide Left */}

      <div className="relative col-span-1 row-span-2 rounded-xl overflow-hidden group h-[150px]">
        <Image
          src={items[3].url}
          alt={items[3].label}
          fill
          className="object-cover"
        />
        <Overlay label={items[3].label} />
      </div>

      {/* Image 6 – Wide Left */}
      <div className="relative col-span-1 row-span-2 rounded-xl overflow-hidden group h-[150px]">
        <Image
          src={items[5].url}
          alt={items[5].label}
          fill
          className="object-cover"
        />
        <Overlay label={items[5].label} />
      </div>
    </div>
  );
};

export default WhatWeDo;
