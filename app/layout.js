import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { FaWhatsapp } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shanmuga Travels",
  description: "Cab Service in Tiruchendur, Thoothukudi & Tirunelveli",
};

export default function RootLayout({ children }) {

  //  const openWhatsApp = (message) => {
  //     const text = encodeURIComponent(message);
  //     window.open(`https://wa.me/919566762130?text=${text}`, "_blank");
  //   };
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
         <Navbar/>
         {children}
         {/* onClick={() => openWhatsApp("Hello, I need more details")} */}
         <button  className="z-50 fixed bottom-10 right-10 rounded-full animate-bounce bg-green-900 h-15 w-15">
             <FaWhatsapp className="mx-auto justify-center items-center text-white h-7 w-7"/>
         </button> 
         <Footer/>
      </body>
    </html>
  );
}
