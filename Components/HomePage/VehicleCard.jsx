import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { GoArrowRight } from "react-icons/go";

const vehicles = [
  {
    id: 1,
    name: "Tempo Traveller",
    price: "1 day 6500",
    desc: "120 km free, extra 1 km ₹25",
    longdesc: "Spacious Tempo Traveller ideal for family trips, corporate travel, and group tours with comfortable seating.",
    img: "/images/Tempovan.png"
  },
  {
    id: 2,
    name: "Ertiga",
    price: "1 day 4500",
    desc: "120 km free, extra 1 km ₹18",
    longdesc: "Perfect family MPV offering comfort, good mileage, and ample luggage space for long journeys.",
    img: "/images/ertiga.png"
  },
  {
    id: 3,
    name: "Innova Crysta",
    price: "1 day 5500",
    desc: "120 km free, extra 1 km ₹20",
    longdesc: "Premium SUV known for luxury interiors, smooth ride quality, and long-distance comfort.",
    img: "/images/innova.png"
  },
  {
    id: 4,
    name: "Swift Dzire",
    price: "1 day 3000",
    desc: "120 km free, extra 1 km ₹18",
    longdesc: "Compact sedan suitable for city travel and short trips with excellent fuel efficiency.",
    img: "/images/dzire.png"
  },
  {
    id: 5,
    name: "Etios",
    price: "1 day 3500",
    desc: "120 km free, extra 1 km ₹18",
    longdesc: "Reliable and spacious sedan ideal for both city and highway travel.",
    img: "/images/etios.jpg"
  },
  
  {
    id: 6,
    name: "Swift",
    price: "1 day 2800",
    desc: "120 km free, extra 1 km ₹16",
    longdesc: "Hatchback best suited for city rides, solo travel, and budget-friendly trips.",
    img: "/images/swift.png"
  },
  {
    id: 7,
    name: "Swift",
    price: "1 day 2800",
    desc: "120 km free, extra 1 km ₹16",
    longdesc: "Economical and easy-to-drive hatchback with great mileage and comfort.",
    img: "/images/swift.png"
  }
];



const VehicleCard = () => {
  return (
 <div className="py-10 px-2 max-w-6xl mx-auto">
      <h1 className="text-4xl text-center mb-10 font-semibold">
         Find Ride
      </h1>

      <div className="grid gap-5 md:grid-cols-3">
        {vehicles.map((item) => (
          <div
            key={item.id}
            className="border hover:scale-102 transition-all duration-500  rounded-2xl shadow-md overflow-hidden bg-white"
          >
            {/* Image */}
            <div className="relative w-full hover:shadow-lg hover:scale-102 transition-all duration-500  h-55">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-center"
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-2">
              <h2 className="text-2xl font-semibold">{item.name}</h2>
              <p className="text-lg font-semibold text-blue-700">
                {item.price}
              </p>
              <p className="text-sm font-medium text-gray-700">{item.desc}</p>
              <p className="text-sm font-medium text-gray-600">{item.longdesc}</p>

              <Link
                href="/aboutus"
                className="inline-flex font-semibold items-center gap-2 mt-4 bg-gradient-to-r from-primary via-teal to-gold hover:from-gold hover:via-teal hover:to-primary text-white px-5 py-2 rounded-full transition duration-500"
              >
                View More
                <span className="bg-white text-black p-1 rounded-full">
                  <GoArrowRight className="h-5 w-5" />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VehicleCard
