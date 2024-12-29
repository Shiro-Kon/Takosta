import React, { useRef, useEffect } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Virtual } from "swiper/modules";
import { FadeInText, SlideInComponent } from "../../animation/FadeInText"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { sliderData } from "../../../Utils/ImageSlider/sliderData";

const CarouselImg: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    return () => {
      swiperRef.current = null;
    };
  }, []);

  if (!sliderData.length) {
    return <div className="text-center text-gray-500">Немає зображень.</div>;
  }

  return (
    <div className="container mx-auto w-[90%] relative duration-300">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Virtual]}
        spaceBetween={20}
        slidesPerView={4}
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
          1280: { slidesPerView: 4 },
        }}
        speed={600}
        className="relative"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={slide.id} virtualIndex={index} className="mb-8">
            <SlideInComponent direction="top" duration={700}>
              <div className="relative">
                <FadeInText delay={200} duration={500}>
                  <img
                    src={slide.image}
                    alt={slide.alt || "Зображення"}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/fallback-image.jpg";
                    }}
                    className="w-[500px] h-[500px] lg:w-[500px] object-cover rounded-3xl"
                    loading="lazy"
                  />
                </FadeInText>
              </div>
            </SlideInComponent>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination">
       
      </div>
    </div>
  );
};

export default CarouselImg;
