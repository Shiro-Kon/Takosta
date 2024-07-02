import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Service, services } from '../../Utils/servicesData';


const ServicesCarousel = () => {
  const [activeSlide, setActiveSlide] = useState<number | null>(null);
  const [swiper, setSwiper] = useState<any>(null);

  const handleSlideClick = (index: number) => {
    setActiveSlide(activeSlide === index ? null : index);
    if (swiper) {
      swiper.autoplay.stop();
    }
  };

  return (
    <div className="relative py-6 lg:py-16 xxl:py-24">
      <div className="container mx-auto">
      
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
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
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-2"
        >
          {services.map((service: Service, index) => (
            <SwiperSlide key={service.id}>
              <div className="relative px-4 lg:px-6 mt-10 transform transition-transform duration-500 hover:-translate-y-3">
                <div
                  className="relative cursor-pointer shadow-lg"
                  onClick={() => handleSlideClick(index)}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="object-cover w-full h-[350px] lg:h-[400px] xl:h-[450px] xxl:h-[550px] rounded-md"
                  />
                  {activeSlide !== index && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/35 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                      <span className="text-white text-2xl">Детальніше</span>
                    </div>
                  )}
                  {activeSlide === index && (
                    <div className="absolute inset-0 flex flex-col justify-end bg-black/35 backdrop-blur-sm p-6 rounded-lg">
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-md lg:text-lg text-white mb-4">{service.description}</p>
                      <p className="text-lg font-semibold text-white">{service.price}</p>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
