import React from 'react'
import SSlide from '@/Components/HomePage/SSlide';
import ImageSlide from '@/Components/HomePage/ImageSlide';
import TripCard from '@/Components/HomePage/TripCard';
import VehicleCard from '@/Components/HomePage/VehicleCard';
import TouristSlide from '@/Components/HomePage/TouristSlide';
import WhyChooseUs from '@/Components/HomePage/WhyChooseUs';
import TravelServices from '@/Components/HomePage/TravelServices';


export default function Home() {
  return (
    <div>
      <ImageSlide/>
      <SSlide/>
      <TripCard/>
      {/* <VehicleCard/> */}
      <TravelServices/>
      <WhyChooseUs/>
    </div>
  );
}
