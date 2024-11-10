import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroBlock from '../Component/Main/HeroBlock';
import WhyUs from '../Component/Main/WhyUs';
import PhotoSlider from '../Component/Main/Photo_slider/PhotoSlider';
import Carousel from '../Component/Main/Carousel/Carousel';
import ServicesSection from '../Component/Main/ServicesSection/ServicesSection';
import ReviewsSection from '../Component/Main/ReviewsSection/ReviewsSection';

type MainProps = {
  onLoaded: () => void;
};

const Main: React.FC<MainProps> = ({ onLoaded }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoaded();
    }, 500);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <>
      <motion.div className="min-h-screen">
        <HeroBlock />
      </motion.div>
      <motion.div className="min-h-screen">
        <Carousel />
      </motion.div>
      <motion.div className="min-h-screen">
        <WhyUs />
      </motion.div>
      <motion.div className="min-h-screen">
        <PhotoSlider />
      </motion.div>
      <motion.div className="min-h-screen">
        <ServicesSection />
      </motion.div>
      <motion.div className="min-h-screen">
        <ReviewsSection />
      </motion.div>
    </>
  );
};

export default Main;
