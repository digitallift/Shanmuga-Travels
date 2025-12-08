"use client";
import { useState } from "react";
import Link from "next/link";
import { FaCar } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between  px-4 py-3  text-black ">
      {/* LOGO */}
      <div>
        <FaCar size={50}/>
      </div>

      {/* HAMBURGER BUTTON (visible only on mobile) */}
      <button
        className="block lg:hidden text-3xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* MENU */}
      <div
        className={`flex-col lg:flex lg:flex-row gap-5 p-4 
                    absolute lg:static left-0 right-0 top-20 
                    bg-white shadow-md lg:shadow-none 
                    ${open ? "flex" : "hidden"} lg:flex`}
      >
        <Link href="/" className="bg-black text-white rounded-sm px-3 py-1">
          Home
        </Link>
        <Link href="#" className="px-3 py-1">
          Tour Package
        </Link>
        <Link href="#" className="px-3 py-1">
          Our Tariff
        </Link>
        <Link href="#" className="px-3 py-1">
          About Us
        </Link>
        <Link href="#" className="px-3 py-1">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
