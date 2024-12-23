import React from "react";
import AboutNavigation from "../../../Component/AboutNavigation";
import Highlight from "../../../assets/Images/Highlight.png";
import Two from "../../../assets/Images/About/OurStrength/2.png";
import Three from "../../../assets/Images/About/OurStrength/3.png";
import Four from "../../../assets/Images/About/OurStrength/4.png";
import Five from "../../../assets/Images/About/OurStrength/5.png";
const OurStrength = () => {
  return (
    <div>
      <div>
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[623px] xlg:h-[700px] bg-center bg-cover bg-no-repeat bg-[url('src/assets/Images/About/OurStrength/1.png')]">
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
              Home page I About I Our Strength
            </p>
          </div>
        </div>
      </div>
      <AboutNavigation />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-[#011C38E5]  py-20 px-32 ">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-[#D9D9D954] px-10 pb-10 pt-8 text-center  rounded-3xl">
          <img
            src={Three}
            alt="Overlay"
            className="pb-4"
          />
          <h1 className="text-[30px] font-bold mb-2">Knowledge and Experience</h1>
          <p className="text-[20px] font-normal">Qualified staff of specialists and high-class machinery park make our products characterized by excellent quality and precise finish. We have been gaining experience since 1998.</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-[#D9D9D954] px-10 pb-10 pt-8 text-center  rounded-3xl">
          <img
            src={Two}
            alt="Overlay"
            className="pb-4"
          />
          <h1 className="text-[30px] font-bold mb-2">Partnership</h1>
          <p className="text-[20px] font-normal">Our Business Partners can count on support at every stage of cooperation. We offer not only the help of specialists from the sales department, but also technological and marketing support. Our clients are served in their native language.</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-[#D9D9D954] px-10 pb-10 pt-8 text-center  rounded-3xl">
          <img
            src={Four}
            alt="Overlay"
            className="pb-4"
          />
          <h1 className="text-[30px] font-bold mb-2">Complete Offer</h1>
          <p className="text-[20px] font-normal">We have created a complete offer of joinery so that the customer can buy everything he needs to complete the investment from one manufacturer. It saves you time and money. We offer PVC, aluminum, steel and wood joinery.</p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center bg-[#D9D9D954] px-10 pb-10 pt-8 text-center  rounded-3xl">
          <img
            src={Five}
            alt="Overlay"
            className="pb-4"
          />
          <h1 className="text-[30px] font-bold mb-2">Reliability</h1>
          <p className="text-[20px] font-normal">Carefully selected components and technologies that we use guarantee reliability and exceptional durability of the product.</p>
        </div>
      </div>
    </div>
  );
};

export default OurStrength;
