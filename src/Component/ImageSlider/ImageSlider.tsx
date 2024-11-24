import React, { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AnimatedElement from "../AnimatedElement/AnimatedElement";
import { sliderData } from "../../Utils/ImageSlider/sliderData";
import { motion } from "framer-motion";

const CarouselImg: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <AnimatedElement direction="visibility" delay={0.2} className="container mx-auto relative duration-300">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20} // Расстояние между слайдами
        slidesPerView={4} // Количество слайдов, которые показываются на экране
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-sage-green",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-olive-green",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
        breakpoints={{
          320: { slidesPerView: 1 },  // 1 слайд на мобильных
          700: { slidesPerView: 2 },  // 2 слайда на экранах среднего размера
          1024: { slidesPerView: 3 }, // 3 слайда на экранах типа планшет
          1280: { slidesPerView: 4 }, // 4 слайда на десктопах
        }}
        effect="slide"
        speed={800}
        className="relative"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={slide.id} className=" mb-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }}   
              transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }} 
              className="relative"
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-[400px] max-w-full md:h-[500px] object-cover rounded-3xl"
                loading="lazy"  // Оптимизация загрузки изображений
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
    </AnimatedElement>
  );
};

export default CarouselImg;
