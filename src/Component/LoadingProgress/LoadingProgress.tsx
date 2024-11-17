import React from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  fadeOut: boolean; // Управляет анимацией исчезновения
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ fadeOut }) => {
  return (
    <motion.div
      className={`fixed inset-0 bg-sage-green/100 z-50 flex flex-col items-center justify-center ${
        fadeOut ? 'opacity-0 transition-opacity duration-500' : 'opacity-100'
      }`}
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Анимация точек */}
      <motion.div className="relative flex space-x-4 mb-6">
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="w-8 h-8 bg-white rounded-full"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
              delay: index * 0.3,
            }}
          />
        ))}
      </motion.div>

      {/* Текст */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          delay: 0.5,
        }}
        className="text-white text-lg sm:text-xl lg:text-2xl text-center px-4"
      >
        Завантажуємо красу для вас...
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
