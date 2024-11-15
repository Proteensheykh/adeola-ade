// import React from "react";
// import Slider from "react-slick";

// const PortfolioSection = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   const portfolioItems = [
//     {
//       id: 1,
//       title: "Stop-Motion Animation",
//       imgSrc: "//static.showit.co/file/UNQKAjb_QDun6si-77rQ0g/118454/food-_reveal.gif", // Placeholder for Adeola's work
//     },
//     {
//       id: 2,
//       title: "Production Design",
//       imgSrc: "//static.showit.co/file/mzhjkGyMTmGBi2itfjvQeg/shared/dunkin_donuts.gif",
//     },
//     {
//       id: 3,
//       title: "Brand Commercial",
//       imgSrc: "//static.showit.co/file/nDiR5Q8DQGy14Ucbiy4Acw/shared/starbucks_pink.gif",
//     },
//     {
//       id: 4,
//       title: "Set Design",
//       imgSrc: "//static.showit.co/file/1ZTh1U83Sqi4zzmQcEnnWg/shared/student.gif",
//     },
//     {
//       id: 5,
//       title: "Animated Short",
//       imgSrc: "//static.showit.co/file/jNE8SgZTRhGH3qYB8J_Fmg/118454/fruit_shoot_gif.gif",
//     },
//   ];

//   return (
//     <section id="portfolio" className="py-16 px-4 md:px-20 bg-pastel-pink-100">
//       <h2 className="text-4xl font-semibold text-center text-darkBlue mb-8">
//         Portfolio
//       </h2>
//       <Slider {...settings}>
//         {portfolioItems.map((item) => (
//           <div key={item.id} className="px-4">
//             <img
//               src={item.imgSrc}
//               alt={item.title}
//               className="rounded-lg w-full object-cover h-64"
//             />
//             {/* <h3 className="text-lg text-center text-green-400 mt-4">
//               {item.title}
//             </h3> */}
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default PortfolioSection;

import React from "react";

function PortfolioSection() {

  // Original portfolio items
  const portfolioItems = [
    {
      title: "Stop-motion Animation",
      description: "A creative project showcasing advanced stop-motion techniques.",
      image: "//static.showit.co/file/UNQKAjb_QDun6si-77rQ0g/118454/food-_reveal.gif",
    },
    {
      title: "Production Design",
      description: "A stunning example of innovative production design for commercials.",
      image: "//static.showit.co/file/jNE8SgZTRhGH3qYB8J_Fmg/118454/fruit_shoot_gif.gif",
    },
    {
      title: "Content Production",
      description: "Content production for a high-profile brand campaign.",
      image: "//static.showit.co/file/1ZTh1U83Sqi4zzmQcEnnWg/shared/student.gif",
    },
    {
      title: "Creative Direction",
      description: "Content production for a high-profile brand campaign.",
      image: "//static.showit.co/file/nDiR5Q8DQGy14Ucbiy4Acw/shared/starbucks_pink.gif",
    },
    {
      title: "Production Design",
      description: "Content production for a high-profile brand campaign.",
      image: "//static.showit.co/file/mzhjkGyMTmGBi2itfjvQeg/shared/dunkin_donuts.gif",
    },
  ];

  // Duplicate items for infinite loop effect
  const extendedItems = [...portfolioItems, ...portfolioItems, ...portfolioItems];

  return (
    <section className="bg-white py-16">
      <h2 className="text-center text-3xl lg:text-4xl font-bold text-darkBlue mb-8">
        My Portfolio
      </h2>

      <div className="relative overflow-hidden mx-16">
        {/* Carousel Container with scrolling animation */}
        <div
          className="portfolio-carousel flex space-x-8 animate-scroll overflow-hidden"
          style={{ width: `${extendedItems.length * 100}%` }}
        >
          {extendedItems.map((item, index) => (
            <div
              key={index}
              className="portfolio-item relative flex-shrink-0 w-full snap-center bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
              style={{ maxWidth: "800px" }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 lg:h-96 object-cover"
              />
              {/* Hover Text Overlay */}
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;