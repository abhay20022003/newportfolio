import React, { useState, useEffect } from "react";


import { FaBars, FaTimes, FaFacebook, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="bg-gray-900 text-white fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">

        {/* Logo with Golden Text */}
        <a href="#home" className="text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 hover:opacity-80 transition">
          MyPortfolio
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-15 items-center justify-end w-full py-3">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About Me</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#testimonials" className="nav-link">Testimonials</a></li>
          <li className="relative dropdown">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setIsDropdownOpen(!isDropdownOpen);
                window.location.href = "#contact";
              }}
              className="nav-link flex items-center space-x-2 cursor-pointer"
            >
              <span>Contact</span> ▼
            </a>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg text-white py-3 space-y-6">
                <a href="https://facebook.com" className="dropdown-item flex items-center justify-center">
                  <FaFacebook />
                </a>
                <a href="https://instagram.com" className="dropdown-item flex items-center justify-center">
                  <FaInstagram />
                </a>
                <a href="https://github.com" className="dropdown-item flex items-center justify-center">
                  <FaGithub />
                </a>
                <a href="mailto:example@email.com" className="dropdown-item flex items-center justify-center">
                  <FaEnvelope />
                </a>
              </div>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 space-y-4 py-4 text-center">
          <li><a href="#home" className="mobile-nav-link">Home</a></li>
          <li><a href="#about" className="mobile-nav-link">About Me</a></li>
          <li><a href="#projects" className="mobile-nav-link">Projects</a></li>
          <li><a href="#testimonials" className="mobile-nav-link">Testimonials</a></li>
          <li className="relative dropdown">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setIsDropdownOpen(!isDropdownOpen);
                window.location.href = "#contact";
              }}
              className="mobile-nav-link flex flex-col items-center space-y-2"
            >
              <span>Contact</span> ▼
            </a>
            {isDropdownOpen && (
              <div className="mt-2 w-full bg-gray-700 text-white py-4 flex flex-col items-center space-y-3">
                <a href="https://facebook.com" className="mobile-dropdown-item flex items-center justify-center">
                  <FaFacebook />
                </a>
                <a href="https://instagram.com" className="mobile-dropdown-item flex items-center justify-center">
                  <FaInstagram />
                </a>
                <a href="https://github.com" className="mobile-dropdown-item flex items-center justify-center">
                  <FaGithub />
                </a>
                <a href="mailto:example@email.com" className="mobile-dropdown-item flex items-center justify-center">
                  <FaEnvelope />
                </a>
              </div>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
