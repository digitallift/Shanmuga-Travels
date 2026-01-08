import React from "react";
import Image from "next/image";

const items = [
  { url: "/images/AAirport.jpg", label: "Airport pickup & drop" },
  {
    url: "/images/trains.jpg",
    label: "Railway station pickup & drop",
  },
  {
    url: "/images/bus_stand.png",
    label: "Bus stand pickup & drop",
  },
  {
    url: "/images/Pilgrimage.png",
    label: "Temple and pilgrimage trips (all religions)",
  },
  {
    url: "/images/Local_side_seeing.png",
    label: "Local sightseeing and tourist place visits",
  },
  {
    url: "/images/locations/loc.jpg",
    label: "One-day and short-distance travel",
  },
  {
    url: "/images/Family_trip.jpg",
    label: "Family and group travel",
  },
];

const Overlay = ({ label }) => (
  <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-teal/70 to-gold/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <p className="text-white text-xl font-bold text-center px-4">{label}</p>
  </div>
);

const WhatWeDo = () => {
  return (
    <div className="w-full py-12 px-4 md:px-12">
      <h2 className="text-center text-3xl md:text-4xl font-semibold bg-gradient-to-r from-primary via-teal to-gold text-transparent bg-clip-text mb-10">
        What We Do?
      </h2>

      <div
        className="max-w-7xl mx-auto  flex flex-col gap-6 
                      md:grid md:grid-cols-3 md:grid-rows-5"
      >
        {/* Image 1 – Large */}
        <div className="relative col-span-2 row-span-2 rounded-xl overflow-hidden group">
          <Image
            src={items[0].url}
            alt={items[0].label}
            fill
            className="object-cover"
          />
          <Overlay label={items[0].label} />
        </div>

        {/* Image 2 */}
        <div className="relative rounded-xl overflow-hidden group h-[150px]">
          <Image
            src={items[1].url}
            alt={items[1].label}
            fill
            className="object-cover"
          />
          <Overlay label={items[1].label} />
        </div>

        {/* Image 3 */}
        <div className="relative rounded-xl overflow-hidden group h-[150px]">
          <Image
            src={items[2].url}
            alt={items[2].label}
            fill
            className="object-cover"
          />
          <Overlay label={items[2].label} />
        </div>

        {/* Image 4 */}
        <div className="relative rounded-xl overflow-hidden group h-[150px]">
          <Image
            src={items[3].url}
            alt={items[3].label}
            fill
            className="object-cover"
          />
          <Overlay label={items[3].label} />
        </div>

        {/* Image 5 – Wide */}
        <div className="relative col-span-2 rounded-xl overflow-hidden group h-[150px]">
          <Image
            src={items[4].url}
            alt={items[4].label}
            fill
            className="object-cover"
          />
          <Overlay label={items[4].label} />
        </div>

        {/* Image 6 */}
        <div className="relative rounded-xl col-span-2  overflow-hidden group h-[150px]">
          <Image
            src={items[5].url}
            alt={items[5].label}
            fill
            className="object-cover"
          />
          <Overlay label={items[5].label} />
        </div>

        {/* Image 7 – Tall */}
        <div className="relative   rounded-xl overflow-hidden group">
          <Image
            src={items[6].url}
            alt={items[6].label}
            fill
            className="object-cover"
          />
          <Overlay label={items[6].label} />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
