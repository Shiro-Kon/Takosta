import { motion } from 'framer-motion';
import React from 'react'

interface ServiceProps {
    image: string;
    buttonText: string;
    onClick: () => void;
  }

const ServiceMainCard: React.FC<ServiceProps> = ({
    image,
    buttonText,
    onClick,
  }) => (
    <div className="flex flex-col items-center ">
   
    
         <motion.div
          className='overflow-hidden duration-300 '
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="cursor-pointer relative   rounded-3xl ">
          <img
                src={image}
                alt={buttonText}
                className="w-[500px] h-[400px] object-cover rounded-3xl"
                loading="lazy"
              />
          <div className="absolute bottom-0 left-0 right-0 max-h-[60%] text-white  bg-black bg-opacity-35 backdrop-blur-sm p-6  text-center rounded-2xl overflow-hidden">
            <button onClick={onClick} className="text-xl md:text-xl lg:text-3xl xl:text-2xl xxl:text-4xl font-light text-white font-sans my-2 xll:my-4">{buttonText}</button>
          </div>
          </div>
        </motion.div>
    </div>
   

  );

export default ServiceMainCard