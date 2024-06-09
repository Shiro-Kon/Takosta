import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CarouselProducts, {
  CarouselProductsData,
} from "../Utils/CarouselProductsArry";
import { Link } from "react-router-dom";

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    swipe:true,
    pauseOnHover:true,
    
  };
  

  return (
    <div className="bg-light-gray-green p-24 ">
      <Slider {...settings} >
        {CarouselProducts.map((CarouselProducts: CarouselProductsData) => (
          <div
            key={CarouselProducts.id}
            className="relative ml-[100px] "
          >
            <img
              src={CarouselProducts.image}
              alt={CarouselProducts.title}
              className="object-fill   w-[550px] h-[550px] rounded-sm"
            />
            <div className="fixed bottom-[7px]   opacity-0 hover:opacity-100 ease-in-out  duration-500  bg-opacity-70  w-[550px] min-h-[550px] rounded-sm">
              <div className="fixed bottom-[7px] w-[550px] min-h-[250px] bg-white/75 flex flex-col justify-end p-4 text-mahogany-brown font-sans font-light rounded-sm">
              <h3 className="text-4xl font-normal mb-2">
                {CarouselProducts.title}
              </h3>
              <p className="text-2xl mb-2 ">{CarouselProducts.description}</p>
              <p className="text-xl font-semibold mb-2">
                {CarouselProducts.price} 
                грн.
              </p>
              <Link
                to={CarouselProducts.link}
                className=" rounded-sm border-mahogany-brown  bg-mahogany-brown/25 px-4 py-2.5 text-3xl font-light text-mahogany-brown shadow-sm duration-300 ease-out  hover:bg-mahogany-brown/60 hover:text-white  active:scale-90 active:bg-mahogany-brown/100"
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
