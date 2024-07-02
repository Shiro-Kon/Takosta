import { Link } from "react-router-dom";
import AnimatedElement from "../Component/AnimatedElement/AnimatedElement";
import ServicesCarousel from "../Component/ServicesPage/ServicesCarousel";


const ServicesPage = () => {
  return (
    <main className="text-white pt-[50px] lg:pt-[200px]  py-14 px-6 lg:px-16 xl:px-24">
      
      <section className="mb-16 mx-auto relative">
      <AnimatedElement
      direction="up"
      delay={0.2}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl  font-pushkin font-semibold text-center mb-12 ">
         Наша студія краси
        </h1>
        </AnimatedElement>
        <AnimatedElement
      direction="up"
      delay={0.4}>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4 text-center">
          Вітаємо у нашій студії краси, де ваші волосся знаходиться в надійних руках.
        </p>
        </AnimatedElement>
        <AnimatedElement
      direction="up"
      delay={0.6}>
        <p className="text-md md:text-lg lg:text-xl xl:text-2xl mb-4 text-center ">
          Наші послуги включають:
        </p>
        </AnimatedElement>
        <AnimatedElement
      direction="up"
      delay={0.8}>
        <div className="absolute  left-[48%]  animate-bounce my-8">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
    </div>
    </AnimatedElement>
    <AnimatedElement
      direction="up"
      delay={1}>
        <ServicesCarousel />
        </AnimatedElement>
      </section>
      <section className="py-12">
      <AnimatedElement
      direction="up"
      delay={0.2}>
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl  font-pushkin font-semibold text-center mb-12 ">
         Замовити продукцію онлайн
        </h2>
        </AnimatedElement>
        <AnimatedElement
      direction="up"
      delay={0.4}>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-2xl mb-4 text-center ">
          Відвідайте наш онлайн магазин, щоб придбати професійну косметику для волосся:
        </p>
        </AnimatedElement>
        <div className="flex justify-center">
        <AnimatedElement
      direction="up"
      delay={0.6}>
          <Link
            to="/product"
            className="rounded border-2 border-white/50 bg-black bg-opacity-15 backdrop-blur-md px-4 py-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl xll:4xl font-light text-white shadow-sm duration-200 ease-out hover:bg-black/30 hover:text-white active:scale-95 mobile-landscape:text-base"
          >
            Перейти до магазину
          </Link>
          </AnimatedElement>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
