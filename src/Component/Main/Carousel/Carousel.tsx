import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CarouselProducts, { CarouselProductsData } from '../../../Utils/CarouselProductsArry';
import { Link } from 'react-router-dom';
import AnimatedElement from '../../AnimatedElement/AnimatedElement';

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState<number | null>(null);
  const [swiper, setSwiper] = useState<any>(null);

  const handleSlideClick = (index: number) => {
    setActiveSlide(activeSlide === index ? null : index);
    if (swiper) {
      swiper.autoplay.stop();
    }
  };

  return (
    <AnimatedElement
      direction="up"
      delay={0.6}
      className=" w-full h-auto py-6 lg:p-16 xxl:p-24 relative"
    >
      <div className="mx-auto  relative">
        <div className="hidden lg:flex justify-start  absolute top-0 right-16 z-10">
          
         
          <div className="swiper-button-prev !text-white after:!text-[20px] !absolute !left-0  duration-300 ease-linear  hover:scale-110 active:scale-[0.8]"></div>
          <div className="swiper-button-next !text-white after:!text-[20px] !absolute !left-8  duration-300 ease-linear  hover:scale-110 active:scale-[0.8]"></div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation={{
            nextEl: '.swiper-button-next' ,
            prevEl: '.swiper-button-prev',
           
          }} 
          
          pagination={{ 
            clickable: true,
            el: '.swiper-pagination',
            bulletClass: 'swiper-pagination-bullet !bg-white',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-white',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          onSwiper={setSwiper}
          breakpoints={{
            320: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1300: { slidesPerView: 3 },
          }}
          className="!pb-12" 
        >
          {CarouselProducts.map((product: CarouselProductsData, index) => (
            <SwiperSlide key={product.id}>
              <div className="relative px-4 lg:px-2 mt-10 ">
                <div 
                  className="relative cursor-pointer duration-500 ease-in-out   lg:hover:-translate-y-6" 
                  onClick={() => handleSlideClick(index)}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="object-cover w-full h-[350px] lg:h-[400px] xl:h-[450px] xxl:h-[550px] rounded-sm "
                  />
                  {activeSlide !== index && (
                    <div className="absolute inset-0 flex items-center justify-center   opacity-0 hover:opacity-100 hover:drop-shadow-2xl transition-opacity delay-150 duration-500">
                      
                      <img src="./Images/clik.png" alt="clik" className='invert'/>
                    </div>
                  )}
                  {activeSlide === index && (
                    <div className="absolute inset-0 flex items-end justify-start bg-black/35 backdrop-blur-md rounded-sm p-4 text-white font-sans font-light ">
                      <div className="w-full">
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal mb-2">
                          {product.title}
                        </h3>
                        <p className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl mb-2">
                          {product.description}
                        </p>
                        <p className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-semibold mb-2">
                          {product.price} грн.
                        </p>
                        <Link
                          to={product.link}
                          className="inline-block rounded-sm border-white bg-black/25 p-2 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-2  xxl:px-6 xxl:py-5 text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl font-light text-white shadow-sm duration-300 ease-out hover:bg-mahogany-brown/60 hover:text-white active:scale-90 active:bg-mahogany-brown/100"
                        >
                          Детальніше
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </AnimatedElement>
  );
};

export default Carousel;