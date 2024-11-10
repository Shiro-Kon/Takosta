import React, { useState } from "react";
import AnimatedElement from "../../AnimatedElement/AnimatedElement";
import ServiceMainCard from "./ServiceMainCard";
import { Link } from "react-router-dom";
import ContactModal from "../../Contac/ContactModal";





const ServicesSection: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);


 

  return (
      <div className="container mx-auto px-4">
        <AnimatedElement
          direction="left"
          delay={0.4}
          className="text-[45px] md:text-6xl lg:text-7xl xl:text-8xl  xxl:text-9xl font-pushkin text-white text-center mb-6"
        >
          <span className="text-olive-green text-5xl md:text-6xl lg:text-7xl  xl:text-8xl xxl:text-[170px]">
            Послуги{" "}
          </span>
          <br /> <div className="text-sage-green mt-4 ">які ми надаємо</div>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-2  sm:gap-4 md:gap-4 xl:gap-0">
          <AnimatedElement direction="left" delay={0.6}>
          <div
                 onClick={() => setContactOpen(true)}
                
              >
            <ServiceMainCard
              title="Наша студія краси"
              image="./Images/Servise/Servise1.png"
              buttonText="Записатися на консультацію"
              onClick={() => console.log("Book consultation")}
            />
            </div>
          </AnimatedElement>
          <AnimatedElement direction="left" delay={0.4}>
          <Link
                to="/product"
                
              >
            <ServiceMainCard
              title="Наш онлайн магазин"
              image="./Images/Servise/Servise2.png"
              buttonText="Зробити замовлення"
              onClick={() => console.log("Make order")}
            />
            </Link>
          </AnimatedElement>
        </div>
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
};

export default ServicesSection;
