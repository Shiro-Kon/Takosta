import { Link } from 'react-router-dom';

const HeroBlock = () => {
  return (
    <div className="relative h-[100vh]">
      <div>
        <img src="./Images/Heroblock/Heroblok.png" alt="1" className="absolute inset-0 -z-50 w-full h-[100vh] object-cover" />
      </div>
      <div className="mx-auto max-w-2xl sm:py-24 md:py-20   lg:py-52 mobile-landscape:py-16">
        <div className="text-center">
          <img src="./Images/TAKOSTA_logo.png" alt="Takosta professional cosmetics" className="mt-20 scale-75 lg:scale-110 mobile-landscape:scale-50 mobile-landscape:mt-0" />
          <div className=" md:mt-6 lg:mt-24 flex items-center justify-center mobile-landscape:mt-0">
            <Link
              to="/"
              className="rounded-sm border bg-white/25 px-6 py-2.5 md:text-3xl font-light text-white shadow-sm duration-300 ease-out hover:bg-white/60 hover:text-slate-500 active:scale-90 mobile-landscape:text-sm"
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
