"use client";
import Image from 'next/image'
import React from 'react'
import { LuPlane } from "react-icons/lu";
import { FaCar } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { MdHotelClass } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';

const SSlide = () => {

  const openWhatsApp = (message) => {
  const text = encodeURIComponent(message);
  window.open(`https://wa.me/919566762130?text=${text}`, "_blank");
};

  return (
       <section className="w-full h-dvh">
         <div className="relative flex flex-col md:px-0 px-5 md:flex-row justify-center items-center md:items-start">
          <div className="md:w-1/2 flex justify-center  ">
            <Image className="md:h-125 w-full h-80 rounded-2xl md:w-100" src="/images/locations/manwtcab.jpg" alt="img1" width={150} height={100} />
          </div>
          <div className="md:w-1/2 flex flex-col mt-5  md:mt-5  justify-start items-start">
            <div className="max-w-xl w-full ">
              <h1 className="font-bold mb-3 text-2xl text-center md:text-start md:text-4xl bg-gradient-to-r from-primary via-teal to-gold text-transparent bg-clip-text">SHANMUGA TRAVELS</h1>
              <h1 className="text-lg text-center md:text-start md:text-2xl font-semibold tracking-tight ">
                Cab & Travel Services in Tiruchendur, Thoothukudi & Tirunelveli
              </h1>
              <p className="mt-4 font-normal text-gray-700 text-sm md:text-base">Welcome to Shanmuga Travels, your trusted local cab and travel service provider with over 10+ years of experience. We offer comfortable and reliable pickup & drop services, pilgrimage trips, sightseeing tours, and local travel across <span className='text-primary  text-base md:text-xl font-semibold'> Tiruchendur, Thoothukudi, and Tirunelveli.</span></p>
              
            </div>
                          {/* FEATURE GRID */}
              <div className=" mt-7 hidden md:-ml-60 z-30 md:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: <FaCar size={26} />, label: "Address Pickup" },
                  { icon: <LuPlane size={26} />, label: "Airport Transfer" },
                  { icon: <GiPathDistance size={26} />, label: "Long Distance" },
                  { icon: <MdHotelClass size={26} />, label: "Taxi Tours" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white border border-gray-200 p-4 rounded-xl shadow-xs "
                  >
                    <div className="text-black">{item.icon}</div>
                    <p className="text-lg font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
           
            <div className="md:flex flex-col md:flex-row hidden  mt-3 items-center justify-center gap-5 md:gap-10">
             <button onClick={() => openWhatsApp("Hello, I need more details")}
               className="inline-flex items-center gap-3 text-white bg-green-900 px-3.5 py-2.5 rounded-full font-semibold transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-green-800 hover:shadow-[0_12px_25px_rgba(34,197,94,0.45)] active:scale-95 group">
               <FaWhatsapp className="h-6 w-6 transition-transform duration-300  group-hover:rotate-6" />
               WhatsApp
              </button>

              <Link href="/aboutus" className="rounded-r-full rounded-l-full px-4 py-2 bg-gradient-to-r from-primary via-teal to-gold hover:from-gold hover:via-teal hover:to-primary duration-500 transition" >
                <p className="flex gap-2 text-sm md:text-base text-white font-semibold items-center">View More<span className="bg-white text-black px-1 py-1 rounded-full"><GoArrowRight className="h-5 w-5 md:h-6 md:w-6"/></span></p>
              </Link>
            </div> 
          </div>
          </div>
       </section>
  )
}

export default SSlide
