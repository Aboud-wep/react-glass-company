import React from "react";
import Highlight from "../../../assets/Images/Highlight.png";
import Two from "../../../assets/Images/About/2.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[623px] xlg:h-[700px] bg-center bg-cover bg-no-repeat bg-[url('src/assets/Images/About/1.png')]">
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Highlight Image */}
        <img
          src={Highlight}
          alt="Overlay"
          className="absolute top-0 left-0 w-full h-full object-cover mix-blend-multiply"
        />

        {/* Text Content */}
        <div className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-[100px] font-bold">
            About
          </h1>
          <p className="text-[21px]">Home page I About</p>
        </div>
      </div>

      <div className="flex text-[#011C38] font-medium gap-40 p-10 justify-center items-center bg-center bg-cover bg-no-repeat bg-[url('src/assets/Images/About/3.png')]">
        <div className="text-[50px]">
          <Link to={"/mission-and-vision"} className="block mb-12">
            <p>Mission and vision</p>
          </Link>
          <Link to={"/our-strength"} className="block mb-12">
            <p>Our strength</p>
          </Link>
          <Link to={"/awards"} className="block mb-12">
            <p>Awards</p>
          </Link>
          <Link to={"/csr-initiatives"} className="block">
            <p>CSR initiatives</p>
          </Link>
        </div>

        <div>
          <img src={Two} alt="About" />
        </div>
      </div>
    </div>
  );
};

export default About;
