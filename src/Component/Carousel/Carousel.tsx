import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import CarouselProducts, {
  CarouselProductsData,
} from "../../Utils/CarouselProductsArry";
import { Link } from "react-router-dom";

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute hidden lg:flex lg:items-center lg:justify-center py-2 lg:w-[50px] lg:-right-[70px] lg:top-0  lg:h-[400px] xl:h-[450px]  xxl:h-[550px] z-40 rounded-sm border-mahogany-brown bg-black bg-opacity-15 backdrop-blur-md text-white shadow-sm  ease-in-out hover:bg-black/40 hover:text-white active:scale-90 active:bg-black/20 cursor-pointer duration-300"
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
      className="absolute hidden lg:flex lg:items-center lg:justify-center py-2 lg:w-[50px] lg:-left-[70px] lg:top-0  lg:h-[400px] xl:h-[450px] xxl:h-[550px] z-40 rounded-sm border-white bg-black bg-opacity-15 backdrop-blur-md text-white shadow-sm  ease-out hover:bg-black/40 hover:text-white active:scale-90  active:bg-black/20 cursor-pointer duration-300"
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
         
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          
        },
      },
    ],
  };

  return (
    <div className="bg-light-gray-green w-full h-auto py-6 lg:p-16 xxl:p-24">
  <Slider {...settings} className="mx-auto md:max-w-[90%]">
    {CarouselProducts.map((CarouselProducts: CarouselProductsData) => (
      <div key={CarouselProducts.id} className="relative px-4 lg:px-2">
        <img
          src={CarouselProducts.image}
          alt={CarouselProducts.title}
          className="object-cover w-full h-[350px] lg:h-[400px] xl:h-[450px] xxl:h-[550px] rounded-sm"
        />
        <div className="absolute mx-4 lg:mx-2 inset-0 flex items-center justify-center opacity-0 hover:opacity-100   ">
          <div className="absolute bg-black bg-opacity-25 backdrop-blur-md bottom-0 min-h-1/2 rounded-sm p-4 text-white font-sans font-light flex flex-col justify-end items-start">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal mb-2">
              {CarouselProducts.title}
            </h3>
            <p className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl mb-2">
              {CarouselProducts.description}
            </p>
            <p className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-semibold mb-2">
              {CarouselProducts.price} грн.
            </p>
            <Link
              to={CarouselProducts.link}
              className="rounded-sm border-white bg-black/25 p-2 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 xl:px-6 xl:py-5 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-light text-white shadow-sm duration-300 ease-out hover:bg-mahogany-бrown/60 hover:text-white active:scale-90 active:bg-mahogany-brown/100"
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
