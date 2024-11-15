import React from "react";
import snickersLogo from "../assets/images/snickers.png";
import beloxxiLogo from "../assets/images/beloxxi.png";
import lacaseraLogo from "../assets/images/lacasera.jpg";
import vyrusLogo from "../assets/images/Vyrus-Digital-Logo_RED-HOR.png";

function ClientsSection() {
  const logos = [
    { name: "Snickers", src: snickersLogo },
    { name: "Beloxxi", src: beloxxiLogo },
    { name: "La Casera", src: lacaseraLogo },
    { name: "Vyrus Digital", src: vyrusLogo },
    { name: "Snickers", src: snickersLogo },
    { name: "Beloxxi", src: beloxxiLogo },
    { name: "La Casera", src: lacaseraLogo },
    { name: "Vyrus Digital", src: vyrusLogo },
    { name: "Snickers", src: snickersLogo },
    { name: "Beloxxi", src: beloxxiLogo },
    { name: "La Casera", src: lacaseraLogo },
    { name: "Vyrus Digital", src: vyrusLogo },
  ];

  return (
    <section className="bg-white py-16">
      <h2 className="text-center text-3xl lg:text-4xl font-bold text-darkBlue mb-8">
      Creative Collaborations
      </h2>
      
      {/* Carousel Container */}
      <div className="mx-4 lg:mx-20 overflow-hidden relative">
        <div className="flex items-center space-x-8 animate-scroll lg:space-x-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 transform transition-transform duration-300 hover:scale-110"
              style={{ width: "150px" }}
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="w-full object-contain"
              />
            </div>
          ))}
          {/* Duplicate logos for seamless scrolling */}
          {logos.map((logo, index) => (
            <div
              key={index + logos.length}
              className="flex-shrink-0 transform transition-transform duration-300 hover:scale-110"
              style={{ width: "150px" }}
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
