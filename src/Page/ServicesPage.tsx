

import { motion } from 'framer-motion';
import { services } from '../Utils/servicesData';
import ServiceCard from '../Component/ServicesPage/ServicCard';
import ConsultationInfo from '../Component/ServicesPage/ConsultationInfo';

import AnimatedElement from '../Component/AnimatedElement/AnimatedElement';


const ServicesPage: React.FC = () => {
  
  return (
    <div className="container mx-auto py-20 md:py-28 px-4 md:px-6 lg:px-8 max-w-4xl  xl:max-w-5xl xxl:max-w-6xl min-h-screen overflow-hidden ">
      
      <div className="container mx-auto ">
      <AnimatedElement
            direction="right"
            delay={0.1}>
        <h1 className="font-pushkin text-4xl md:text-5xl lg:text-6xl xl:text-7xl xxl:text-8xl text-sage-green text-center mb-4  px-4">
          <span className='text-olive-green'>Послуги</span> які ми надаємо
        </h1>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-2 ">
          {services.map((service) => (
            <AnimatedElement
            direction="up"
            delay={0.2}>
            <ServiceCard
              key={service.id}
              service={service}
            />
            </AnimatedElement>
          ))}
        </div>
        
        <ConsultationInfo />
      
        </div>
        <AnimatedElement
            direction="visibility"
            delay={0.2}>
        <motion.button
          className="mt-6 bg-olive-drab/50 backdrop-blur-sm text-white font-light py-3 px-6 rounded text-lg md:text-sm lg:text-xl xl:text-xl xxl:text-3xl shadow-sm mx-auto block hover:bg-olive-drab/60 active:scale-95 transition duration-200 ease-out"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Написати
        </motion.button>
        </AnimatedElement>
      </div>

      
  
  );
};

export default ServicesPage;