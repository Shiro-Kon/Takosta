import React from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  fadeOut: boolean; 
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ fadeOut }) => {
  return (
    <motion.div
      className={`fixed inset-0 bg-sage-green/80 backdrop-blur-md z-50 flex flex-col items-center justify-center ${
        fadeOut ? 'opacity-0 transition-opacity duration-500' : 'opacity-100'
      }`}
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loader">
        <div></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          delay: 0.5,
        }}
        className="text-white font-sans text-lg sm:text-xl lg:text-3xl text-center px-4 mt-4"
      >
        Завантажуємо красу для вас...
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
