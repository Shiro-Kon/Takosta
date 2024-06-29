import React, { useState } from "react";
import AnimatedElement from "../Component/AnimatedElement/AnimatedElement";

const DeliveryPaymentPage: React.FC = () => {
  const [openDelivery, setOpenDelivery] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);
  const [openReturns, setOpenReturns] = useState(false);
  const [openWorldwide, setOpenWorldwide] = useState(false);

  const toggleDelivery = () => {
    setOpenDelivery(!openDelivery);
  };

  const togglePayment = () => {
    setOpenPayment(!openPayment);
  };

  const toggleTerms = () => {
    setOpenTerms(!openTerms);
  };

  const toggleReturns = () => {
    setOpenReturns(!openReturns);
  };

  const toggleWorldwide = () => {
    setOpenWorldwide(!openWorldwide);
  };

  return (
    <main className="pt-[50px] lg:pt-[200px] flex justify-center min-h-screen bg-grayish-beige text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-0 md:gap-8">
          <div className="mb-8 md:mb-0 md:mx-16">
            <AnimatedElement
              direction="up"
              delay={0.4}
              className="text-3xl md:text-5xl lg:text-7xl xl:text-6xl xxl:text-8xl font-serif font-bold mb-4 md:mb-6 lg:mb-14"
            >
              Доставка та оплата
            </AnimatedElement>
            <AnimatedElement direction="up" delay={0.7}>
              <p className="text-xl md:text-2xl lg:text-2xl xl:text-xl xxl:text-2xl mb-4 md:mb-6 lg:mb-12">
                У нас є 2 способи доставки та 3 способи оплати, ви можете
                скористатись найбільш зручним для вас.
              </p>
            </AnimatedElement>
            <AnimatedElement direction="up" delay={1}>
              <p className="text-xl md:text-2xl lg:text-2xl xl:text-xl xxl:text-2xl font-bold mb-4">
                ЗВЕРНІТЬ УВАГУ! Посилка зберігається на відділенні 5 днів.
              </p>
            </AnimatedElement>
          </div>

          <AnimatedElement direction="right" delay={1.2} className="mb-14 md:mx-16">
            <details className="mb-6">
              <summary
                className="cursor-pointer font-medium text-white flex justify-between items-center text-2xl md:text-3xl xl:text-4xl xxl:text-5xl select-none"
                onClick={toggleDelivery}
              >
                Способи доставки
                <span
                  className={`transform transition-transform duration-300 ${openDelivery ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </summary>
              <div
                className={`mt-6 pl-4 border-l-2 border-gray-300 overflow-hidden transition-all duration-300 ${openDelivery ? "max-h-[1000px]" : "max-h-0"}`}
              >
                <div className="grid gap-10">
                  <div className="bg-white shadow-lg rounded-lg p-6 text-gray-700">
                    <img
                      src="./Images/Nova/Nova.svg"
                      alt="Nova Poshta"
                      className="w-14 h-14 object-scale-down mb-4"
                    />
                    <div className="font-bold text-lg mb-2">
                      Нова Пошта на склад
                    </div>
                    <p className="text-lg mb-4">
                      Безкоштовна доставка від будь-якої суми. Відправка
                      протягом 1-10 робочих днів, при накладеному платежі,
                      повернення коштів оплачує клієнт. В період акцій термін
                      доставки та очікування може бути продовженим.
                    </p>
                  </div>
                  <div className="bg-white shadow-lg rounded-lg p-6 text-gray-700">
                    <img
                      src="./Images/Nova/Nova.svg"
                      alt="Nova Poshta"
                      className="w-14 h-14 object-scale-down mb-4"
                    />
                    <div className="font-bold text-lg mb-2">
                      Нова Пошта кур’єром
                    </div>
                    <p className="text-lg mb-4">
                      Безкоштовна доставка від будь-якої суми. Відправка
                      протягом 1-10 робочих днів, при накладеному платежі,
                      повернення коштів оплачує клієнт. В період акцій термін
                      доставки та очікування може бути продовженим.
                    </p>
                  </div>
                </div>
              </div>
            </details>

            <details className="mb-6">
              <summary
                className="cursor-pointer font-medium text-white flex justify-between items-center text-2xl md:text-3xl xl:text-4xl xxl:text-5xl select-none"
                onClick={togglePayment}
              >
                Способи оплати
                <span
                  className={`transform transition-transform duration-300 ${openPayment ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </summary>
              <div
                className={`mt-6 pl-4 border-l-2 border-gray-300 overflow-hidden transition-all duration-300 ${openPayment ? "max-h-[1000px]" : "max-h-0"}`}
              >
                <div className="grid gap-10">
                  <div className="bg-white shadow-lg rounded-lg p-6 text-gray-700">
                    <div className="flex flex-row gap-6">
                      <img
                        src="./Images/Nova/A.svg"
                        alt="Nova Poshta"
                        className="w-14 h-14 object-scale-down mb-4"
                      />
                      <img
                        src="./Images/Nova/G.svg"
                        alt="Nova Poshta"
                        className="w-14 h-14 object-scale-down mb-4"
                      />
                    </div>
                    <div className="font-bold text-lg mb-2">Оплата онлайн</div>
                    <p className="text-lg mb-4">
                      Оплатіть онлайн своє замовлення безпосередньо на сайті
                    </p>
                  </div>
                  <div className="bg-white shadow-lg rounded-lg p-6 text-gray-700">
                    <img
                      src="./Images/Nova/Nova.svg"
                      alt="Nova Poshta"
                      className="w-14 h-14 object-scale-down mb-4"
                    />
                    <div className="font-bold text-lg mb-2">При отриманні</div>
                    <p className="text-lg mb-4">
                      Оформіть замовлення і оплатіть його при отриманні.
                    </p>
                  </div>
                </div>
              </div>
            </details>

            <details className="mb-6">
              <summary
                className="cursor-pointer font-medium text-white flex justify-between items-center text-2xl md:text-3xl xl:text-4xl xxl:text-5xl select-none"
                onClick={toggleTerms}
              >
                Терміни та оплата доставки
                <span
                  className={`transform transition-transform duration-300 ${openTerms ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </summary>
              <div
                className={`mt-2 pl-4 border-l-2 border-gray-300 overflow-hidden transition-all duration-300 ${openTerms ? "max-h-[1000px]" : "max-h-0"}`}
              >
                <p>
                  Відправка відбувається компанією Нова пошта протягом 1-10
                  робочих днів.
                </p>
                <p>Комісія за накладений платіж оплачується отримувачем.</p>
              </div>
            </details>

            <details className="mb-6">
              <summary
                className="cursor-pointer font-medium text-white flex justify-between items-center text-2xl md:text-3xl xl:text-4xl xxl:text-5xl select-none"
                onClick={toggleReturns}
              >
                Обмін та повернення
                <span
                  className={`transform transition-transform duration-300 ${openReturns ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </summary>
              <div
                className={`mt-6 pl-4 border-l-2 border-gray-300 overflow-hidden transition-all duration-300 ${openReturns ? "max-h-[1000px]" : "max-h-0"}`}
              >
                <p>
                  Згідно постанови Кабінета Міністрів України від 19 березня
                  1994 р. № 172- парфюмерно-косметичні вироби обміну та
                  поверненню не підлягають.
                </p>
                <p>
                  Якщо упакування товару не пошкоджено (не відкрито), ви можете
                  повернути товар протягом 14 днів після покупки.
                </p>
                <p>
                  Якщо упакування пошкоджено, або товар використовувався - ви не
                  можете його повернути.
                </p>
              </div>
            </details>

            <details className="mb-6">
              <summary
                className="cursor-pointer font-medium text-white flex justify-between items-center text-2xl md:text-3xl xl:text-4xl xxl:text-5xl select-none"
                onClick={toggleWorldwide}
              >
                Доставка по світу
                <span
                  className={`transform transition-transform duration-300 ${openWorldwide ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </summary>
              <div
                className={`mt-6 pl-4 border-l-2 border-gray-300 overflow-hidden transition-all duration-300 ${openWorldwide ? "max-h-[1000px]" : "max-h-0"}`}
              >
                <p>
                  Відправка вашого замовлення за кордон відбувається після
                  повної оплати клієнтом компанією Укрпошта (або за необхідності
                  іншою компанією міжнародної доставки) в будь-яку країну та
                  місто світу.
                </p>
                <p>Доставка оплачується клієнтом.</p>
              </div>
            </details>
          </AnimatedElement>
        </div>
      </div>
    </main>
  );
};

export default DeliveryPaymentPage;
