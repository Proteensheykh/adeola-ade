import React from "react";
import Slider from "react-slick";

const PortfolioSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const portfolioItems = [
    {
      id: 1,
      title: "Stop-Motion Animation",
      imgSrc: "//static.showit.co/file/UNQKAjb_QDun6si-77rQ0g/118454/food-_reveal.gif", // Placeholder for Adeola's work
    },
    {
      id: 2,
      title: "Production Design",
      imgSrc: "//static.showit.co/file/mzhjkGyMTmGBi2itfjvQeg/shared/dunkin_donuts.gif",
    },
    {
      id: 3,
      title: "Brand Commercial",
      imgSrc: "//static.showit.co/file/nDiR5Q8DQGy14Ucbiy4Acw/shared/starbucks_pink.gif",
    },
    {
      id: 4,
      title: "Set Design",
      imgSrc: "//static.showit.co/file/1ZTh1U83Sqi4zzmQcEnnWg/shared/student.gif",
    },
    {
      id: 5,
      title: "Animated Short",
      imgSrc: "//static.showit.co/file/jNE8SgZTRhGH3qYB8J_Fmg/118454/fruit_shoot_gif.gif",
    },
  ];

  return (
    <section id="portfolio" className="py-16 px-4 md:px-20 bg-pastel-pink-100">
      <h2 className="text-4xl font-semibold text-center text-purple-800 mb-8">
        Portfolio
      </h2>
      <Slider {...settings}>
        {portfolioItems.map((item) => (
          <div key={item.id} className="px-4">
            <img
              src={item.imgSrc}
              alt={item.title}
              className="rounded-lg w-full object-cover h-64"
            />
            {/* <h3 className="text-lg text-center text-green-400 mt-4">
              {item.title}
            </h3> */}
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default PortfolioSection;
