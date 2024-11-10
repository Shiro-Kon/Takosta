import React, { useEffect, lazy, Suspense } from 'react';
import HeroBlock from '../Component/Main/HeroBlock';
import Carousel from '../Component/Main/Carousel/Carousel';
import WhyUs from '../Component/Main/WhyUs';
import ServicesSection from '../Component/Main/ServicesSection/ServicesSection';
import ReviewsSection from '../Component/Main/ReviewsSection/ReviewsSection';
import ImageSlider from '../Component/ImageSlider/ImageSlider';




const Main: React.FC = () => {


  return (
    <div className='grid gap-y-20'>
    <HeroBlock/>
    <Carousel/>
    <WhyUs/>
    <ImageSlider/>
    <ServicesSection/>
    <ReviewsSection/>
    </div>
  );
};

export default Main;
