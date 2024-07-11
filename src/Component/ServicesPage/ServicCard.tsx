import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Service } from '../../Utils/servicesData';
import AnimatedElement from '../AnimatedElement/AnimatedElement';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const handleMouseEnter = () => {
    setIsHovered(true);
    controls.start({ height: '60%' });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    controls.start({ height: '20%' });
  };

  return (
    <AnimatedElement direction="up" delay={0.6}>
      <motion.div

        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="cursor-pointer relative duration-300 overflow-hidden rounded-[50px]">
          <img
            src={service.image}
            alt={service.title}
            className="relative w-full h-[450px] md:h-[450px] lg:h-[550px] xl:h-[550px] xxl:h-[650px] object-cover overflow-hidden rounded-[50px]"
          />
          <motion.div
            initial={{ height: '22%' }}
            animate={{ height: isHovered ? '60%' : '22%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute bottom-0 left-0 right-0 text-white bg-black bg-opacity-35 backdrop-blur-sm p-6 text-center overflow-hidden rounded-t-[50px] "
          >
            <h2 className="text-xl md:text-xl lg:text-3xl xl:text-2xl xxl:text-4xl font-light text-white font-sans my-2 xll:my-4">
              {service.title}
            </h2>
            {isHovered && (
              <>
                <p className="text-lg md:text-sm lg:text-xl xl:text-lg xxl:text-xl font-light mb-2 xll:mb-4">
                  {service.priceRange}
                </p>
                <p className="text-md md:text-sm lg:text-lg xl:text-sm xxl:text-lg mb-4 xxl:mb-6">
                  {service.description}
                </p>
              </>
            )}
          </motion.div>
        </div>
      </motion.div>
    </AnimatedElement>
  );
};

export default ServiceCard;
