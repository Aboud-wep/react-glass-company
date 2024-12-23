import React from "react";
import AboutNavigation from "../../../Component/AboutNavigation";
import Highlight from "../../../assets/Images/Highlight.png";
import Two from "../../../assets/Images/About/Mission/2.png";
import Three from "../../../assets/Images/About/Mission/3.png";
const MissionAndVision = () => {
  return (
    <div>
      <div>
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[623px] xlg:h-[700px] bg-center bg-cover bg-no-repeat bg-[url('src/assets/Images/About/Mission/1.png')]">
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
              Home page I About I Mission and vision
            </p>
          </div>
        </div>
      </div>
      <AboutNavigation />
      <div className="text-center my-20">
        <div className="flex justify-center">
          <img
            src={Two}
            alt="SCHEVENINGEN 2019"
            className="   max-w-[1100px]  h-60 lg:h-auto object-cover lg:object-contain rounded-lg shadow-lg"
          />
        </div>
        <div className="my-12 px-10 lg:px-40 space-y-8">
          <h1 className="text-lg lg:text-[30px] font-bold leading-9">
            FB PROJECT Ltd has been chosen by investors at home and in business
            for over 25 years
          </h1>

          <p className="text-sm lg:text-[20px]">
            Many years of experience in production, company development,
            responding to customer needs and continuous development have made us
            to be recognized as the European leader in the production of
            joinery. Moreover, we are one of the largest producers of PVC
            windows and the largest employer in Poland.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={Three}
            alt="SCHEVENINGEN 2019"
            className="   max-w-[1100px] h-60 lg:h-auto object-cover lg:object-contain rounded-lg shadow-lg"
          />
        </div>
        <div className="my-12 px-10 lg:px-40 space-y-8">
          <h1 className="text-lg lg:text-[30px] font-bold leading-9">
            The most modern machinery park
          </h1>
          <p className="text-sm lg:text-[20px]">
            The essence of the production of joinery offered by FB PROJECT Ltd
            is a team of qualified employees and technologically advanced
            equipment of the machine park. Thanks to this combination, we
            produce high-quality products with a long-term warranty.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;
