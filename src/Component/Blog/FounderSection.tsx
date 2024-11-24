import { useState, useEffect } from "react";
import AnimatedElement from "../AnimatedElement/AnimatedElement";

const FounderSection = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      image: "./Images/sliderimgdata/20.webp",
      text: "Я засновник TAKOSTA. Наша місія — дарувати впевненість і красу кожному.",
    },
    {
      image: "./Images/sliderimgdata/25.webp",
      text: "Я прагну зробити вашу красу неперевершеною з кожним використанням TAKOSTA.",
    },
    {
      image: "./Images/sliderimgdata/20.webp",
      text: "TAKOSTA — це мій стиль життя, я вірю в натуральні інгредієнти для здоров’я вашого волосся.",
    },
  ];

  // Функции для переключения слайда
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Автоматическое переключение слайдов
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // смена каждые 5 секунд

    return () => clearInterval(timer); // очистка таймера при размонтировании компонента
  }, []);

  return (
    <section className="relative flex items-center justify-center h-screen">
      <div className="w-full h-full flex items-center justify-between">
        {/* Левая часть: изображение */}
        <div className="w-1/2 h-full overflow-hidden">
          <img
            src={slides[index].image}
            alt={`Founder's Image ${index + 1}`}
            className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-100"
          />
        </div>

        {/* Правая часть: текст */}
        <div className="w-1/2 h-full flex flex-col justify-center items-start px-8">
          <AnimatedElement direction="up" delay={0.3} className="">
            <span className="font-pushkin text-7xl md:text-7xl lg:text-8xl xl:text-8xl xxl:text-[140px] text-olive-green mr-4">Я засновник</span>
            <div className="z-20 text-6xl md:text-7xl lg:text-8xl xl:text-8xl xxl:text-[140px] text-olive-green font-forum">
            TAKOSTA
          </div>
          </AnimatedElement>

          <AnimatedElement direction="up" delay={0.5} className="text-xl font-sans text-olive-drab leading-relaxed mb-8">
            <p>{slides[index].text}</p>
          </AnimatedElement>

          {/* Кнопки для навигации */}
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="bg-olive-green text-white px-4 py-2 rounded-lg hover:bg-soft-sand transition duration-300"
            >
              Назад
            </button>
            <button
              onClick={nextSlide}
              className="bg-olive-green text-white px-4 py-2 rounded-lg hover:bg-soft-sand transition duration-300"
            >
              Вперед
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
