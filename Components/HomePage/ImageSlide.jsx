"use client";
import Image from "next/image";
import { useEffect, useState } from "react";


const images = [
  "/images/locations/rameswaram.jpg",
  "/images/locations/tem1.jpg",
  "/images/locations/pambanbridge.jpg",
  "/images/locations/Vivekananda.jpg"
  
];


const ImageSlide = () => {

  const [currentindex,SetIndex] = useState(0);

  useEffect(()=>{
     const intervel = setInterval(() => {
        SetIndex((prev)=>
        prev === images.length -1 ? 0 : prev+1 );
     }, 3000);
     
     return () => clearInterval(intervel);

  },[]);

  return (
        <section className="h-dvh w-full">
         
             {/* IMAGES */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out 
          ${index === currentindex ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-bottom-right"
            priority={index === 0}
          />
        </div>
      ))}

       {/* DOTS */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-5 h-0.5  transition-all
              ${currentindex === i ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>


         
        </section>
  )
}

export default ImageSlide
