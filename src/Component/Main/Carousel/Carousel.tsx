import React, { useState, useRef, useCallback, useEffect } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { Product, products } from "../../../Utils/Products";

const Carousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideClick = useCallback(
    (index: number) => setActiveSlide((prevIndex) => (prevIndex === index ? null : index)),
    []
  );

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  };

  useEffect(() => {
    return () => {
      swiperRef.current = null;
    };
  }, []);

  return (
    <div className="container mx-auto relative duration-600">
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
              <div
                className="relative cursor-pointer transition-transform duration-300 rounded-3xl hover:scale-105 active:scale-95 shadow-lg"
                onClick={() => handleSlideClick(index)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} 
              >
                <img
                  src={product.image}
                  alt={`${product.name} ${product.subname}`}
                  className="w-full h-[400px] max-w-xl md:h-[500px] object-cover rounded-3xl"
                  loading="lazy"
                />
                <div
                  className={`absolute bottom-0 left-0 right-0 text-white text-wrap whitespace-normal hyphens-auto bg-gradient-to-t from-sage-green via-black/80 to-transparent px-6 py-8 text-center rounded-3xl overflow-hidden transition-all duration-700 ${activeSlide === index ? 'max-h-[80%] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light mb-2">
                    {product.name} {product.subname}
                  </h3>
                  <p className="text-sm md:text-md lg:text-lg mb-2">{product.shirtDescription}</p>
                  <p className="text-sm md:text-md lg:text-lg font-semibold mb-2">{product.price} грн.</p>
                  <Link to={`/product/${product.id}`}>
                    <button className="rounded-3xl border-2 border-white/50 bg-sage-green/40 backdrop-blur-md px-4 py-2 text-white shadow-sm transition-transform duration-400 hover:bg-black/30 hover:text-white hover:scale-[105%] active:scale-[95%]">
                      Детальніше
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
