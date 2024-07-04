import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import WorkSliderArry, { WorkSliderData } from "../../Utils/WorkSliderArry";
import { Autoplay, Pagination } from "swiper/modules";
import AnimatedElement from "../AnimatedElement/AnimatedElement";

const WorksSlider: React.FC = () => {


  return (
    <AnimatedElement
      direction="up"
      delay={0.6}
      className=" w-full h-auto py-6 lg:p-16 xxl:p-24 relative"
    >
      <div className="mx-auto  relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={4}
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
          breakpoints={{
            320: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1300: { slidesPerView: 4 },
          }}
          className="!pb-12"
        >
          {WorkSliderArry.map((work: WorkSliderData, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center justify-center "
            ><div className="relative px-6 lg:px-2 mt-10 ">
                <img
                  src={work.img}
                  alt={`Работа ${index + 1}`}
                  className="object-cover w-full h-[350px] lg:h-[400px] xl:h-[450px] xxl:h-[550px] rounded-lg "
                />
                </div>
              <p className="mt-2 text-center">{work.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </AnimatedElement>
  );
};

export default WorksSlider;
