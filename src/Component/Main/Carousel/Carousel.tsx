import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CarouselProducts, { CarouselProductsData } from '../../../Utils/CarouselProductsArry';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 md:w-[90%]  relative py-24"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          bulletClass: 'swiper-pagination-bullet !bg-sage-green',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-olive-green',
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
        className="-mb-12 "
      >
        {CarouselProducts.map((product: CarouselProductsData, index) => (
          <SwiperSlide key={product.id}>
            <div className="relative p-8 md:p-4 lg:p-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative cursor-pointer duration-300 " 
                onClick={() => handleSlideClick(index)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="relative w-full h-[450px] md:h-[450px] lg:h-[550px] xl:h-[550px] xxl:h-[650px] object-cover rounded-[50px]"
                />

                <motion.div
                  initial={{ maxHeight: '20%', opacity: 0 }}
                  animate={{ maxHeight: activeSlide === index ? '60%' : '20%', opacity: activeSlide === index ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-0 left-0 right-0 text-white bg-black bg-opacity-35 backdrop-blur-lg p-6 text-center rounded-[50px] "
                >
                  <div className="w-full">
                    <h3 className="text-xl md:text-xl lg:text-3xl xl:text-2xl xxl:text-4xl font-light text-white font-sans my-2 xll:my-4">
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
                      className="inline-block rounded-[50px] border-white bg-black/25 p-2 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3 xxl:px-6 xxl:py-5 text-sm md:text-lg lg:text-xl xl:text-2xl font-light text-white shadow-sm duration-300 ease-out hover:bg-mahogany-brown/60 hover:text-white active:scale-90 active:bg-mahogany-brown/100"
                    >
                      Детальніше
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
    </motion.div>
  );
};

export default Carousel;
