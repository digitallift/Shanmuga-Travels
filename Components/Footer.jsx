"use client";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* LOGO + DESCRIPTION */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/images/locations/Logo.png" alt="logo" width={120} height={50} />
           
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Your trusted partner for safe, fast, and comfortable rides.  
            Travel anywhere, anytime with ease.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            <li><Link href="/findride" className="hover:text-primary transition">Find Ride</Link></li>
            <li><Link href="/tourpackage" className="hover:text-primary transition">Tour Package</Link></li>
            <li><Link href="/aboutus" className="hover:text-primary transition">About Us</Link></li>
            <li><Link href="/contactus" className="hover:text-primary transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Support</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#" className="hover:text-primary transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition">Refund Policy</a></li>
            <li><a href="#" className="hover:text-primary transition">Help Center</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <FaPhoneAlt size={16} className="text-primary" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope size={16} className="text-primary" />
              support@shanmugatravels.com
            </li>
          </ul>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">
            <a className="p-2 bg-gradient-to-r from-primary via-teal to-gold text-white rounded-full hover:opacity-90 transition">
              <FaFacebookF size={16} />
            </a>
            <a className="p-2 bg-gradient-to-r from-primary via-teal to-gold text-white rounded-full hover:opacity-90 transition">
              <FaInstagram size={16} />
            </a>
            <a className="p-2 bg-gradient-to-r from-primary via-teal to-gold text-white rounded-full hover:opacity-90 transition">
              <FaTwitter size={16} />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Shanmuga Travels. All rights reserved.
      </div>
    </footer>
  );
}
