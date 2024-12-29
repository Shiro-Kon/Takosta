import React from 'react';
import ImagesBlockArry, { ImagesBlockData } from '../../Utils/ImagesBlockArry';
import AnimatedElement from '../AnimatedElement/AnimatedElement';

const ImagesBlock: React.FC = () => {
  return (
    <div className="container mx-auto w-[90%] ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
        {ImagesBlockArry.map((item: ImagesBlockData) => (
          <AnimatedElement direction="left" delay={0.1}
            key={item.id}
            className="relative "
          >
            
              <img src={item.image}
                alt={`Product ${item.id}`}
                className="relative  w-full h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] xxl:h-[600px] object-cover rounded-3xl overflow-hidden cursor-pointer  duration-300  p-6 md:p-0 md:m-4 hover:scale-105" />



          </AnimatedElement>
        ))}
      </div>
    </div>
  );
};

export default ImagesBlock;
