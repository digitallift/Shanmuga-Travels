"use client";
import { vehicles } from '@/public/constants/Pilgrimage';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GoArrowRight } from "react-icons/go";
import { motion, spring } from 'framer-motion';

const VehicleCard = () => {
  return (
    <section className="py-14 px-4 max-w-7xl mx-auto">
      <motion.h1 
        initial={{y:40,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{
                type:spring,
                damping:30,
                duration:1,
                stiffness:100
      
              }}
      className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal to-gold md:text-4xl font-bold text-center mb-12">
        Find Your Ride
      </motion.h1>

      <div className="grid gap-6 mt-5 sm:grid-cols-2 lg:grid-cols-3">
        {vehicles.map((item) => (
          <div
            key={item.id}
            className="group rounded-3xl bg-white overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col">
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Price */}
              <span className="absolute top-4 left-4 bg-white/90 text-blue-700 text-sm font-bold px-4 py-1 rounded-full shadow">
                {item.price}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-semibold mb-2">
                {item.name}
              </h2>

              <p className="text-sm font-semibold text-gray-800 mb-1">
                {item.desc}
              </p>

              <p className="text-sm text-gray-600 flex-grow">
                {item.longdesc}
              </p>

              <Link
                href="/aboutus"
                className="mt-6 inline-flex items-center justify-between gap-3 bg-gradient-to-r from-primary via-teal to-gold hover:from-gold hover:via-teal hover:to-primary text-white px-6 py-3 rounded-full font-semibold transition-all duration-500"
              >
                View More
                <span className="bg-white text-black p-1.5 rounded-full">
                  <GoArrowRight className="h-5 w-5" />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VehicleCard;
