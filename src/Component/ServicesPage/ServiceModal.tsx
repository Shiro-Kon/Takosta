
import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../../Utils/servicesData';


interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            className="bg-white p-6 rounded-lg max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl xxl:text-5xl font-light text-sage-green font-forum mb-4">{service.title}</h2>
            <p className="text-lg md:text-md lg:text-xl xl:text-2xl xxl:text-3xl text-olive-drab mb-4">{service.description}</p>
            <p className="text-xl md:text-lg lg:text-2xl xl:text-3xl xxl:text-4xl font-semibold text-olive-green">{service.priceRange}</p>
            <button
              className="mt-6 bg-olive-drab/50 backdrop-blur-sm text-white font-light py-2 px-4 rounded text-lg md:text-sm lg:text-xl xl:text-xl xxl:text-2xl hover:bg-olive-drab/60 active:scale-95 transition duration-200 ease-out"
              onClick={onClose}
            >
              Закрити
            </button>
          </motion.div>
        </motion.div>
      );
    };

export default ServiceModal;