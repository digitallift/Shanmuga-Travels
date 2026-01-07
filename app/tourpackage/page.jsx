import TouristSlide from '@/Components/HomePage/TouristSlide'
import TripCard from '@/Components/HomePage/TripCard'
import WhyChooseUs from '@/Components/HomePage/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
  <section>
    <TripCard/>
    <TouristSlide/>
    <WhyChooseUs/>
  </section>
  )
}

export default page
