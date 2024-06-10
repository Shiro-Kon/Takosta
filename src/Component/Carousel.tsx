import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CarouselProducts, {
  CarouselProductsData,
} from "../Utils/CarouselProductsArry";
import { Link } from "react-router-dom";

type Props = {};

const NextArrow = (props:any) => {
  const {  onClick } = props;
  return (
    <div
      className='absolute right-0 top-0 h-[550px] py-2  z-40 content-center rounded-sm border-mahogany-brown  bg-mahogany-brown/25  text-mahogany-brown shadow-sm duration-300 ease-out  hover:bg-mahogany-brown/60 hover:text-white  active:scale-90 active:bg-mahogany-brown/100'
     
      onClick={onClick}
    >
      <p className="text-3xl rotate-90 ">Далі</p>
    </div>
  );
};

const PrevArrow = (props:any) => {
  const { onClick } = props;
  return (
    <div
      className='absolute left-0 top-0 w-[60px] h-[550px]   z-50  content-center   rounded-sm border-mahogany-brown  bg-mahogany-brown/25  text-mahogany-brown shadow-sm duration-300 ease-out  hover:bg-mahogany-brown/60 hover:text-white  active:scale-90 active:bg-mahogany-brown/100'
     
      onClick={onClick}
    >
      <p className="text-3xl mt-24   -rotate-90 ">Попередня</p>
    </div>
  );
};

  const Carousel = (props: Props) => {
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  

  return (
    <div className="bg-light-gray-green p-24 ">
      <Slider {...settings} >
        {CarouselProducts.map((CarouselProducts: CarouselProductsData) => (
          <div
            key={CarouselProducts.id}
            className="relative ml-[90px] "
          >
            <img
              src={CarouselProducts.image}
              alt={CarouselProducts.title}
              className="object-fill w-[550px] h-[550px] rounded-sm"
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
