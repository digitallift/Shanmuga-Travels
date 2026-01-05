import Image from 'next/image'
import React from 'react'
import { LuPlane } from "react-icons/lu";
import { FaCar } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { MdHotelClass } from "react-icons/md";

const SSlide = () => {
  return (
       <section className="w-full h-dvh">
         <div className="relative flex justify-center items-start">
          <div className="md:w-1/2 flex justify-center  ">
            <Image className="h-125 rounded-2xl w-100" src="/images/yellowcab.jpg" alt="img1" width={200} height={150} />
          </div>
          <div className="md:w-1/2 flex flex-col mt-20  justify-start items-start">
            <div className="max-w-lg w-full ">
              <h1 className="text-3xl font-semibold tracking-tight ">
                Welcome to CabGo & TRAVELS
              </h1>
              <p className="mt-4 text-base">At CabGo, we believe travel isn’t just about getting from one place to another — it’s about comfort, reliability, and peace of mind. With a strong commitment to safety, punctuality, and exceptional service, we make every ride smooth, convenient, and stress-free, turning everyday journeys into pleasant experiences.</p>
            </div>
                          {/* FEATURE GRID */}
              <div className=" mt-7 -ml-60 z-30 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
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

          </div>
          </div>
       </section>
  )
}

export default SSlide
