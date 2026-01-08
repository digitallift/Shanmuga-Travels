"use client";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
export default function FormSubmit() {
  return (
    <div className=" bg-white flex items-center justify-center mt-10 ">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT SECTION */}
        <div className="flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r text-transparent bg-clip-text from-primary via-teal to-gold mb-10 text-start">
            Contact Us
          </h2>

          <div className="space-y-8">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-5 bg-gradient-to-r from-primary via-teal to-gold text-white group-hover:scale-110 transition">
                <FaMapLocationDot />
              </div>
              <div>
                <p className="text-sm text-black mb-1">Our Location</p>
                <p className="text-gray-800 font-medium">
                  Tiruchendur | Thoothukudi | Tirunelveli
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-5 bg-gradient-to-r from-primary via-teal to-gold text-white group-hover:scale-110 transition">
                <IoCallSharp />
              </div>
              <div>
                <p className="text-sm text-black mb-1">Phone Number</p>
                <Link href="tel:919566762130" className="text-gray-800 font-medium">+91 95667 62130</Link>
              </div>
            </div>

            {/* Email */}
            <div  className="flex items-start  gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-5 bg-gradient-to-r from-primary via-teal to-gold text-white group-hover:scale-110 transition">
                <MdEmail />
              </div>
              <div>
                <p className="text-sm text-black mb-1">Send Email</p>
                <Link href="mailto:shanmugatravels@gmail.com" className="text-gray-800 font-medium">
                  shanmugatravels@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className=" rounded-2xl p-10 shadow-lg  hover:shadow-2xl hover:scale-102 transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Send Your Message!
          </h3>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <input
              type="text"
              placeholder="Enter Name"
              className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <textarea
              rows="5"
              placeholder="Enter Message..."
              className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />

            <button
              href="/aboutus"
              className="inline-flex items-center gap-3 rounded-full px-5 py-3 
              bg-gradient-to-r from-primary via-teal to-gold
              hover:from-gold hover:via-teal-500 hover:to-primary
              transition duration-500"
            >
              <span className="text-white uppercase font-semibold">Submit</span>
              <span className="bg-white text-black p-2 rounded-full">
                <GoArrowRight className="h-5 w-5" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
