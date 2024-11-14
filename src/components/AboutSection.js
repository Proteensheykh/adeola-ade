import React from "react";
import TypewriterText from "./TypewriterText";

const AboutSection = () => {
  const words = ["Do you know who I am?", "Who are you?", "I am a"];
  const typewriterStyle = "text-4xl font-semibold text-purple-800";

  return (
    <section id="about" className="flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-20 bg-pastel-blue-100">
      <div className="w-full md:w-1/2 mb-8 md:mb-0 lg:mr-8" >
        <img
          src="https://i.ibb.co/PCCNg6C/pexels-polina-tankilevitch-7382438.jpg"
          alt="Adeola Adenipekun"
          className="rounded-lg w-full object-cover h-80 md:h-96"
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left space-y-4">
      <TypewriterText 
            words={words} 
            className={typewriterStyle} 
            elementType="h2" 
            loop={false}
            />
        <p className="text-lg text-gray-600">
        ...creative entrepreneur expressing my creativity as a visual storyteller 
        through creative direction, stopmotion animation, production design and video 
        production.
        </p>
        <p className="text-lg text-gray-600">
        Overtime, working across multiple industries from marketing and advertising to 
        filmmaking have allowed me to hone a unique blend of artistic and strategic 
        approach to my work process.
        </p>
        <p className="text-lg text-gray-600">
        I love the simplicity of ideas and the collaborative process of forming them 
        into concrete masterpieces. I look forward to seeing what we come up with for 
        your next project.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
