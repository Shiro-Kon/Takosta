import React, { useState, useRef, useCallback } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Product, products } from "../../../Utils/Products";
import AnimatedElement from "../../AnimatedElement/AnimatedElement";

const Carousel: React.FC = () => {
  // Убедимся, что тип для activeSlide правильный
  const [activeSlide, setActiveSlide] = useState<number | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  // Для индексации используем Record с числовыми ключами
  const handleSlideClick = useCallback(
    (index: number) => {
      setActiveSlide((prevIndex) => (prevIndex === index ? null : index));
    },
    []
  );

  return (
    <AnimatedElement direction="visibility" delay={0.2} className="container mx-auto relative duration-300">
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
        speed={800}
      >
        {products.map((product: Product, index: number) => (
          <SwiperSlide key={product.id} className="p-6 mb-6">
            <div className="relative">
              <motion.div
                className="relative cursor-pointer transition-transform duration-300"
                whileHover={{ scale: activeSlide === index ? 1.02 : 1.03 }}
                whileTap={{ scale: activeSlide === index ? 1 : 0.98 }}
                onClick={() => handleSlideClick(index)}
              >
                <img
                  src={product.image}
                  alt={`${product.name} ${product.subname}`}
                  className="w-full h-[400px] max-w-xl md:h-[500px] object-cover rounded-3xl"
                  loading="lazy"
                />

                <AnimatePresence>
                  {activeSlide === index && (
                    <motion.div
                      initial={{ maxHeight: "20%", opacity: 0 }}
                      animate={{ maxHeight: "80%", opacity: 1 }}
                      exit={{ maxHeight: "20%", opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute bottom-0 left-0 right-0 text-white bg-sage-green/60 backdrop-blur-lg p-6 text-center rounded-3xl overflow-hidden"
                    >
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-light mb-2">
                        {product.name} {product.subname}
                      </h3>
                      <p className="text-sm md:text-md lg:text-lg xxl:text-xl mb-2">
                        {product.shirtDescription}
                      </p>
                      <p className="text-sm md:text-md lg:text-lg font-semibold mb-2">
                        {product.price} грн.
                      </p>
                      <Link to={`/product/${product.id}`}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="rounded-lg border-2 border-white/50 bg-sage-green/40 backdrop-blur-md px-4 py-2 text-white shadow-sm transition-transform duration-200 hover:bg-black/30 hover:text-white"
                        >
                          Детальніше
                        </motion.button>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

     
    </AnimatedElement>
  );
};

export default Carousel;
