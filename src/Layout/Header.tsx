import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHomePage = location.pathname === "/home";
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Home", path: "/home" },
    { name: "News", path: "/news" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "For Investors", path: "/for-investors" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`w-full z-50 ${
        !isHomePage
          ? "bg-[url('src/assets/Images/HeaderBG.png')] bg-cover"
          : ""
      }`}
    >
      <div className="border-t-4 border-[#011C38] border-b-4 border-opacity-60">
        <div className="container mx-auto md:text-[21px] lg:text-[24px] xl:text-[28px] font-bold flex items-center justify-center py-6 md:py-[28px] lg:py-[35px]   ">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 lg:space-x-14">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-[#011C38] transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Icon */}
          <button
            className="absolute right-4 md:hidden text-2xl "
            onClick={toggleMenu}
          >
            {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "h-auto opacity-100" : "h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4 border-[#011C38] border-b-4 border-opacity-60">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-[#011C38] font-bold transition"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
