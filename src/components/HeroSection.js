import React from "react";
import TypewriterText from "./TypewriterText";

function HeroSection() {
  const roles = ["Creative Director", "Stop-motion Animator", "Production Designer"];
  const typewriterStyle = "text-base lg:text-2xl font-semibold text-green-400";

  return (
    <section id="home" className="bg-white text-darkBlue flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 lg:px-20 py-6">
      {/* Left Section: Text and Button */}
      <div className="flex flex-col items-start lg:w-1/2 text-left lg:mr-8 lg:mt-0">
        <h1 className="text-4xl lg:text-7xl font-bold leading-tight mb-4">
          Elevate Your Brand with Creative Vision
        </h1>
        <div className="flex items-center mb-6 lg:mb-10">
          <span className="text-base lg:text-2xl font-semibold text-green-400 mr-1">
            Adeola Adenipekun: 
          </span> 
          <TypewriterText 
            words={roles} 
            className={typewriterStyle} 
            elementType="span" 
            loop={true}
            />
        </div>

        <a href="#contact">
            <button className="bg-green-400 text-white text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-green-500 transition duration-300">
            Let's Work Together
            </button>
        </a>
      </div>

      {/* Right Section: Hero Image */}
      <div className="mt-8 lg:mt-0 lg:w-1/2 w-full flex justify-center">
        <img
          src="https://i.ibb.co/d4NvTxf/pexels-rethaferguson-3817675.jpg"
          alt="Adeola Adenipekun"
          className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
