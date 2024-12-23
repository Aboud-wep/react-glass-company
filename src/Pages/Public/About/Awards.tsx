import React from 'react'
import AboutNavigation from '../../../Component/AboutNavigation'
import Highlight from "../../../assets/Images/Highlight.png"
const Awards = () => {
  return (
    <div>
      <div>
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[623px] xlg:h-[700px] bg-center bg-cover bg-no-repeat bg-[url('src/assets/Images/About/Awards/1.png')]">
          <img
            src={Highlight}
            alt="Overlay"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="  text-4xl sm:text-5xl md:text-6xl font-bold">
              About
            </h1>
            <p className="text-[21px]">
              Home page I About I Awards
            </p>
          </div>
        </div>
      </div>
      <AboutNavigation/>
    </div>
  )
}

export default Awards