import { useEffect, useState, useCallback } from "react";
import { BiExpandAlt } from "react-icons/bi";
import { beforeAfterData } from "../../Utils/beforeAndAfterData";
import { motion } from "framer-motion";
import AnimatedElement from "../AnimatedElement/AnimatedElement";

const BeforeAfterImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string>("");
  const [showAfter, setShowAfter] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false); // Для блокировки переходов во время анимации

  // Эффект для скрытия скроллинга при открытом полноэкранном режиме
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  // Функция для переключения полноэкранного режима
  const toggleFullscreen = useCallback((image: string) => {
    setFullscreenImage(image);
    setIsFullscreen((prev) => !prev);
  }, []);

  // Функции для переключения слайдов с таймаутами
  const handleNext = useCallback(() => {
    if (isTransitioning) return; // Блокируем переход, пока идет анимация
    setIsTransitioning(true);
    setShowAfter(false);

    // Задержка перед переходом к следующему изображению
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % beforeAfterData.length);
      setIsTransitioning(false);
    }, 100); // Время анимации перехода
  }, [isTransitioning]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return; // Блокируем переход, пока идет анимация
    setIsTransitioning(true);
    setShowAfter(false);

    // Задержка перед переходом к предыдущему изображению
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + beforeAfterData.length) % beforeAfterData.length);
      setIsTransitioning(false);
    }, 100); // Время анимации перехода
  }, [isTransitioning]);

  const { before, after, alt, procedure, issues } = beforeAfterData[currentIndex];

  return (
    
    <section className="container mx-auto px-4 duration-300">
      <AnimatedElement
      direction="left"
      delay={0.1}
    >
      <h2 className="font-pushkin text-5xl md:text-7xl text-center text-olive-green mb-6">До і після</h2>
      </AnimatedElement>
      <AnimatedElement
      direction="left"
      delay={0.2}
    >
      <div className="flex flex-col gap-6 items-start md:flex-row">
        <div className="relative w-full md:w-1/2 h-[500px]  rounded-3xl shadow-lg overflow-hidden flex flex-col group">
          <motion.div
            key={currentIndex} // Используем ключ для анимации изменения контента
            className="relative flex-1 cursor-pointer  bg-black"
            onClick={() => setShowAfter((prev) => !prev)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}

          >
            <motion.img
              src={before}
              alt={`Фото до: ${alt}`}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                showAfter ? "opacity-0" : "opacity-100"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: showAfter ? 0 : 1 }}
              transition={{ duration: 0.7 }}
            />
            <motion.img
              src={after}
              alt={`Фото після: ${alt}`}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                showAfter ? "opacity-100" : "opacity-0"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: showAfter ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            />
          </motion.div>

          {/* Иконка для увеличения изображения */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              className="text-white bg-black bg-opacity-50 rounded-xl p-2 duration-300 "
              onClick={() => toggleFullscreen(showAfter ? after : before)}
            >
              <BiExpandAlt size={20} />
            </button>
          </div>

          <div className="absolute top-4 left-4 backdrop-blur-sm bg-black/50 text-white text-xl px-4 py-1 rounded-xl">
            {showAfter ? "Після" : "До"}
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex justify-between">
            <button
              onClick={handlePrev}
              className="px-4 py-2 backdrop-blur-sm bg-black/50 text-white rounded-xl duration-300 hover:scale-[105%] active:scale-95"
            >
              Назад
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 backdrop-blur-sm bg-black/50 text-white rounded-xl duration-300 hover:scale-[105%] active:scale-95"
            >
              Далі
            </button>
          </div>
        </div>

        {/* Описание */}
        <div className="w-full md:w-1/2 text-wrap sm:text-center md:text-left flex flex-col content-start">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-sage-green mb-2 lg:mb-6 ">
            Процедура: {procedure}
          </h3>
          <p className="text-sm md:text-sm lg:text-md xl:text-xl xxl:text-3xl font-sans text-olive-drab my-4 xl:my-6 text-balance break-words ">
            {issues && issues.length ? (
              <>
                <strong>Проблеми:</strong>
                <ul>
                  {issues.map((issue, index) => (
                    <li key={index}>{issue}</li>
                  ))}
                </ul>
              </>
            ) : (
              "Проблем не було під час процедури."
            )}
          </p>
        </div>
      </div>
      </AnimatedElement>

      {/* Полноэкранное изображение */}
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 duration-300"
          onClick={() => setIsFullscreen(false)}
        >
          <img
            src={fullscreenImage}
            alt={`Полноэкранное изображение: ${alt}`}
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </section>
  );
};

export default BeforeAfterImages;
