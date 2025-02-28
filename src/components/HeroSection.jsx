import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profilePic from "../assets/Abhay.jpeg"; // Replace with your image path

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white min-h-[90vh] flex items-center py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-30 blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-center">
        
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            I'm <span className="text-blue-400">Abhay Singh</span>
          </h1>

          {/* Animated Text */}
          <h2 className="text-2xl md:text-4xl font-semibold mt-4">
            <TypeAnimation
              sequence={[
                "ReactJs Developer", 2000,
                "React Native Developer", 2000,
                "Frontend Developer", 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-yellow-400"
            />
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Passionate about designing and developing responsive, user-friendly web applications that deliver seamless experiences. 
            Proficient in <span className="text-blue-300 font-semibold">React, Tailwind CSS,</span> and modern JavaScript frameworks, 
            with a keen eye for clean, efficient code and intuitive UI/UX design. 
          </p>

          {/* Buttons */}
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <motion.a
              href="/Abhay_Singh_Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-all"
            >
              Download Resume
            </motion.a>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0 relative">
          {/* Animated Background Circle */}
          <motion.div
            className="absolute w-56 h-56 md:w-64 md:h-64 bg-gray-700 rounded-full"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>

          {/* Animated Profile Image */}
          <motion.img
            src={profilePic}
            alt="Abhay Singh"
            className="relative rounded-full w-56 h-56 md:w-64 md:h-64 object-cover border-4 border-blue-500 shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            animate={{ y: [0, -10, 0] }} // Floating effect
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
