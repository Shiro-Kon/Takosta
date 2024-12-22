import { useEffect, useState } from "react";
import { FaExpand } from "react-icons/fa";
import { FiMaximize } from "react-icons/fi";
import { BiExpandAlt } from "react-icons/bi";


import { beforeAfterData } from "../../Utils/beforeAndAfterData";

const BeforeAfterImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string>("");
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isFullscreen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  const toggleFullscreen = (image: string) => {
    setIsFullscreen(!isFullscreen);
    setFullscreenImage(image);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % beforeAfterData.length);
    setShowAfter(false);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + beforeAfterData.length) % beforeAfterData.length
    );
    setShowAfter(false);
  };

  const { before, after, alt, procedure, issues } = beforeAfterData[currentIndex];

  return (
    <section className="container mx-auto px-4">
      <h2 className="font-pushkin text-5xl md:text-7xl text-center text-olive-green mb-6">До і після</h2>

      <div className="flex flex-col gap-6 items-start md:flex-row">
        {/* Карточка изображений */}
        <div className="relative w-full md:w-1/2 h-[500px] bg-gray-100 rounded-3xl shadow-lg overflow-hidden flex flex-col group">
          <div
            className="relative flex-1 cursor-pointer"
            onClick={() => setShowAfter(!showAfter)}
          >
            <img
              src={before}
              alt={`Фото до: ${alt}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                showAfter ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src={after}
              alt={`Фото після: ${alt}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                showAfter ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* Иконка для увеличения изображения */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              className="text-white bg-black bg-opacity-50 rounded-xl p-2 "
              onClick={() => toggleFullscreen(showAfter ? after : before)}
            >
              <BiExpandAlt size={20} />
            </button>
          </div>

          <div className="absolute top-4 left-4 backdrop-blur-sm bg-black/50 text-white text-xl  px-4 py-1 rounded-xl">
            {showAfter ? "Після" : "До"}
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex justify-between">
            <button
              onClick={handlePrev}
              className="px-4 py-2 backdrop-blur-sm bg-black/50 text-white rounded-xl duration-300 active:scale-95"
            >
              Назад
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 backdrop-blur-sm bg-black/50 text-white rounded-xl duration-300 active:scale-95"
            >
              Далі
            </button>
          </div>
        </div>

        {/* Описание */}
        <div className="w-full md:w-1/2 text-wrap sm:text-center md:text-left flex flex-col  content-start">
          <h3 className="text-2xl md:text-3xl lg:text-4xl  font-light text-sage-green   mb-2 lg:mb-6 ">Процедура: {procedure}</h3>
          <p className="text-sm md:text-sm lg:text-md xl:text-xl xxl:text-3xl font-sans text-olive-drab my-4 xl:my-6 text-balance break-words ">
            {issues && issues.length ? (
              <>
                <strong>Проблеми:</strong>
                <ul className=" ">
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

      {/* Полноэкранное изображение */}
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
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
