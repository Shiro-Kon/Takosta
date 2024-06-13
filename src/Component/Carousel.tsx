import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CarouselProducts, {
  CarouselProductsData,
} from "../Utils/CarouselProductsArry";
import { Link } from "react-router-dom";

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute  w-[100px]   -bottom-[50px]  md:-bottom-[80px]  right-[15%] md:right-[34%]  py-2 lg:w-[50px] lg:-right-[70px] lg:top-0 lg:h-[350px] xl:h-[400px] xxl:h-[550px] z-40  rounded-sm border-mahogany-brown bg-mahogany-brown/25 text-mahogany-brown shadow-sm duration-300 ease-out hover:bg-mahogany-brown/60 hover:text-white active:scale-90 active:bg-mahogany-brown/100 flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <p className="lg:text-3xl lg:rotate-90">Далі</p>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute  w-[100px]   -bottom-[50px] md:-bottom-[80px] left-[15%]  md:left-[34%] py-2 lg:w-[50px]  lg:-left-[70px] lg:top-0 lg:h-[350px] xl:h-[400px] xxl:h-[550px] z-40  rounded-sm border-mahogany-brown bg-mahogany-brown/25 text-mahogany-brown shadow-sm duration-300 ease-out hover:bg-mahogany-brown/60 hover:text-white active:scale-90 active:bg-mahogany-brown/100 flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <p className="lg:text-3xl lg:-rotate-90">Попередня</p>
    </div>
  );
};

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    swipe: true,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="bg-light-gray-green w-full h-auto py-6   lg:p-16 xxl:p-24">
      <Slider {...settings} className=" mx-auto  md:max-w-[90%] ">
        {CarouselProducts.map((CarouselProducts: CarouselProductsData) => (
          <div key={CarouselProducts.id} className="relative px-4 lg:px-2  ">
            <img src={CarouselProducts.image} alt={CarouselProducts.title} className="object-fill w-full h-[300px] sm:h-[320px]  md:h-[320px] lg:h-[350px] xl:h-[400px] xxl:h-[550px]   rounded-sm" />
            <div className="absolute mx-4 xl:mx-2 inset-0  flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bg-white/75 bottom-0   min-h-1/2 rounded-sm p-4 text-mahogany-brown font-sans font-light flex flex-col justify-end items-start">
                <h3 className="text-2xl lg:text-4xl font-normal mb-2">{CarouselProducts.title}</h3>
                <p className="text-xl lg:text-2xl mb-2">{CarouselProducts.description}</p>
                <p className="text-lg lg:text-xl font-semibold mb-2">{CarouselProducts.price} грн.</p>
                <Link
                  to={CarouselProducts.link}
                  className="rounded-sm border-mahogany-brown bg-mahogany-brown/25 px-4 py-2.5 text-lg lg:text-3xl font-light text-mahogany-brown shadow-sm duration-300 ease-out hover:bg-mahogany-brown/60 hover:text-white active:scale-90 active:bg-mahogany-brown/100"
                >
                  Детальніше
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
