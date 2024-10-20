import React from "react";

function HeroSection() {
  return (
    <section id="home" className="bg-white text-purple-800 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 lg:px-20 py-16">
      {/* Left Section: Text and Button */}
      <div className="flex flex-col items-start lg:w-1/2 text-left lg:mr-8 lg:mt-0">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
          Elevate Your Brand with Creative Vision
        </h1>
        <p className="text-xl lg:text-3xl mb-6 text-green-400">
          Adeola Adenipekun: Stop-motion Animator & Production Designer
        </p>
        <button className="bg-green-400 text-white text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-green-500 transition duration-300">
          Let's Work Together
        </button>
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
