import React from "react";
import "./BrandIntroduction.css";
import AnimatedElement from "../AnimatedElement/AnimatedElement";
const BrandIntroduction = () => {
  return (
    <div className="mx-auto py-16 pt-24 bg-light-gray-green">
      <h2 className="text-2xl sm:text-3xl md:text-6xl font-forum text-center mb-4 xl:mb-8 text-white px-4">
        <AnimatedElement direction="up" delay={0.2}>
          <span className="font-pushkin text-6xl md:text-8xl lg:text-[140px] text-soft-sand mr-4">
            Привіт,
          </span>
          <span className="text-wrap">це бренд</span>
        </AnimatedElement>
        <AnimatedElement
          direction="up"
          delay={0.4}
          className="relative flex justify-center items-center py-6 md:py-12"
        >
          <svg className="oval absolute w-[400px] h-[200px] scale-[0.65] md:scale-[1.2] lg:scale-[1.9] lg:w-[400px] lg:h-[200px]">
            <path
              d="M 160,70 C 300,30 360,130 150,150 C 30,160 110,55 200,50"
              fill="none"
              stroke="#968625"
              strokeWidth="3"
            />
          </svg>
          <div className="z-20 text-6xl md:text-8xl lg:text-[140px]">
            TAKOSTA
          </div>
        </AnimatedElement>
      </h2>
      <AnimatedElement
        direction="up"
        delay={0.6}
        className="mx-auto lg:py-10 px-4 md:px-4 lg:px-6 xl:px-12 text-lg   md:text-xl lg:text-3xl xl:text-4xl leading-relaxed text-center text-white font-sans"
      >
        <p>Вітає вас у світі краси та догляду!</p>
        <p>
          У всі віки прекрасна половина людства вигадувала щось незвичайне, щоб
          турбуватися про свою красу…
        </p>
        <p>
          Наша місія - робити ваше волосся сильним, здоровим і блискучим,
          даруючи вам впевненість у собі кожен день.
        </p>
        <p>Дозвольте собі доторкнутися до справжньої магії…</p>
        <p>
          TAKOSTA об’єднує в собі високу якість та індивідульний підхід, щоб
          кожна красуня мала змогу насолоджуватися красою та здоров’ям свого
          волосся.
        </p>
        <p>
          Висока якість та професійний підхід - ось основні принципи, на яких
          ґрунтується наша продукція. Ми обираємо тільки найкращі інгредієнти,
          щоб забезпечити найкращі результати для вашого волосся та шкіри
          голови.
        </p>
        <p>
          Приєднуйтесь до нас у подорожі до краси і дбайте про себе разом з ТМ
          «TAKOSTA».
        </p>
      </AnimatedElement>
    </div>
  );
};

export default BrandIntroduction;
