import TariffDetails from '@/Components/Findride/TariffDetails'
import TravelServices from '@/Components/HomePage/TravelServices'
import VehicleCard from '@/Components/HomePage/VehicleCard'
import React from 'react'

const page = () => {
  return (
    <section className="" >
      
       <VehicleCard/>
       <TariffDetails/>
       <TravelServices/>
    </section>
  )
}

export default page
