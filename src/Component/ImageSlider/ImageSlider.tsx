import React, { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AnimatedElement from "../AnimatedElement/AnimatedElement";
import { sliderData } from "../../Utils/ImageSlider/sliderData";


const CarouselImg: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <AnimatedElement direction="visibility" delay={0.2} className="container mx-auto relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
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
          320: { slidesPerView: 1 },
          700: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        effect="slide"
        speed={800}
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id} className="p-6 mb-6">
            <div className="relative">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-[400px] max-w-xl md:h-[500px] object-cover rounded-3xl"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
    </AnimatedElement>
  );
};

export default CarouselImg;
