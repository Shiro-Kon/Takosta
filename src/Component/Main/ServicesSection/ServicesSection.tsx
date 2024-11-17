import React, { useState } from "react";
import AnimatedElement from "../../AnimatedElement/AnimatedElement";
import ServiceMainCard from "./ServiceMainCard";
import { Link } from "react-router-dom";
import ContactModal from "../../Contac/ContactModal";
import { motion } from "framer-motion";

const ServicesSection: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);

  const openContactModal = () => setContactOpen(true);
  const closeContactModal = () => setContactOpen(false);

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      {/* Заголовок секции */}
      <AnimatedElement
        direction="left"
        delay={0.2}
        className="text-[45px] md:text-6xl lg:text-7xl xl:text-8xl xxl:text-9xl font-pushkin text-white text-center mb-6"
      >
        <span className="text-olive-green text-5xl md:text-6xl lg:text-7xl xl:text-8xl xxl:text-[170px]">
          Послуги{" "}
        </span>
        <br />
        <div className="text-sage-green mt-4 text-4xl md:text-5xl lg:text-6xl">
          які ми надаємо
        </div>
      </AnimatedElement>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div onClick={openContactModal}>
            <ServiceMainCard
              image="./Images/Servise/Servise1.png"
              buttonText="Записатися на консультацію"
              onClick={() => console.log("Book consultation")}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link to="/product">
            <ServiceMainCard
              image="./Images/Servise/21.jpeg"
              buttonText="Перейти до каталогу"
              onClick={() => console.log("Make order")}
            />
          </Link>
        </motion.div>
      </motion.div>

      <ContactModal isOpen={contactOpen} onClose={closeContactModal} />
    </div>
  );
};

export default ServicesSection;
