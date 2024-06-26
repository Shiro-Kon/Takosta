import { Link } from 'react-router-dom';

const HeroBlock = () => {
  return (
    <div className="relative h-screen">
      <div>
        <img 
          src="./Images/Heroblock/Heroblok.png" 
          alt="Background" 
          loading="lazy"
          className="absolute inset-0  w-full h-full object-cover" 
        />
      </div>
      <div className="flex items-center justify-center h-full mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 ">
        <div className="text-center">
          <img 
            src="./Images/Heroblock/TAKOSTA_logo.PNG" 
            alt="Takosta professional cosmetics" 
            className="scale-75 sm:scale-90  md:scale-100 lg:scale-110 xl:scale-125 mobile-landscape:scale-50 "
          />
          <div className="mt-6  lg:mt-16 flex justify-center mobile-landscape:-mt-6">
            <Link
              to="/"
              className="rounded  border-2  border-white/50 bg-black bg-opacity-15 backdrop-blur-md px-4 py-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xll:4xl font-light text-white shadow-sm  duration-200 ease-out hover:bg-black/30 hover:text-white active:scale-95 mobile-landscape:text-base"
            >
              Перейти до каталогу
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
