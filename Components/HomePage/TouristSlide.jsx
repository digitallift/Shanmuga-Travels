"use client";
import { TopSpots } from "@/public/constants/Pilgrimage";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";

const TouristSlide = () => {
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  const containerRef = useRef(null);
  const startX = useRef(0);

  // Inertia refs
  const velocityRef = useRef(0);
  const rafRef = useRef(null);

  const total = TopSpots.length;

  /* ---------- Responsive ---------- */
  useEffect(() => {
    const updateItems = () => {
      setItemsPerView(window.innerWidth >= 768 ? 3 : 1);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const maxIndex = Math.max(0, total - itemsPerView);

  /* ---------- Navigation ---------- */
  const nextSlide = () =>
    setCurrent((prev) => (prev >= maxIndex ? maxIndex : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev <= 0 ? 0 : prev - 1));

  /* ---------- PURE X-AXIS INERTIA SCROLL ---------- */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const friction = 0.9;   // inertia feel
    const threshold = 0.2;  // stop animation

    const animate = () => {
      if (Math.abs(velocityRef.current) < threshold) {
        velocityRef.current = 0;
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
        return;
      }

      velocityRef.current > 0 ? nextSlide() : prevSlide();
      velocityRef.current *= friction;

      rafRef.current = requestAnimationFrame(animate);
    };

    const onWheel = (e) => {
      // 🚫 BLOCK vertical scroll completely
      e.preventDefault();
      e.stopPropagation();

      // ✅ Use wheel Y as horizontal force
      velocityRef.current += e.deltaY * 0.05;

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
      cancelAnimationFrame(rafRef.current);
    };
  }, [itemsPerView]);

  /* ---------- Touch Swipe ---------- */
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
  };

  /* ---------- Render ---------- */
  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden px-4 md:px-12 py-10 select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h1 className="mb-12 text-center tracking-tighter bg-gradient-to-r from-primary via-teal to-gold text-transparent bg-clip-text font-semibold text-2xl md:text-4xl">
        Popular Tourist Places Nearby
      </h1>

      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${(current * 100) / itemsPerView}%)`,
        }}
      >
        {TopSpots.map((spot) => (
          <div
            key={spot.id}
            className="w-full md:w-1/3 flex-shrink-0 px-3"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full hover:scale-[1.02] transition">
              <div className="relative h-48 w-full">
                <Image
                  src={spot.img}
                  alt={spot.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold">{spot.title}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {spot.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-3">
                  <FaMapMarkerAlt />
                  {spot.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black transition"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black transition"
      >
        <FaChevronRight />
      </button>
    </section>
  );
};

export default TouristSlide;
