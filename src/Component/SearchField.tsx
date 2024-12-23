import React from "react";
import FP_Project from "../assets/Images/FP_Project.png";
import { SearchOutlined } from "@ant-design/icons";
const SearchField: React.FC = () => {
  return (
    <div className="container h-[127px] mx-auto px-4 py-6 flex justify-center items-center gap-3">
      {/* Logo Image */}
      <img src={FP_Project} alt="FP_Project" className="h-[102px]  " />

      {/* Responsive Search Input */}
      <div className="w-full max-w-xs relative  sm:max-w-md md:max-w-lg lg:max-w-2xl ">
      <input
        type="text"
        placeholder="Search..."
        className="w-full py-3 px-4 rounded-3xl border border-gray-300 shadow-sm  text-[10px] sm:text-[18px] md:text-[24px]"
      />
      <SearchOutlined className="text-[#011C38] absolute right-2 top-3 text-[18px] sm:right-3 sm:top-4 sm:text-[20px] md:right-4 md:top-5 md:text-[24px]"/>
      </div>
      {/* Text */}
      <h1 className="text-2xl font-bold text-[#011C38]">CYPRUS</h1>
    </div>
  );
};

export default SearchField;
