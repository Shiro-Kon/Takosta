import React, { useState } from "react";
import AnimatedElement from "../../AnimatedElement/AnimatedElement";
import ServiceMainCard from "./ServiceMainCard";
import { Link } from "react-router-dom";
import ContactModal from "../../Contac/ContactModal";

const ServicesSection: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      {/* Header */}
      <AnimatedElement
        direction="left"
        delay={0.4}
        className="text-[45px] md:text-6xl lg:text-7xl xl:text-8xl  xxl:text-9xl font-pushkin text-white text-center mb-6"
      >
        <span className="text-olive-green text-5xl md:text-6xl lg:text-7xl  xl:text-8xl xxl:text-[170px]">
          Послуги{" "}
        </span>
        <br />
        <div className="text-sage-green mt-4 text-4xl md:text-5xl lg:text-6xl">
          які ми надаємо
        </div>
      </AnimatedElement>

      {/* Grid layout for Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-8 lg:gap-10 xl:gap-12">
        <AnimatedElement direction="left" delay={0.6}>
          <div onClick={() => setContactOpen(true)}>
            <ServiceMainCard
              image="./Images/Servise/Servise1.png"
              buttonText="Записатися на консультацію"
              onClick={() => console.log("Book consultation")}
            />
          </div>
        </AnimatedElement>

        <AnimatedElement direction="left" delay={0.4}>
          <Link to="/product">
            <ServiceMainCard
              image="./Images/Servise/21.jpeg"
              buttonText="Перейти до каталогу"
              onClick={() => console.log("Make order")}
            />
          </Link>
        </AnimatedElement>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
};

export default ServicesSection;
