import Image from 'next/image'
import React from 'react'
import { LuPlane } from "react-icons/lu";
import { FaCar } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { MdHotelClass } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import Link from 'next/link';

const SSlide = () => {
  return (
       <section className="w-full h-dvh">
         <div className="relative flex flex-col md:px-0 px-5 md:flex-row justify-center items-center md:items-start">
          <div className="md:w-1/2 flex justify-center  ">
            <Image className="md:h-125 w-full h-80 rounded-2xl md:w-100" src="/images/yellowcab.jpg" alt="img1" width={150} height={100} />
          </div>
          <div className="md:w-1/2 flex flex-col mt-5  md:mt-20  justify-start items-start">
            <div className="max-w-lg w-full ">
              <h1 className="text-2xl text-center md:text-start md:text-4xl font-semibold tracking-tight ">
                Welcome to CabGo & TRAVELS
              </h1>
              <p className="mt-4 font-normal text-sm md:text-base">At CabGo, we believe travel isn’t just about getting from one place to another — it’s about comfort, reliability, and peace of mind. With a strong commitment to safety, punctuality, and exceptional service, we make every ride smooth, convenient, and stress-free, turning everyday journeys into pleasant experiences.</p>
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
                    className="flex items-center gap-3 bg-white border border-gray-200 p-4 rounded-xl shadow hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <div className="text-black">{item.icon}</div>
                    <p className="text-lg font-medium">{item.label}</p>
                  </div>
                ))}
              </div>

             <Link href="/aboutus" className="mx-auto items-center md:mx-0  rounded-r-full rounded-l-full px-4 py-2 mt-7 md:mt-4 bg-blue-900 hover:bg-red-900 duration-500 transition" >
               <p className="flex gap-2 text-sm md:text-base text-white font-semibold items-center">View More<span className="bg-white text-black px-1 py-1 rounded-full"><GoArrowRight className="h-5 w-5 md:h-6 md:w-6"/></span></p>
             </Link>

          </div>
          </div>
       </section>
  )
}

export default SSlide
