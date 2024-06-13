import { Link } from 'react-router-dom';

const HeroBlock = () => {
  return (
    <div className="relative h-full h-[100vh]">
      <div>
        <img src="./Images/Heroblock/Heroblok.png" alt="1" className="absolute inset-0 -z-50 w-full h-[100vh] object-cover" />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <img src="./Images/TAKOSTA_logo.png" alt="Takosta professional cosmetics" className="mt-20 scale-75 md:scale-110" />
          <div className="mt-8 md:mt-40 flex items-center justify-center">
            <Link
              to="/"
              className="rounded-sm border bg-white/25 px-6 py-2.5 md:text-3xl font-light text-white shadow-sm duration-300 ease-out hover:bg-white/60 hover:text-slate-500 active:scale-90 "
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
