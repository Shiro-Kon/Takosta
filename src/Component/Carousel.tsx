
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CarouselProducts from '../Utils/CarouselProductsArry';


const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="carousel-container static">
      <Slider {...settings}>
        {CarouselProducts.map((image, index) => (
          <div key={index}>
            
            <img src={image} alt={`Slide ${index + 1}`} className="mx-auto h-[370px] w-[370px]"  />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
