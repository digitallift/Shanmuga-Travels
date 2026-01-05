"use client";
import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

 const trips = [
    {
      title: "Ooty Hill Station",
      description: "Enjoy the serene hills, botanical gardens, and scenic Nilgiri views.",
      location: "Ooty, TN",
    },
    {
      title: "Kodaikanal Getaway",
      description: "Relax by the lake, visit waterfalls, and explore lush forests.",
      location: "Kodaikanal, TN",
    },
    {
      title: "Mahabalipuram Temples",
      description: "Explore ancient rock-cut temples and beautiful coastal monuments.",
      location: "Mahabalipuram, TN",
    },
    {
      title: "Yelagiri Hills",
      description: "Trek through the hills, enjoy nature walks and peaceful surroundings.",
      location: "Yelagiri, TN",
    },
    {
      title: "Rameshwaram Pilgrimage",
      description: "Visit holy temples, serene beaches, and historic architecture.",
      location: "Rameshwaram, TN",
    },
    {
      title: "Kanchipuram Temples",
      description: "Famous for ancient temples and traditional silk sarees shopping.",
      location: "Kanchipuram, TN",
    },
    {
      title: "Chidambaram Temple",
      description: "Experience the spiritual vibes at this historic temple town.",
      location: "Chidambaram, TN",
    },
    {
      title: "Courtallam Waterfalls",
      description: "Enjoy refreshing waterfalls, natural pools, and scenic landscapes.",
      location: "Courtallam, TN",
    },
  ];


const TripCard = () => {
  return (
     <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-10 text-center">
        Popular Trips from Chennai
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8">
        {trips.map((trip, index) => (
          <div
            key={index}
            className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-102 transition-all duration-300"
          >
            {/* IMAGE */}
            <div className="relative w-full h-48">
              <Image
                src="/images/fplace.jpg"
                alt={trip.title}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="px-4 py-5">
              <h3 className="text-xl font-semibold text-black mb-2">{trip.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">{trip.description}</p>

              <div className="mt-4 flex items-center gap-2 text-yellow-500">
                 <FaMapMarkerAlt />
                <span className="text-gray-700 text-sm">{trip.location}</span>
              </div>
             <Link href="/tourpackage"
               className="inline-flex mx-auto md:mx-0 mt-7 md:mt-4 rounded-full px-4 py-2 bg-blue-900 hover:bg-red-900 transition duration-500">
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
