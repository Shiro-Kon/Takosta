import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Service, services } from '../Utils/servicesData';
import ServiceCard from '../Component/ServicesPage/ServicCard';
import ConsultationInfo from '../Component/ServicesPage/ConsultationInfo';

import AnimatedElement from '../Component/AnimatedElement/AnimatedElement';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);


  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    
  };

  return (
    <div className="container mx-auto py-6 md:py-16 flex justify-center min-h-screen text-olive-drab break-words">
      <div className="md:w-[90%] mx-auto">
        <div className="container mx-auto px-6 py-24">
          <AnimatedElement direction="right" delay={0.4}>
            <h1 className="font-pushkin text-5xl md:text-7xl lg:text-8xl xl:text-8xl xxl:text-[140px] text-sage-green text-center mb-4 xl:mb-16  px-4">
              <span className='text-olive-green'>Послуги</span> які ми надаємо
            </h1>
          </AnimatedElement>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
            {services.map((service) => (
              <AnimatedElement direction="up" delay={0.6} key={service.id}>
                <ServiceCard
                  service={service}
                  onClick={() => handleServiceClick(service)}
                />
              </AnimatedElement>
            ))}
          </div>
          
          <ConsultationInfo />
        
        </div>
        <AnimatedElement direction="right" delay={0.8}>
          <Link to="/contact">
            <motion.button
              className="mt-2 bg-olive-drab/50 backdrop-blur-sm text-white font-light py-3 px-6 rounded text-lg md:text-sm lg:text-xl xl:text-xl xxl:text-3xl shadow-sm mx-auto block hover:bg-olive-drab/60 active:scale-95 transition duration-200 ease-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Написати
            </motion.button>
          </Link>
        </AnimatedElement>
      </div>
    </div>
  );
};

export default ServicesPage;
