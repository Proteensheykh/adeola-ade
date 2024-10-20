import React from "react";

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-20 bg-pastel-blue-100">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src="https://i.ibb.co/d4NvTxf/pexels-rethaferguson-3817675.jpg"
          alt="Adeola Adenipekun"
          className="rounded-lg w-full object-cover h-80 md:h-96"
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h2 className="text-4xl font-semibold text-purple-800">
          About Adeola Adenipekun
        </h2>
        <p className="text-lg text-gray-600">
          Adeola Adenipekun is a creative director and visionary in the world of
          stop-motion animation, production design, and commercial media. With
          years of experience working on dynamic projects across multiple
          industries, Adeola brings a unique artistic approach to every project.
          She is passionate about turning ideas into visually captivating
          stories and designs that resonate with audiences. Whether it’s
          creating stunning set designs, producing eye-catching advertisements,
          or bringing characters to life through animation, Adeola’s creativity
          knows no bounds.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
