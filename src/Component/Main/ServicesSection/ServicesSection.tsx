import React, { useState, useCallback } from "react";
import ServiceMainCard from "./ServiceMainCard";
import { Link } from "react-router-dom";
import ContactModal from "../../Contac/ContactModal";
import { FadeInText, ScrollAnimation, SlideInComponent } from "../../animation/FadeInText";

const ServicesSection: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);

  const openContactModal = useCallback(() => setContactOpen(true), []);
  const closeContactModal = useCallback(() => setContactOpen(false), []);

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="text-[45px] md:text-6xl lg:text-7xl xl:text-8xl xxl:text-9xl font-pushkin text-white text-center mb-6">
        <FadeInText delay={200} duration={700}>
          <span className="text-olive-green text-5xl md:text-6xl lg:text-7xl xl:text-8xl xxl:text-[170px]">
            Послуги{" "}
          </span>
        </FadeInText>
        <br />
        <FadeInText delay={400} duration={700}>
          <div className="text-sage-green mt-4 text-4xl md:text-5xl lg:text-6xl">
            які ми надаємо
          </div>
        </FadeInText>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          <ScrollAnimation threshold={0.1} offset={20}>
            <div onClick={openContactModal}>
              <SlideInComponent direction="left">
                <ServiceMainCard
                  image="./Images/Servise/Servise1.png"
                  buttonText="Записатися на консультацію"
                  onClick={openContactModal}
                />
              </SlideInComponent>
            </div>
          </ScrollAnimation>

          <ScrollAnimation threshold={0.1} offset={20}>
            <Link to="/product">
              <SlideInComponent direction="right">
                <ServiceMainCard
                  image="./Images/Servise/21.jpeg"
                  buttonText="Перейти до каталогу"
                  onClick={() => console.log("Navigating to product catalog")}
                />
              </SlideInComponent>
            </Link>
          </ScrollAnimation>
        </div>
      </div>

      <ContactModal isOpen={contactOpen} onClose={closeContactModal} />
    </div>
  );
};

export default ServicesSection;
