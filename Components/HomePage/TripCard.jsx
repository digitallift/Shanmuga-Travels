"use client";
import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { PilgrimageList } from "@/public/constants/Pilgrimage";


 

const TripCard = () => {
  return (
     <section className="max-w-7xl mx-auto px-6 py-15 md:py-5">
      <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r text-transparent bg-clip-text from-primary via-teal to-gold mb-10 text-center">
        Pilgrimage Trips – All Religions
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8">
        {PilgrimageList.map((trip, index) => (
          <div
            key={index}
            className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-102 transition-all duration-300"
          >
            {/* IMAGE */}
            <div className="relative w-full h-48">
              <Image
                src={trip.img}
                alt={trip.title}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="px-4 py-5">
              <h3 className="text-xl font-semibold text-black mb-2">{trip.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-3">{trip.description}</p>

              <div className="mt-4 flex items-center gap-2 text-yellow-500">
                 <FaMapMarkerAlt />
                <span className="text-gray-700 text-sm">{trip.location}</span>
              </div>
             <Link href="/tourpackage"
               className="inline-flex mx-auto md:mx-0 mt-7 md:mt-4 rounded-full px-4 py-2 bg-gradient-to-r from-primary via-teal to-gold hover:from-gold hover:via-teal hover:to-primary transition duration-500">
                <span className="flex gap-2 text-xs md:text-sm  text-white font-semibold items-center">
                 Book Now
                <span className="bg-white text-black px-0.5 py-0.5 rounded-full">
                 <GoArrowRight className="h-5 w-5 md:h-6 md:w-6" />
               </span>
               </span>
              </Link>
            </div>
          
          </div>
        ))}
      </div>
    </section>
  );
};

export default TripCard ;
