import { Link } from "react-router-dom";
import AnimatedElement from "../AnimatedElement/AnimatedElement";

const HeroBlock = () => {
  return (
    <div className="relative h-screen">
      {/* Animated background image */}
      <AnimatedElement direction="visibility" delay={0.2}>
        <img 
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          src="./Images/Heroblock/Heroblok.png"
          loading="lazy"  // Добавлен lazy load для оптимизации производительности
        />
      </AnimatedElement>

      <div className="flex items-center justify-center h-full mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Animated logo */}
          <AnimatedElement direction="up" delay={0.2}>
            <img 
              alt="Takosta professional cosmetics"
              className="scale-75 sm:scale-90 md:scale-100 lg:scale-110 xl:scale-125 mobile-landscape:scale-50 transition-transform duration-500 ease-out"
              src="./Images/Heroblock/TAKOSTA_logo.PNG"
              loading="lazy"  // lazy load изображения
            />
          </AnimatedElement>

          {/* Animated button */}
          <AnimatedElement direction="up" delay={0.6}>
            <div className="mt-6 lg:mt-16 flex justify-center mobile-landscape:-mt-6">
              <Link
                to="/product"
                className="rounded border-2 border-white/50 bg-sage-green/60 backdrop-blur-md px-6 py-3 text-base sm:text-lg md:text-md lg:text-lg xl:text-xl font-light text-white shadow-sm transition duration-200 ease-out transform hover:bg-black/30 hover:text-white active:scale-95 mobile-landscape:text-base"
              >
                Перейти до каталогу
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
