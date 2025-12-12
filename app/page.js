import React from 'react'
import SSlide from '@/Components/HomePage/SSlide';
import ImageSlide from '@/Components/HomePage/ImageSlide';
import TripCard from '@/Components/HomePage/TripCard';


export default function Home() {
  return (
    <div>
      <ImageSlide/>
      <SSlide/>
      <TripCard/>
    </div>
  );
}
