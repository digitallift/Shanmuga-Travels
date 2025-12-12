import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* LOGO + DESCRIPTION */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/images/cab.png" alt="logo" width={70} height={30} />
            <h2 className="text-2xl font-extrabold text-black">CabGo</h2>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Your trusted partner for safe, fast and affordable rides.  
            Book anywhere, anytime with ease.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            <li><Link href="/findride" className="hover:text-black">Find Ride</Link></li>
            <li><Link href="/tourpackage" className="hover:text-black">Tour Package</Link></li>
            <li><Link href="/aboutus" className="hover:text-black">About Us</Link></li>
            <li><Link href="/contactus" className="hover:text-black">Contact Us</Link></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Support</h3>
          <ul className="space-y-2 text-gray-700">
            <li> <a href="#" className="hover:text-black">Terms & Conditions</a> </li>
            <li> <a href="#" className="hover:text-black">Privacy Policy</a> </li>
            <li> <a href="#" className="hover:text-black">Refund Policy</a> </li>
            <li> <a href="#" className="hover:text-black">Help Center</a> </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Contact</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <FaPhoneAlt size={16} className="text-black" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope size={16} className="text-black" />
              support@cabgo.com
            </li>
          </ul>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">
            <a className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
              <FaFacebookF size={16} />
            </a>
            <a className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
              <FaInstagram size={16} />
            </a>
            <a className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
              <FaTwitter size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t py-4 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} CabGo. All rights reserved.
      </div>
    </footer>
  );
}
