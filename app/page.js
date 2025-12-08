import Image from "next/image";
import { LuPlane } from "react-icons/lu";
import { FaCar } from "react-icons/fa";

export default function Home() {
  return (
     <div className="flex flex-col md:flex-row items-start justify-center gap-6 ">
      <div>
      <FaCar size={100}/>
      </div>
      <div className="flex  flex-col">
        <div className="text-5xl  m-6 ">
          <p>Book a Cab Anytime, </p>
          <p>Anywhere.</p>
        </div>
        <div className="text-lg m-6  max-w-200 tracking-wide">
          <p>
            Experience reliable rides right at your fingertips, anytime you
            need.
          </p>
          <p>
            Enjoy seamless booking with lightning-fast pickup times wherever you
            are.
          </p>
          <p>
            Ride comfortably with affordable prices designed for every journey.
          </p>
        </div>
        <div className="hidden sm:hidden md:hidden lg:absolute lg:top-100 lg:left-130 lg:grid lg:grid-cols-3 mt-6 gap-6 lg:gap-10">
          <div className="flex justify-center items-center  bg-[#F5DCDC] px-2 py-4 gap-4 rounded-xl shadow-sm">
            <FaCar size={30}/>
            <span className="text-xl font-medium w-1/2 ">Address Pickup</span>
          </div>
          <div className="flex items-center justify-center  bg-[#F5DCDC] px-6 py-4 gap-4 rounded-xl shadow-sm">
            <LuPlane size={30}/>
            <span className="text-xl font-medium w-1/2">Airport Transfer</span>
          </div>
          <div className="flex items-center justify-center bg-[#F5DCDC] px-6 py-4 space-x-10 rounded-xl shadow-lg">
            <LuPlane size={30}/>
            <span className="text-xl font-medium w-1/2">Long Distance</span>
          </div>
          <div className="flex items-center  justify-center bg-[#F5DCDC] px-6 py-4 gap-4 rounded-xl shadow-sm">
            <LuPlane size={30}/>
            <span className="text-xl font-medium w-1/2">Taxi Tours </span>
          </div>
        </div>
      </div>
    </div>
  );
}
