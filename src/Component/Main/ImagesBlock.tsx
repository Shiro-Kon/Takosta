import React from 'react';
import ImagesBlockArry, { ImagesBlockData } from '../../Utils/ImagesBlockArry';
import AnimatedElement from '../AnimatedElement/AnimatedElement';

const ImagesBlock: React.FC = () => {
  return (
    <div className="container mx-auto w-[90%] py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {ImagesBlockArry.map((item: ImagesBlockData) => (
          <AnimatedElement direction="left" delay={0.2} 
            key={item.id} 
            className="relative overflow-hidden"
          >
            <div className=' duration-300 ease-linear  hover:scale-110'>
            <img 
              src={item.image} 
              alt={`Product ${item.id}`}
              className="object-cover w-full h-[350px] lg:h-[400px] xl:h-[450px] xxl:h-[550px] rounded-sm "
            />
            </div>
          </AnimatedElement>
        ))}
      </div>
    </div>
  );
};

export default ImagesBlock;
