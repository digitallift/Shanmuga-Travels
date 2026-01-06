"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "Find Ride", href: "/findride" },
    { name: "Tour Package", href: "/tourpackage" },
    { name: "About Us", href: "/aboutus" },
    { name: "Contact Us", href: "/contactus" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">

        {/* TOP BAR */}
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <Link href="/" className="flex items-center text-black font-extrabold text-2xl">
           <Image src={"/images/locations/Logo.png"} alt="" width={110} height={50} />
          </Link>

          {/* HAMBURGER BUTTON */}
          <button onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl text-black">
            {open ? <FaTimes /> : <FaBars />}
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {menuLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1 rounded-lg  font-semibold transition 
                    ${isActive ? "bg-gradient-to-r from-primary via-teal to-gold text-white" : "text-black hover:text-teal hover:bg-gray-100"}
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
{/* 
            <Link
              href="/book"
              className="px-3 py-1 bg-navy text-white rounded-lg font-semibold hover:bg-primary transition"
            >
              Book Now
            </Link> */}
          </div>
        </div>

        {/* MOBILE MENU (separate layer) */}
        {open && (
          <div className="lg:hidden w-full bg-white shadow-lg rounded-b-xl py-4 space-y-2 animate-slideDown">
            {menuLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-1 rounded-lg text-base font-medium transition
                    ${isActive ? "bg-gradient-to-r from-primary via-teal to-gold text-white" : "text-black hover:text-teal hover:bg-gray-200"}
                  `}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="block mt-2 mx-4 px-5 py-3 bg-black text-white rounded-xl text-center font-semibold hover:bg-gray-900 transition"
            >
              Book Now
            </Link> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
