import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Service } from '../../Utils/servicesData';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <motion.div
      className="container mx-auto p-4 py-6"
      whileHover={{ scale: 1.03 }} 
      whileTap={{ scale: 0.97 }} 
      transition={{ duration: 0.7 }}
    >
      <div
        className="relative overflow-hidden rounded-3xl   shadow-lg cursor-pointer transition-all duration-500 transform hover:scale-105"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-[450px] object-cover rounded-3xl transition-all duration-300"
        />

        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent text-white p-6 "
          initial={{ opacity: 0, height: '25%' }}
          animate={{
            opacity: isHovered ? 1 : 0.8,
            height: isHovered ?  `${service.textHeight}%` : '25%',
          }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl md:text-2xl font-light">{service.title}</h2>
          {isHovered && (
            <>
              <p className="text-lg md:text-md font-light mt-2 mb-4">{service.priceRange}</p>
              <p className="text-md md:text-md pb-4">{service.description}</p>
              <p className='text-md md:text-md '>{service.additionalInfo}</p>
            </>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
