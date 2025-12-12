"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/fplace.jpg",
  "/images/splace.jpg",
  "/images/tplace.jpg",
];

const ImageSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden rounded-2xl">

      {/* IMAGES */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out 
          ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all
              ${currentIndex === i ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSlide;
