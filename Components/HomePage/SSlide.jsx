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
import {motion, spring} from "framer-motion"

const SSlide = () => {

  const openWhatsApp = (message) => {
  const text = encodeURIComponent(message);
  window.open(`https://wa.me/919500952130?text=${text}`, "_blank");
  };

  return (
       <section className="w-full h-full">
         <div className="relative  flex flex-col md:px-0 px-5 md:flex-row justify-center items-center md:items-start">
          <motion.div initial={{x:-50,opacity:0}}
             whileInView={{x:0,opacity:1}}
             
             transition={{
              duration:0.5,
              type:spring,
              damping:30,
              stiffness:100
             }}
          className="md:w-1/2 flex justify-center  ">
          <Image className="md:h-125 object-center h-80 w-65 rounded-2xl md:w-100" src="/images/locations/manwtcab.jpg" alt="img1" width={150} height={100} />
          </motion.div>
          <div className="md:w-1/2 flex flex-col mt-5  md:mt-5  justify-start items-start">
            <div className="max-w-xl w-full ">
              <motion.h1 initial={{x:60,opacity:0}}
                         whileInView={{x:0,opacity:1}}
                         transition={{
                           type:spring,
                           stiffness:100,
                           damping:30,
                           duration:1,
                           delay:0.1
                         }}
                className="font-bold mb-3 text-2xl text-center md:text-start md:text-4xl bg-gradient-to-r from-primary via-teal to-gold text-transparent bg-clip-text">
                SHANMUGA TRAVELS</motion.h1>
              <motion.h1
               initial={{y:50,opacity:0}}
               whileInView={{y:0,opacity:1}}
               transition={{
                  type:spring,
                  stiffness:100,
                  damping:30,
                  duration:1,
                  delay:0.1

               }}
               className="text-lg text-center md:text-start md:text-2xl font-semibold tracking-tight ">
                Cab & Travel Services in Tiruchendur, Thoothukudi & Tirunelveli
              </motion.h1>
              <motion.p 
               initial={{y:50,opacity:0}}
               whileInView={{y:0,opacity:1}}
               transition={{
                  type:spring,
                  stiffness:100,
                  damping:30,
                  duration:1,
                  delay:0.1

               }}
              className="mt-4 font-normal text-gray-700 text-sm md:text-base">Welcome to Shanmuga Travels, your trusted local cab and travel service provider with over 10+ years of experience. We offer comfortable and reliable pickup & drop services, pilgrimage trips, sightseeing tours, and local travel across <span className='text-primary  text-base md:text-xl font-semibold'> Tiruchendur, Thoothukudi, and Tirunelveli.</span></motion.p>
              
            </div>
                          {/* FEATURE GRID */}
              <div className=" md:mt-7 hidden md:-ml-60 md:z-30 md:grid sm:grid-cols-2 md:grid-cols-3 md:gap-4">
                {[
                  { icon: <FaCar size={26} />, label: "Address Pickup" },
                  { icon: <LuPlane size={26} />, label: "Airport Transfer" },
                  { icon: <GiPathDistance size={26} />, label: "Long Distance" },
                  { icon: <MdHotelClass size={26} />, label: "Taxi Tours" },
                ].map((item, index) => (
                  <motion.div
                     initial={{x:50,opacity:0}}
                     whileInView={{x:0,opacity:1}}
                     transition={{
                     type:spring,
                     stiffness:100,
                     damping:30,
                     duration:1 + index * 0.5,
                     delay:0.1

                    }}

                    key={index}
                    className="flex items-center gap-3 bg-white border border-gray-200 p-4 rounded-xl shadow-xs "
                   >
                    <div className="text-black">{item.icon}</div>
                    <p className="text-lg font-medium">{item.label}</p>
                  </motion.div>
                ))}
              </div>
           
            <div className="md:flex flex-col md:flex-row hidden  mt-3 items-center justify-center gap-5 md:gap-10">
             <motion.button 
               initial={{scale:1}}
               whileHover={{scale:1.1}}
               whileTap={{scale:0.8}}
               transition={{
                type:spring,
                damping:30,
                stiffness:300
              }}
              onClick={() => openWhatsApp("Hello, I need more details")}
               className="inline-flex items-center gap-3 text-white bg-green-900 px-3.5 py-2.5 rounded-full font-semibold ">
               <FaWhatsapp className="h-6 w-6 transition-transform duration-300  group-hover:rotate-6" />
                 WhatsApp
               </motion.button>

              <Link  href="/aboutus"className="rounded-r-full rounded-l-full px-4 py-2 bg-gradient-to-r from-primary via-teal to-gold hover:from-gold hover:via-teal hover:to-primary duration-500 transition" >
                <p className="flex gap-2 text-sm md:text-base text-white font-semibold items-center">View More<span className="bg-white text-black px-1 py-1 rounded-full"><GoArrowRight className="h-5 w-5 md:h-6 md:w-6"/></span></p>
              </Link>
            </div> 
          </div>
          </div>
       </section>
  )
}

export default SSlide
