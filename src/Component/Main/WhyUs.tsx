import React from "react";
import { BounceComponent, FadeInText, ScrollAnimation } from "../animation/FadeInText";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-olive-drab text-center break-words leading-relaxed font-sans">
    <div className="mb-4">
      <BounceComponent delay={200}>
        {icon}
      </BounceComponent>
    </div>
    <h3 className="mb-4 text-3xl lg:text-4xl">
      <FadeInText>{title}</FadeInText>
    </h3>
    <p className="text-sm lg:text-lg">
      <FadeInText delay={400}>{description}</FadeInText>
    </p>
  </div>
);

const WhyUs: React.FC = () => {
  return (
    <div className="mx-auto w-[90%] py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <FadeInText duration={1000}>
            <span className="font-pushkin text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-sage-green">
              Чому саме <span className="text-olive-green">ми?</span>
            </span>
          </FadeInText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
          <ScrollAnimation threshold={0.1} offset={20}>
            <Feature
              icon={
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
                  />
                </svg>
              }
              title="Професіоналізм"
              description="Бренд був заснован дійсним майстром"
            />
          </ScrollAnimation>

          <ScrollAnimation threshold={0.1} offset={20}>
            <Feature
              icon={
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  />
                </svg>
              }
              title="Якість"
              description="Ми обираємо тільки найкращі інгредієнти, щоб забезпечити найкращі результати для вашого волосся та шкіри голови."
            />
          </ScrollAnimation>

          <ScrollAnimation threshold={0.1} offset={20}>
            <Feature
              icon={
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"
                  />
                </svg>
              }
              title="Зоофрендлі"
              description="Не тестується на тваринах"
            />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
