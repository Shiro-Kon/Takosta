import React, { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Slide, slides } from "../../../Utils/SliderData";
import AnimatedElement from "../../AnimatedElement/AnimatedElement";

const SwiperImg: React.FC = React.memo(() => {
  const [swiper, setSwiper] = useState<any>(null);
  const [activeSlide, setActiveSlide] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState<Slide | null>(null);

  const handleSlideClick = useCallback((slide: Slide, index: number) => {
    setActiveSlide(prevIndex => (prevIndex === index ? null : index));
    setSelectedSlide(slide); 
    setIsModalOpen(true); 
    swiper?.autoplay.stop(); 
  }, [swiper]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false); 
    setSelectedSlide(null);
    swiper?.autoplay.start(); 
  }, [swiper]);

  return (
    <AnimatedElement direction="visibility" delay={0.2} className="container mx-auto relative py-8">
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
        onSwiper={setSwiper}
        breakpoints={{
          320: { slidesPerView: 1 },
          700: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        effect="slide"
        speed={800}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="p-4 mb-6">
            <div className="relative">
            
              <motion.div
                className="relative cursor-pointer transition-transform duration-300"
               
                onClick={() => handleSlideClick(slide, index)}
              >
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className="w-full h-[500px] md:h-[500px] xxl:h-[650px] object-cover rounded-2xl"
                  loading="lazy"
                />
              </motion.div>

              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

 ]
      {isModalOpen && selectedSlide && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.img
            src={selectedSlide.fullImage}
            alt={`Full image of slide ${selectedSlide.id}`}
            className="w-full h-full max-w-4xl max-h-[90vh] object-contain rounded-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            loading="lazy" 
          />
        </motion.div>
      )}
      
      <div className="swiper-pagination"></div>
    </AnimatedElement>
  );
});

export default SwiperImg;
