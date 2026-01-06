"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function RootLayout({ children }) {
 
  const openWhatsApp = (message) => {
  const text = encodeURIComponent(message);
  window.open(`https://wa.me/919500952130?text=${text}`, "_blank");
  };
  return (
        <>
          {children}
            <button onClick={() => openWhatsApp("Hello, I need more details")} className="z-50 fixed bottom-10 right-10 rounded-full animate-bounce bg-green-900 h-15 w-15">
              <FaWhatsapp className="mx-auto justify-center items-center text-white h-7 w-7"/>
            </button> 
        </>
  );
}
