import React from "react";
import { Link } from "react-router-dom";

const AboutNavigation = () => {
  return (
    <div>
      <div className="flex text-[#011C38] text-[30px] gap-12 bg-[#D9D9D9] justify-center items-center mx-auto rounded-b-xl">
        <Link to="/mission-and-vision" className="p-5">
          <p className="font-semibold hover:text-[#03365C] transition">
            Mission and vision
          </p>
        </Link>
        <div className="h-[54px] border-l-2 border-[#011C38]"></div>
        <Link to="/our-strength" className="p-5">
          <p className="font-semibold hover:text-[#03365C] transition">
            Our strength
          </p>
        </Link>
        <div className="h-[54px] border-l-2 border-[#011C38]"></div>
        <Link to="/awards" className="p-5">
          <p className="font-semibold hover:text-[#03365C] transition">
            Awards
          </p>
        </Link>
        <div className="h-[54px] border-l-2 border-[#011C38]"></div>
        <Link to="/csr-initiatives" className="p-5">
          <p className="font-semibold hover:text-[#03365C] transition">
            CSR initiatives
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AboutNavigation;
