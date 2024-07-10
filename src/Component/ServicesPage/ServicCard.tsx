
import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../../Utils/servicesData';

interface ServiceCardProps {
  service: Service;
  onClick: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
    return (
        <motion.div
          className="rounded-[50px] lg:rounded-[60px] xl:rounded-[70px] xxl:rounded-[80px] shadow-md overflow-hidden cursor-pointer relative duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onClick(service)}
        >
          <img src={service.image} alt={service.title} className="relative  w-full h-[450px] md:h-[450px] lg:h-[550px] xl:h-[550px] xxl:h-[650px] object-cover" />
          <div className="absolute bottom-0 left-0 right-0 max-h-[60%] text-white  bg-black bg-opacity-35 backdrop-blur-sm p-6  text-center rounded-t-[50px] lg:rounded-t-[60px] xl:rounded-t-[70px] xxl:rounded-t-[80px]">
            <h2 className="text-xl md:text-xl lg:text-3xl xl:text-2xl xxl:text-4xl font-light text-white font-sans my-2 xll:my-4">{service.title}</h2>
            <p className="text-lg md:text-sm lg:text-xl xl:text-lg xxl:text-xl font-light mb-2 xll:mb-4">{service.priceRange}</p>
            <p className="text-md md:text-sm lg:text-lg xl:text-sm xxl:text-lg mb-4  xxl:mb-6">{service.description}</p>
          </div>
        </motion.div>
      );
    };

export default ServiceCard;