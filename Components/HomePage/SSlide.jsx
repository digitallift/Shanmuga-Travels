import Image from "next/image";
import { LuPlane } from "react-icons/lu";
import { FaCar } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { MdHotelClass } from "react-icons/md";

const SSlide = () => {
  return (
     <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center">
    
            {/* LEFT IMAGE WITH STYLING */}
            <div className="relative w-full md:w-1/2">
             
              <Image
                src="/images/yellowcab.jpg"
                alt="Cab Image"
                width={400}
                height={500}
                className="rounded-3xl shadow-xl object-cover"/>
            </div>
    
            {/* RIGHT CONTENT */}
            <div className="flex flex-col text-center md:text-left w-full md:w-1/2">
    
              {/* HEADING */}
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                Book a{" "}
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">
                  Cab
                </span>{" "}
                Anytime,<br />
                Anywhere.
              </h1>
    
              {/* DESCRIPTION */}
              <p className="text-gray-700 text-lg max-w-xl mb-8">
                Fast, reliable and affordable rides at your fingertips.  
                Enjoy seamless booking, lightning-fast pickup and a smooth travel experience.
              </p>
    
              {/* FEATURE GRID */}
              <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
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
