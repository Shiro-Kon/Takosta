import React from 'react';
import ImagesBlockArry, { ImagesBlockData } from '../../Utils/ImagesBlockArry';
import AnimatedElement from '../AnimatedElement/AnimatedElement';
import { motion } from 'framer-motion';

const ImagesBlock: React.FC = () => {
  return (
    <div className="container mx-auto w-[90%] py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {ImagesBlockArry.map((item: ImagesBlockData) => (
          <AnimatedElement direction="left" delay={0.2} 
            key={item.id} 
            className="relative overflow-hidden"
          >
            <motion.div
          className="rounded-[50px] lg:rounded-[60px] xl:rounded-[70px] xxl:rounded-[80px]  overflow-hidden cursor-pointer relative duration-300 p-4" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
         
        >
            <img 
              src={item.image} 
              alt={`Product ${item.id}`}
              className="relative  w-full h-[450px] md:h-[450px] lg:h-[550px] xl:h-[550px] xxl:h-[650px] object-cover rounded-[50px]"
            />
            </motion.div>
            
            
          </AnimatedElement>
        ))}
      </div>
    </div>
  );
};

export default ImagesBlock;
