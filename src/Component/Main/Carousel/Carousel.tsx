import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Product, products } from "../../../Utils/Products";

const Carousel: React.FC = () => {
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
      className="container mx-auto sm:px-2 md:w-[90%] xl:w-[80%] xxl:w-[70%] relative py-8"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "swiper-pagination-bullet !bg-sage-green",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-olive-green",
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
        effect="fade"
        speed={600}
      >
        {products.map((product: Product, index) => (
          <SwiperSlide key={product.id} className="p-4 py-6">
            <div className="container relative">
              <motion.div
                className="relative cursor-pointer transition duration-300"
                whileHover={{ scale: activeSlide === index ? 1 : 1.02 }}
                whileTap={{ scale: activeSlide === index ? 1 : 0.98 }}
                onClick={() => handleSlideClick(index)}
              >
                <img
                  src={product.image}
                  alt={`${product.name} ${product.subname}`}
                  loading="lazy"
                  className="relative w-full h-[450px] md:h-[450px] lg:h-[550px] xl:h-[550px] xxl:h-[650px] transition object-cover overflow-hidden rounded-[40px] drop-shadow-lg"
                  style={{ willChange: "transform" }}
                />
              </motion.div>

              {activeSlide === index && (
                <motion.div
                  initial={{ maxHeight: "20%", opacity: 0 }}
                  animate={{ maxHeight: "80%", opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-0 left-0 right-0 text-white bg-black bg-opacity-35 backdrop-blur-lg p-6 text-center rounded-[40px] overflow-hidden w-full "
                >
                  <div className="w-full">
                    <h3 className="text-2xl md:text-2xl lg:text-3xl xl:text-3xl xxl:text-3xl font-light text-white font-sans my-2 xll:my-4">
                      {product.name} <br /> {product.subname}
                    </h3>

                    <p className="sm:text-md md:text-md lg:text-xl xxl:text-2xl mb-2">
                      {product.shirtDescription}
                    </p>
                    <p className="sm:text-md md:text-lg lg:text-xl xl:text-2xl font-semibold mb-2">
                      {product.price} грн.
                    </p>
                    <Link to={`/product/${product.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block rounded-[20px] border-white bg-black/25 p-2 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3 xxl:px-6 xxl:py-5 text-sm md:text-lg lg:text-xl xl:text-2xl font-light text-white duration-300  hover:bg-black/35"
                      >
                        Детальніше
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
    </motion.div>
  );
};

export default Carousel;
