import React from 'react'
import SSlide from '@/Components/HomePage/SSlide';
import ImageSlide from '@/Components/HomePage/ImageSlide';
import TripCard from '@/Components/HomePage/TripCard';
import VehicleCard from '@/Components/HomePage/VehicleCard';


export default function Home() {
  return (
    <div>
      <ImageSlide/>
      <SSlide/>
      <TripCard/>
      <VehicleCard/>
    </div>
  );
}
