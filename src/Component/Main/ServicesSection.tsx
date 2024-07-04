import React from "react";
import AnimatedElement from "../AnimatedElement/AnimatedElement";

interface ServiceProps {
  title: string;
  image: string;
  buttonText: string;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceProps> = ({
  title,
  image,
  buttonText,
  onClick,
}) => (
  <div className="flex flex-col items-center ">
    <h3 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl xxl:text-7xl text-soft-sand mb-8 xxl:mb-12">
      {title}
    </h3>
    <div className="relative mb-4 drop-shadow-2xl">
      <img
        src={image}
        alt={title}
        className="w-[300px] lg:w-[400px] xl:w-[350px] xxl:w-[550px] h-[300px] lg:h-[400px] xl:h-[450px] xxl:h-[550px] rounded-sm  object-cover "
      />
      <button
        onClick={onClick}
        className="absolute -bottom-6 upperset -right-2 lg:-right-8 text-white font-semibold bg-black bg-opacity-35 backdrop-blur-md shadow-md  duration-200 ease-out hover:bg-black/30 hover:text-white active:scale-95 uppercase mobile-landscape:text-base w-3/4 lg:w-3/5 xl:w-4/6 xxl:w-3/5  h-16  xl:h-18  xxl:h-24 px-4 xxl:text-2xl"
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
        <AnimatedElement
          direction="left"
          delay={0.4}
          className="text-[45px] md:text-7xl lg:text-8xl xl:text-9xl  xxl:text-9xl font-pushkin text-white text-center mb-12"
        >
          <span className="text-soft-sand text-7xl md:text-8xl lg:text-9xl  xl:text-9xl xxl:text-[170px]">
            Послуги{" "}
          </span>
          <br /> <div className="text-soft-sand/50 mt-6  md:mt-4 xxl:mt-6">які ми надаємо</div>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-2  sm:gap-16 md:gap-8 xl:gap-0">
          <AnimatedElement direction="left" delay={0.6}>
            <ServiceCard
              title="Наша студія краси"
              image="./Images/Servise/Servise1.png"
              buttonText="Записатися на консультацію"
              onClick={() => console.log("Book consultation")}
            />
          </AnimatedElement>
          <AnimatedElement direction="left" delay={0.4}>
            <ServiceCard
              title="Наш онлайн магазин"
              image="./Images/Servise/Servise2.png"
              buttonText="Зробити замовлення"
              onClick={() => console.log("Make order")}
            />
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
