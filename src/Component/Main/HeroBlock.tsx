import { Link } from "react-router-dom";
import { FadeInText, SlideInComponent } from "../animation/FadeInText";
import AnimatedElement from "../AnimatedElement/AnimatedElement";

const HeroBlock = () => {
  return (
    <div className="relative h-screen">
      <AnimatedElement direction="visibility" delay={0.1}>
        <img 
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          src="./Images/Heroblock/Heroblok.png"
        />
      </AnimatedElement>

      <div className="flex items-center justify-center h-full mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SlideInComponent direction="bottom"   duration={800}>
            <img 
              alt="Takosta professional cosmetics"
              className="scale-75 sm:scale-90 md:scale-100 lg:scale-110 xl:scale-125 transition-transform duration-600 ease-out"
              src="./Images/Heroblock/TAKOSTA_logo.PNG"
            />
          </SlideInComponent>

          <FadeInText  delay={1000}  duration={400} >
            <div className="mt-6 lg:mt-16 flex justify-center">
              <Link
                to="/product"
                className="rounded border-2 border-white/50 bg-sage-green/60 backdrop-blur-md px-6 py-3 text-base sm:text-lg md:text-md lg:text-lg xl:text-xl font-light text-white shadow-sm transition duration-600 ease-out transform hover:bg-black/30 hover:text-white active:scale-95"
              >
                Перейти до каталогу
              </Link>
            </div>
          </FadeInText>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
