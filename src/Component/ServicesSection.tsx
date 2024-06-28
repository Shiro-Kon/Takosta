import React from 'react';
import AnimatedElement from './AnimatedElement/AnimatedElement';

interface ServiceProps {
  title: string;
  image: string;
  buttonText: string;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, image, buttonText, onClick }) => (
  <div className="flex flex-col items-center">
    <h3 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl xxl:text-5xl text-white mb-8">{title}</h3>
    <div className="relative mb-4">
      <img src={image} alt={title} className="w-[350px] lg:w-[400px] xl:w-[450px] xxl:w-[550px] h-[350px] lg:h-[400px] xl:h-[450px] xxl:h-[550px] rounded-sm  object-cover" />
      <button 
        onClick={onClick}
        className="absolute -bottom-6  -right-2 lg:-right-8 uppercase bg-white py-4 px-6 text-white font-semibold h-[80px] w-[250px] md:h-[80px] md:w-[250px] lg:h-[90px] lg:w-[300px]   xl:h-[100px] xl:w-[400px]  bg-black bg-opacity-15 backdrop-blur-md text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl xll:2xl font-light shadow-sm  duration-200 ease-out hover:bg-black/30 hover:text-white active:scale-95 mobile-landscape:text-base"
      >
        {buttonText}
      </button>
    </div>
  </div>
);

const ServicesSection: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <AnimatedElement direction="left" delay={0.4} className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl  leading-relaxed font-sans text-white text-center mb-12">ПОСЛУГИ ЯКІ МИ НАДАЄМО</AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-2  sm:gap-16 md:gap-8">
          <AnimatedElement direction="left" delay={0.6}>
          <ServiceCard
            title="НАША СТУДІЯ КРАСИ"
            image="./Images/Servise/Servise1.png"
            buttonText="ЗАПИСАТИСЯ НА КОНСУЛЬТАЦІЮ"
            onClick={() => console.log('Book consultation')}
          />
          </AnimatedElement>
          <AnimatedElement direction="left" delay={0.4}>
          <ServiceCard
            title="НАШ ОНЛАЙН МАГАЗИН"
            image="./Images/Servise/Servise2.png"
            buttonText="ЗРОБИТИ ЗАМОВЛЕННЯ"
            onClick={() => console.log('Make order')}
          />
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;