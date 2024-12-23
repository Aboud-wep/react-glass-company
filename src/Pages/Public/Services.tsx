import React from 'react'
import Highlight from "../../assets/Images/Highlight.png";
const Services = () => {
  return (
    <div>
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[623px] xlg:h-[700px] bg-center bg-cover bg-no-repeat bg-[url('src/assets/Images/OIPServices.png')]">
      <img
        src={Highlight}
        alt="Overlay"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-55"
      />
    </div>
    </div>
  )
}

export default Services