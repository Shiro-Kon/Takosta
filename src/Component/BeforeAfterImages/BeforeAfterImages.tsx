import { useEffect, useState } from "react";
import AnimatedElement from "../AnimatedElement/AnimatedElement";
import { FaSearchPlus } from "react-icons/fa"; // Иконка увеличения
import { beforeAfterData } from "../../Utils/beforeAndAfterData";

const BeforeAfterImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string>(""); // Изначально строка, а не null
  const [showAfter, setShowAfter] = useState(false); // Для переключения между "до" и "после"

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden"; // Блокируем прокрутку
    } else {
      document.body.style.overflow = ""; // Восстанавливаем прокрутку
    }
    return () => {
        document.body.style.overflow = "";
      };
    }, [isFullscreen]);

  const toggleFullscreen = (image: string, isAfter: boolean) => {
    setIsFullscreen(!isFullscreen);
    if (!isFullscreen) {
      setFullscreenImage(image);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % beforeAfterData.length);
    setShowAfter(false); // Сбрасываем отображение "после" при переключении на следующую карточку
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + beforeAfterData.length) % beforeAfterData.length
    );
    setShowAfter(false); // Сбрасываем отображение "после"
  };

  const { before, after, alt, procedure, issues } = beforeAfterData[currentIndex];

  

  return (
    <section className="mx-auto w-[90%]">
      <h2 className="font-forum text-center mb-8 xl:mb-10 px-4">
        <AnimatedElement direction="up" delay={0.2}>
          <span className="font-pushkin text-5xl md:text-7xl text-olive-green mr-4">
            До і після
          </span>
        </AnimatedElement>
      </h2>

      <div className="relative flex flex-wrap justify-between">
        {/* Сетка карточек с описанием */}
        <AnimatedElement
          direction="visibility"
          delay={0.3}
          className="flex flex-col md:flex-row mb-4 text-wrap sm:text-center md:text-left sm:px-6 px-4 duration-300"
        >
          <div className="relative overflow-hidden rounded-3xl group cursor-pointer w-full sm:w-full md:w-[calc(50%-20px)] lg:w-[calc(50%-20px)] xl:w-[calc(50%-20px)]">
            <div
              className="w-full h-[500px] object-cover rounded-3xl overflow-hidden group-hover:scale-105 duration-500 transition-transform"
              onClick={() => setShowAfter(!showAfter)} // Убираем затемнение
            >
              <img
                src={before}
                alt={`Фото до: ${alt}`}
                className={`rounded-3xl object-cover w-full h-full transition-opacity duration-500 ${showAfter ? "opacity-0" : "opacity-100"}`}
              />
              <img
                src={after}
                alt={`Фото після: ${alt}`}
                className={`rounded-3xl object-cover w-full h-full absolute inset-0 transition-opacity duration-500 ${showAfter ? "opacity-100" : "opacity-0"}`}
              />
            </div>

            {/* Иконка увеличения, только для области нажатия на картинку */}
            <div
              className="absolute top-4 right-4 cursor-pointer z-10"
              onClick={(e) => {
                e.stopPropagation(); // Останавливаем событие для предотвращения переключения "до" и "после"
                toggleFullscreen(showAfter ? after : before, showAfter); // Открываем изображение в полный экран в зависимости от "до" или "после"
              }}
            >
              <FaSearchPlus className="text-white text-3xl" />
            </div>

            {/* Текст "До" или "После" */}
            <div className="absolute top-4 left-4  backdrop-blur-sm bg-sage-green/45  text-white text-xl font-semibold p-3 rounded-md">
              {showAfter ? "Після" : "До"}
            </div>
          </div>

        {/* Описание процесса и проблемы */}
          <div className="w-full md:w-[50%] sm:mt-4 font-forum ml-6">
            <h3 className="text-4xl md:text-4xl font-light text-sage-green mb-2 lg:mb-6">
              Процедура: {procedure}
            </h3>
            <p className="text-sm md:text-sm lg:text-md xl:text-xl xxl:text-3xl font-sans text-olive-drab my-4 xl:my-6 text-balance break-words">
              {issues && issues.length > 0 ? (
                <>
                  <span className="font-semibold">Проблеми:</span>
                  <ul className="list-disc pl-5">
                    {issues.map((issue, index) => (
                      <li key={index}>{issue}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <span>Проблем не було під час процедури.</span>
              )}
            </p>
          </div>
        </AnimatedElement>

        {/* Кнопки "вперед" и "назад" */}
        <AnimatedElement
          direction="visibility"
          delay={0.4}>
        <div className="flex justify-start gap-2 mt-4 ml-4 w-full">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-olive-green text-white rounded-lg hover:bg-dark-green transition-colors"
          >
            Попереднє
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-olive-green text-white rounded-lg hover:bg-dark-green transition-colors"
          >
            Наступне
          </button>
        </div>
        </AnimatedElement>
        {/* Полноэкранный режим */}
        {isFullscreen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex justify-center items-center"
          onClick={() => setIsFullscreen(false)} // Закрытие полноэкранного изображения при клике за пределы
        >
          <img
            src={fullscreenImage || ""}
            alt={`Фото: ${alt}`}
            className="w-full h-auto max-w-4xl max-h-full object-contain"
          />
        </div>
      )}
      </div>
    </section>
  );
};

export default BeforeAfterImages;
