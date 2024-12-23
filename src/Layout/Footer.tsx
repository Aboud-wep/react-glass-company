import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#011C38] text-white">
      <div className="  space-y-6">
        {/* Left Section: Contact Link */}
        <div className="flex flex-col justify-center items-center text-center space-y-4">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mt-10">CONTACT WITH US</h1>
          <Link
            to="/contact"
            className="text-2xl font-medium border-[#2273A0] transition border-2 p-2 mt-2 rounded-lg"
          >
            CONTACT
          </Link>
        </div>

        {/* Middle Section: Social Links */}
        <div className="text-center">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">LEARN MORE ABOUT CYPRUS FB PROJECT</h1>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-blue-400 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-blue-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Address Section */}
        <div className="mx-4  ">
          <p className="text-2xl font-bold">FB PROJECT</p>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-white text-lg" />
            <p className="text-2xl">CYPRUS</p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-white flex  sm:flex-row items-center justify-between py-2 ">
          <div className="mx-4 flex items-center justify-center space-x-2">
            <FaMapMarkerAlt className="text-white text-lg" />
            <p className="text-2xl">Cyprus</p>
          </div>
          <p className="text-2xl mt-2 sm:mt-0 mx-4">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
