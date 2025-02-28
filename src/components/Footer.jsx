import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4 md:px-8 lg:px-28 flex flex-col md:flex-row justify-between items-center text-center md:text-left place-items-center" >
      {/* Left Section - Copyright */}
      <div className="mb-4 md:mb-0">
        <p className="text-sm">&copy; 2025 Abhay Singh. All Rights Reserved.</p>
      </div>

      {/* Center Section - Social Media Links */}
      <div className="flex space-x-4 text-lg">
        <a href="https://www.facebook.com/profile.php?id=100026425036282" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/rana_abhay_singh47/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/abhay-singh-a62b00253/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaLinkedin />
        </a>
        <a href="mailto:abhaysingh20022003@gmail.com" className="hover:text-red-400">
          <FaEnvelope />
        </a>
      </div>

      {/* Right Section - Quick Links */}
      <div className="mt-4 md:mt-0">
        <p className="text-sm">
          <a href="#projects" className="hover:underline">Projects</a> | 
          <a href="#contact" className="hover:underline"> Contact</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
